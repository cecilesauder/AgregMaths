"""Generate the static annales index from the verified external-source catalogue."""
from __future__ import annotations

import html
import json
from pathlib import Path
from urllib.parse import urlsplit

ALLOWED_HOSTS = {
    "agreg.org",
    "www.devenirenseignant.gouv.fr",
    "wikiprepa.fr",
}


def _external_link(label: str, url: str, source: str | None = None) -> str:
    parts = urlsplit(url)
    if parts.scheme != "https" or parts.hostname not in ALLOWED_HOSTS or parts.username or parts.password:
        raise ValueError(f"Untrusted external URL in annales data: {url}")
    attribution = f'<span class="source-name">{html.escape(source)}</span>' if source else ""
    return (
        f'<a class="annales-link" href="{html.escape(url, quote=True)}" '
        f'target="_blank" rel="noopener noreferrer">{html.escape(label)} '
        f'<span aria-hidden="true">↗</span></a>{attribution}'
    )


def build_annales_page(root: Path, shell, katex_head) -> None:
    data = json.loads((root / "assets/annales.json").read_text(encoding="utf-8"))
    sessions = data["sessions"]
    years = sorted({int(session["year"]) for session in sessions}, reverse=True)
    year_options = "".join(f'<option value="{year}">{year}</option>' for year in years)
    cards: list[str] = []

    for session in sessions:
        year = int(session["year"])
        docs: list[str] = []
        subject = session["subject"]
        docs.append(
            f'<div class="annales-document" data-annales-document data-kind="subject" data-year="{year}">'
            f'<div>{_external_link(subject["label"], subject["url"], subject.get("source"))}</div></div>'
        )
        ministry_subject = session.get("ministrySubject")
        if ministry_subject:
            docs.append(
                f'<div class="annales-document" data-annales-document data-kind="subject" data-year="{year}">'
                f'<div>{_external_link(ministry_subject["label"], ministry_subject["url"], ministry_subject.get("source"))}</div></div>'
            )
        report = session.get("report")
        if report:
            if report.get("status") == "pending":
                report_body = (
                    f'<span class="annales-status">{html.escape(report["label"])}</span>'
                    f'<div class="source-name">État relevé le {html.escape(data["lastChecked"])} · '
                    f'{_external_link("Consulter l’annonce ministérielle", report["url"], report.get("source"))}</div>'
                )
            else:
                report_body = _external_link(report["label"], report["url"], report.get("source"))
                if report.get("ministryUrl"):
                    report_body += '<div class="source-name">' + _external_link(
                        "Copie sur le site du ministère", report["ministryUrl"], "Ministère de l’Éducation nationale"
                    ) + "</div>"
            docs.append(
                f'<div class="annales-document" data-annales-document data-kind="report" data-year="{year}">'
                f'<div>{report_body}</div></div>'
            )
        wikiprepa = session.get("wikiprepa")
        if wikiprepa:
            docs.append(
                f'<div class="annales-document" data-annales-document data-kind="wikiprepa" data-year="{year}">'
                f'<div>{_external_link(wikiprepa["label"], wikiprepa["url"], "WikiPrépa — source complémentaire")}</div></div>'
            )
        cards.append(
            f'<article class="annales-card" data-session-card data-year="{year}">'
            f'<header class="annales-card-head"><span class="card-tag programme">Concours docteur</span>'
            f'<h2>Session {year}</h2><span class="annales-scope">Agrégation externe spéciale · mathématiques</span></header>'
            f'<div class="annales-doc-list">{"".join(docs)}</div></article>'
        )

    sample = data["sample"]
    sample_html = f'''<section class="notice annales-sample" aria-labelledby="sample-title">
  <span class="section-kicker">Entraînement hors session</span>
  <h2 id="sample-title">{html.escape(sample["title"])}</h2>
  <p>Le sujet zéro n’est pas une session d’annale; le jury fournit séparément un sujet et son corrigé.</p>
  <div class="annales-actions">{_external_link(sample["subject"]["label"], sample["subject"]["url"], sample["subject"].get("source"))}
  {_external_link(sample["correction"]["label"], sample["correction"]["url"], sample["correction"].get("source"))}</div>
</section>'''

    related = data["related"]
    related_html = f'''<section class="annales-related" aria-labelledby="related-title">
  <h2 id="related-title">Autres archives — à distinguer</h2>
  <p>{html.escape(related["standardArchive"]["description"])}</p>
  <p>{_external_link(related["standardArchive"]["label"], related["standardArchive"]["url"])}</p>
  <p>Pour consulter le recueil WikiPrépa complet : {_external_link(related["wikiprepaHub"]["label"], related["wikiprepaHub"]["url"])}</p>
  <p>Pages ministérielles : {_external_link("Sujets 2026", related["ministry2026Subjects"]["url"])} · {_external_link("Sujets et rapports 2025", related["ministry2025SubjectsAndReports"]["url"])}</p>
</section>'''

    content = f'''<div class="breadcrumb"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><span>Annales et rapports</span></div>
<section class="page-heading"><span class="eyebrow">Concours externe spécial · mathématiques</span><h1>Annales et rapports de jury</h1>
<p>Un index de liens vers les sujets et rapports disponibles. Les documents restent hébergés par le jury, le ministère ou WikiPrépa; aucun PDF n’est recopié dans ce dépôt.</p></section>
<div class="notice source-note"><strong>Important — catégorie de concours.</strong> L’archive du jury nomme cette série « Concours docteur ». La page ministérielle la classe dans le « Concours externe spécial » : c’est cette correspondance qui est utilisée ici. Les sujets du concours externe standard sont indiqués séparément plus bas.</div>
<section class="section annales-section" aria-labelledby="sessions-title"><div class="section-heading"><div><span class="section-kicker">2017–2026</span><h2 id="sessions-title">Sessions du concours docteur</h2><p>Sujets disponibles de 2017 à 2026; rapports disponibles de 2017 à 2025. Le rapport 2026 est annoncé par le ministère comme à paraître.</p></div></div>
<div class="annales-filters"><label>Session<select id="annales-year"><option value="all">Toutes les sessions</option>{year_options}</select></label>
<label>Document<select id="annales-kind"><option value="all">Tous les documents</option><option value="subject">Sujets</option><option value="report">Rapports du jury</option><option value="wikiprepa">Fiches WikiPrépa</option></select></label>
<p id="annales-count" aria-live="polite">Tous les documents sont affichés.</p></div>
<div class="annales-grid" id="annales-results">{"".join(cards)}</div></section>
{sample_html}
<div class="notice annales-note"><strong>À propos des corrigés.</strong> L’archive du jury fournit le sujet zéro et son corrigé; elle ne répertorie pas de corrigé pour chaque annale annuelle. La fiche WikiPrépa consultée pour 2024 annonce explicitement un sujet sans corrigé. Vérifie la disponibilité sur la page de chaque session avant de planifier une correction.</div>
{related_html}
<div class="hero-actions"><a class="button" href="index.html">← Retour au portail</a><a class="button button-primary" href="jeu.html">Réviser les notions du programme →</a></div>'''
    extra = katex_head("./") + '\n  <link rel="stylesheet" href="./assets/tools.css">\n  <script defer src="./assets/annales-ui.js"></script>'
    page = shell("Annales et rapports — Agrégation externe spéciale de mathématiques", content, base="./", extra_head=extra)
    (root / "annales.html").write_text(page, encoding="utf-8")
