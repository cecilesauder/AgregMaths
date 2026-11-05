#!/usr/bin/env python3
"""Valide la structure de la banque locale du jeu de révision."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BANK_PATH = ROOT / "assets" / "game-bank.json"
GESTURES = ["recall", "apply", "proof", "diagnose"]
EXPECTED_SECTIONS = {
    "t01": ["1.1(a)", "1.1(b)", "1.2(a)", "1.2(b)", "1.2(c)", "1.2(d)"],
    "t02": ["(a)", "(b)", "(c)", "(d)"],
    "t03": ["(a)", "(b)", "(c)", "(d)", "(e)", "(f)"],
    "t04": ["(a)", "(b)", "(c)", "(d)", "(e)"],
    "t05": ["(a)", "(b)", "(c)", "(d)", "(e)"],
    "t06": ["6.1", "6.2", "6.3(a)", "6.3(b)", "6.4", "6.5(a)", "6.5(b)", "6.6", "6.7"],
    "t07": ["7.1(a)", "7.1(b)", "7.2(a)", "7.2(b)", "7.2(c)", "7.2(d)", "7.2(e)"],
    "t08": ["8.1(a)", "8.1(b)", "8.1(c)", "8.1(d)", "8.1(e)", "8.2(a)", "8.2(b)", "8.2(c)", "8.2(d)", "8.3(a)", "8.3(b)", "8.3(c)"],
    "t09": ["9.1(a)", "9.1(b)", "9.1(c)", "9.1(d)", "9.1(e)", "9.1(f)", "9.2(a)", "9.2(b)", "9.2(c)", "9.3(a)", "9.3(b)", "9.3(c)"],
    "t10": ["10.1", "10.2(a)", "10.2(b)", "10.2(c)", "10.2(d)", "10.2(e)", "10.3(a)", "10.3(b)"],
    "t11": ["11.1", "11.2(a)", "11.2(b)", "11.3(a)", "11.3(b)", "11.4(a)", "11.4(b)", "11.4(c)"],
    "t12": ["12.1", "12.2", "12.3", "12.4", "12.5"],
    "tA": ["(a)", "(b)", "(c)", "(d)", "(e)", "(f)", "(g)", "(h)"],
}


def require_text(value: object, where: str) -> None:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{where}: texte absent ou vide")


def validate() -> dict[str, int]:
    bank = json.loads(BANK_PATH.read_text(encoding="utf-8"))
    if bank.get("schemaVersion") != 1:
        raise ValueError("Version de schéma inconnue")
    if [item.get("id") for item in bank.get("gestures", [])] != GESTURES:
        raise ValueError("Les quatre gestes globaux sont absents ou dans un ordre inattendu")

    titles = bank.get("titles")
    if not isinstance(titles, list) or [item.get("id") for item in titles] != list(EXPECTED_SECTIONS):
        raise ValueError("Les 12 titres communs et l’option A ne sont pas tous dans l’ordre attendu")

    section_count = 0
    activity_count = 0
    knowledge_count = 0
    annale_count = 0
    needs_review_count = 0
    card_ids: set[str] = set()
    known_codes = {
        f"{title_id}/{section_id}"
        for title_id, section_ids in EXPECTED_SECTIONS.items()
        for section_id in section_ids
    }
    for title in titles:
        title_id = title["id"]
        require_text(title.get("title"), title_id)
        source = ROOT / title.get("sourceGuide", "")
        if not source.is_file():
            raise ValueError(f"{title_id}: guide source absent ({source})")

        sections = title.get("sections")
        if not isinstance(sections, list):
            raise ValueError(f"{title_id}: liste de sous-parties absente")
        actual_ids = [section.get("sectionId", section.get("id")) for section in sections]
        if actual_ids != EXPECTED_SECTIONS[title_id]:
            raise ValueError(f"{title_id}: codes inattendus: {actual_ids!r}")

        for section in sections:
            section_id = section.get("id")
            if section_id != section.get("sectionId"):
                raise ValueError(f"{title_id}: id et sectionId divergent")
            require_text(section.get("sectionTitle"), f"{title_id}/{section_id}")
            notions = section.get("notions")
            if not isinstance(notions, list) or not notions or any(not str(n).strip() for n in notions):
                raise ValueError(f"{title_id}/{section_id}: notions absentes")
            activities = section.get("activities")
            if not isinstance(activities, list) or [a.get("gesture") for a in activities] != GESTURES:
                raise ValueError(f"{title_id}/{section_id}: les quatre gestes sont absents ou mal ordonnés")
            for activity in activities:
                for field in ("prompt", "modelAnswer", "explanation"):
                    require_text(activity.get(field), f"{title_id}/{section_id}/{activity['gesture']}/{field}")
                card_id = str(activity.get("id") or f"{title_id}/{section_id}/{activity['gesture']}")
                if card_id in card_ids:
                    raise ValueError(f"Identifiant de carte dupliqué: {card_id}")
                card_ids.add(card_id)
                needs_review_count += bool(activity.get("needsReview"))

            knowledge_cards = section.get("knowledgeCards") or section.get("courseCards") or section.get("knowledge") or []
            if not isinstance(knowledge_cards, list) or not knowledge_cards:
                raise ValueError(f"{title_id}/{section_id}: aucune fiche de cours reliée")
            for index, card in enumerate(knowledge_cards, start=1):
                card_id = str(card.get("id") or f"{title_id}/{section_id}/cours-{index}")
                if card_id in card_ids:
                    raise ValueError(f"Identifiant de carte dupliqué: {card_id}")
                card_ids.add(card_id)
                require_text(card.get("prompt"), f"{card_id}/prompt")
                answer = card.get("modelAnswer") or card.get("answer") or card.get("solution")
                require_text(answer, f"{card_id}/answer")
                if card.get("needsReview"):
                    require_text(card.get("reviewNote"), f"{card_id}/reviewNote")
                    needs_review_count += 1
                knowledge_count += 1

            annale_cards = section.get("annaleCards") or section.get("annales") or []
            if not isinstance(annale_cards, list):
                raise ValueError(f"{title_id}/{section_id}: annaleCards doit être une liste")
            for index, card in enumerate(annale_cards, start=1):
                card_id = str(card.get("id") or f"{title_id}/{section_id}/annale-{index}")
                if card_id in card_ids:
                    raise ValueError(f"Identifiant de carte dupliqué: {card_id}")
                card_ids.add(card_id)
                require_text(card.get("prompt"), f"{card_id}/prompt")
                require_text(card.get("modelAnswer") or card.get("answer"), f"{card_id}/answer")
                provenance = card.get("provenance")
                if not isinstance(provenance, dict):
                    raise ValueError(f"{card_id}: provenance absente")
                if not isinstance(provenance.get("session"), int):
                    raise ValueError(f"{card_id}: année de session absente")
                require_text(provenance.get("question"), f"{card_id}/question")
                require_text(provenance.get("page"), f"{card_id}/page")
                if not str(provenance.get("subjectUrl", "")).startswith("https://"):
                    raise ValueError(f"{card_id}: lien officiel du sujet invalide")
                codes = provenance.get("programCodes")
                if not isinstance(codes, list) or not codes or codes[0] != f"{title_id}/{section_id}":
                    raise ValueError(f"{card_id}: code principal différent de sa section")
                for code in codes + (provenance.get("relatedProgramCodes") or []):
                    if code not in known_codes:
                        raise ValueError(f"{card_id}: code de programme inconnu: {code}")
                if provenance.get("mappingConfidence") not in {"direct", "probable"}:
                    raise ValueError(f"{card_id}: confiance de rattachement invalide")
                if provenance.get("mappingConfidence") == "probable":
                    require_text(card.get("reviewNote"), f"{card_id}/reviewNote")
                    needs_review_count += 1
                annale_count += 1

            section_count += 1
            activity_count += len(activities)

    return {
        "titles": len(titles),
        "subsections": section_count,
        "activities": activity_count,
        "knowledgeCards": knowledge_count,
        "annaleCards": annale_count,
        "needsReview": needs_review_count,
        "cardsTotal": activity_count + knowledge_count + annale_count,
    }


if __name__ == "__main__":
    print(json.dumps(validate(), ensure_ascii=False))
