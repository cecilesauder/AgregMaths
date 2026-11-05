#!/usr/bin/env python3
"""Generate GitHub Pages pages from the revision sources in this repository.

The generator reads only the known programme guides and HTML links already listed
in README.md. Markdown-derived HTML is sanitized before it is written.
"""
from __future__ import annotations

import html
import json
import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit

import bleach
import markdown
from build_annales import build_annales_page

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "guides"

GUIDES = [
    ("titre-01", "Titre 1 — Algèbre linéaire", "05-programme-2027/titre-01.md", "programme"),
    ("titre-02", "Titre 2 — Groupes", "05-programme-2027/titre-02.md", "programme"),
    ("titre-03", "Titre 3 — Anneaux, corps et polynômes", "05-programme-2027/titre-03.md", "programme"),
    ("titre-04", "Titre 4 — Formes bilinéaires et quadratiques", "05-programme-2027/titre-04.md", "programme"),
    ("titre-05", "Titre 5 — Géométries affine et euclidienne", "05-programme-2027/titre-05.md", "programme"),
    ("titre-06", "Titre 6 — Analyse à une variable réelle", "05-programme-2027/titre-06.md", "programme"),
    ("titre-07", "Titre 7 — Analyse à une variable complexe", "05-programme-2027/titre-07.md", "programme"),
    ("titre-08", "Titre 8 — Topologie, espaces normés et Hilbert", "05-programme-2027/titre-08.md", "programme"),
    ("titre-09", "Titre 9 — Calcul différentiel", "05-programme-2027/titre-09.md", "programme"),
    ("titre-10", "Titre 10 — Calcul intégral, mesure et Fourier", "05-programme-2027/titre-10.md", "programme"),
    ("titre-11", "Titre 11 — Probabilités et statistiques", "05-programme-2027/titre-11.md", "programme"),
    ("titre-12", "Titre 12 — Méthodes numériques", "05-programme-2027/titre-12.md", "programme"),
    ("titre-A", "Programme spécifique — Option A", "05-programme-2027/titre-A.md", "option"),
]
TRANSVERSAL = ("fiches-a5", "Fiches transversales A5", "04-fiches-transversales/contenu_fiches_A5_agregation-1.md", "transversal")

TAGS = {
    "01": ["espaces vectoriels", "applications linéaires", "dualité", "déterminants", "Gauss", "réduction"],
    "02": ["groupes", "actions", "quotients", "morphismes"],
    "03": ["anneaux", "corps", "polynômes"],
    "04": ["formes bilinéaires", "formes quadratiques", "réduction"],
    "05": ["géométrie affine", "euclidienne", "isométries"],
    "06": ["suites", "séries", "intégration", "fonctions"],
    "07": ["analyse complexe", "holomorphie", "résidus"],
    "08": ["topologie", "Hilbert", "espaces normés"],
    "09": ["calcul différentiel", "EDO", "sous-variétés"],
    "10": ["mesure", "Lebesgue", "Fourier"],
    "11": ["probabilités", "statistiques", "variables aléatoires"],
    "12": ["méthodes numériques", "erreurs", "algorithmes"],
    "A": ["option A", "probabilités", "statistiques", "modélisation"],
}

HINTS = [
    "Écris d’abord f sous forme de matrice : la troisième ligne dépend des deux premières. Décris ensuite le noyau et l’image avec des paramètres libres.",
    "Teste la stabilité sur les générateurs. Pour la décomposition, distingue le noyau d’un facteur simple de celui du facteur répété.",
    "Commence par les dépendances entre lignes de A. Dans les bases duales, la matrice de f* est la transposée de celle de f.",
    "Développe avec multilinéarité et alternance; conserve le signe du vecteur c=−e₁−e₃.",
    "Effectue les opérations qui préservent le rang, puis traite séparément α=2 : ne divise pas par α−2 avant ce cas.",
    "Le facteur répété de χ_A signale un bloc non diagonalisable. Calcule la décomposition de Dunford avant l’exponentielle.",
]

KEY_FORMULAS = [
    [
        r"f(x_1,x_2,x_3,x_4)=(x_1+x_3,\,x_2+x_3,\,x_1+x_2+2x_3)",
        r"\ker f=\operatorname{Vect}\{(-1,-1,1,0),(0,0,0,1)\},\quad \operatorname{Im}f=\operatorname{Vect}\{(1,0,1),(0,1,1)\}",
        r"\dim\ker f=\operatorname{rg}f=2,\qquad \mathbb R^4=\ker f\oplus\operatorname{Vect}(e_1,e_2)",
    ],
    [
        r"A=\begin{pmatrix}2&1&0\\0&2&0\\0&0&-1\end{pmatrix},\qquad (X-2)^2(X+1)(u)=0",
        r"\mathbb R^3=\ker(u-2I)^2\oplus\ker(u+I)=\operatorname{Vect}(e_1,e_2)\oplus\operatorname{Vect}(e_3)",
    ],
    [
        r"\operatorname{rg}f=2,\quad \dim\ker f=2,\quad \dim E=\dim\ker f+\operatorname{rg}f=4",
        r"\operatorname{Mat}(f^*)=A^{\mathsf T},\qquad \operatorname{Im}(f^*)=(\ker f)^\circ",
    ],
    [
        r"D(a,b,c)=-2,\qquad [T]_E=\begin{pmatrix}1&0&-1\\1&1&0\\0&1&-1\end{pmatrix}",
        r"\det T=-2\ne0,\qquad T\in GL_3(\mathbb R)\setminus SL_3(\mathbb R)",
    ],
    [
        r"\det A=\alpha-2",
        r"\alpha\ne2:\quad (x,y,z)=\left(3-\beta,\frac{3-\beta}{\alpha-2},\beta-2-\frac{3-\beta}{\alpha-2}\right)",
        r"\alpha=2,\ \beta=3:\quad \{(0,t,1-t):t\in\mathbb R\};\qquad \alpha=2,\ \beta\ne3:\quad \varnothing",
    ],
    [
        r"\chi_A(X)=\mu_A(X)=(X-2)^2(X+1)=X^3-3X^2+4",
        r"A^k=\begin{pmatrix}2^k&k2^{k-1}&0\\0&2^k&0\\0&0&(-1)^k\end{pmatrix}\quad(k\ge1)",
        r"e^{tA}=\begin{pmatrix}e^{2t}&te^{2t}&0\\0&e^{2t}&0\\0&0&e^{-t}\end{pmatrix}",
    ],
]

ALLOWED_TAGS = {
    "a", "abbr", "b", "blockquote", "br", "caption", "code", "col", "colgroup",
    "dd", "del", "details", "div", "dl", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6",
    "hr", "i", "img", "input", "li", "ol", "p", "pre", "s", "span", "strong", "sub", "summary",
    "sup", "table", "tbody", "td", "th", "thead", "tr", "ul",
}
ALLOWED_ATTRIBUTES = {
    "a": ["href", "title"],
    "abbr": ["title"],
    "code": ["class"],
    "div": ["class"],
    "img": ["src", "alt", "title", "width", "height"],
    "input": ["type", "checked", "disabled"],
    "ol": ["start"],
    "span": ["class"],
    "td": ["align", "colspan", "rowspan"],
    "th": ["align", "colspan", "rowspan"],
}


def clean_html(raw: str) -> str:
    return bleach.clean(
        raw,
        tags=ALLOWED_TAGS,
        attributes=ALLOWED_ATTRIBUTES,
        protocols={"http", "https", "mailto"},
        strip=True,
        strip_comments=True,
    )


MATH_DELIMITER_RE = re.compile(
    r"\$\$.*?\$\$|\\\[.*?\\\]|\\\(.*?\\\)|(?<!\\)\$(?!\$)[^\n$]+?(?<!\\)\$",
    re.DOTALL,
)
MARKDOWN_CODE_SEGMENTS_RE = re.compile(
    r"(`{3,}[\s\S]*?`{3,}|~{3,}[\s\S]*?~{3,}|`[^`\n]*?`)",
)


def protect_math_delimiters(source: str) -> tuple[str, dict[str, str]]:
    """Stash TeX spans before Markdown/Bleach can interpret their punctuation."""
    replacements: dict[str, str] = {}
    prefix = "MATHRENDERPLACEHOLDER"
    while prefix in source:
        prefix += "X"
    pieces = MARKDOWN_CODE_SEGMENTS_RE.split(source)
    for index in range(0, len(pieces), 2):
        def stash(match: re.Match[str]) -> str:
            original = match.group(0)
            display = original.startswith(("$$", r"\["))
            class_name = "math-display" if display else "math-inline"
            token = f"{prefix}{len(replacements):06d}END"
            replacements[token] = f'<span class="{class_name}">{html.escape(original, quote=False)}</span>'
            return token

        pieces[index] = MATH_DELIMITER_RE.sub(stash, pieces[index])
    return "".join(pieces), replacements


def md_to_html(source: str, source_path: Path | None = None) -> str:
    if source_path:
        source = rewrite_markdown_links(source, source_path)
    protected, math_replacements = protect_math_delimiters(source)
    raw = markdown.markdown(
        protected,
        extensions=["tables", "fenced_code", "toc", "sane_lists", "smarty"],
        output_format="html",
    )
    rendered = clean_html(raw)
    for token, math_markup in math_replacements.items():
        rendered = rendered.replace(token, math_markup)
    return rendered

SUBSCRIPT_CHARS = {
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5",
    "₆": "6", "₇": "7", "₈": "8", "₉": "9", "ₐ": "a", "ₑ": "e",
    "ₕ": "h", "ᵢ": "i", "ⱼ": "j", "ₖ": "k", "ₗ": "l", "ₘ": "m",
    "ₙ": "n", "ₒ": "o", "ₚ": "p", "ₛ": "s", "ₜ": "t", "ᵤ": "u",
    "ᵥ": "v", "ₓ": "x",
}
SUPERSCRIPT_CHARS = {
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5",
    "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-",
    "⁼": "=", "ⁱ": "i", "ⁿ": "n",
}
MATH_SYMBOLS = {
    "ℝ": r"\mathbb{R}", "ℂ": r"\mathbb{C}", "ℚ": r"\mathbb{Q}",
    "ℤ": r"\mathbb{Z}", "ℕ": r"\mathbb{N}", "∈": r"\in", "∉": r"\notin",
    "⊂": r"\subset", "⊆": r"\subseteq", "⊃": r"\supset", "⊕": r"\oplus",
    "⊥": r"\perp", "→": r"\to", "↦": r"\mapsto", "×": r"\times",
    "·": r"\cdot", "⋅": r"\cdot", "−": "-", "≤": r"\leq", "≥": r"\geq",
    "≠": r"\neq", "≈": r"\approx", "∞": r"\infty", "∪": r"\cup",
    "∩": r"\cap", "∑": r"\sum", "Σ": r"\sum", "∏": r"\prod", "Π": r"\prod",
    "∀": r"\forall", "∃": r"\exists", "∧": r"\wedge", "∨": r"\vee",
    "∘": r"\circ", "⟨": r"\langle", "⟩": r"\rangle",
}
GREEK_SYMBOLS = {
    "α": r"\alpha", "β": r"\beta", "γ": r"\gamma", "δ": r"\delta",
    "ε": r"\varepsilon", "θ": r"\theta", "λ": r"\lambda", "μ": r"\mu",
    "π": r"\pi", "ρ": r"\rho", "σ": r"\sigma", "τ": r"\tau",
    "φ": r"\varphi", "χ": r"\chi", "ψ": r"\psi", "ω": r"\omega",
}
MATH_WORDS = {"ker", "im", "vect", "rg", "rang", "dim", "det", "tr", "span", "gl", "sl", "diag", "mat", "sin", "cos", "exp", "log", "lim", "sup", "inf", "card"}


def escape_set_braces(expression: str) -> str:
    """Escape literal set braces while preserving TeX command/script groups."""
    output: list[str] = []
    groups: list[bool] = []
    for index, char in enumerate(expression):
        if char not in "{}":
            output.append(char)
            continue
        slashes = 0
        cursor = index - 1
        while cursor >= 0 and expression[cursor] == "\\":
            slashes += 1
            cursor -= 1
        if slashes % 2:
            output.append(char)
            continue
        if char == "{":
            prefix = "".join(output)
            is_group = prefix.endswith(("_", "^")) or re.search(r"\\[A-Za-z]+\s*$", prefix) is not None
            groups.append(is_group)
            output.append("{" if is_group else r"\{")
        else:
            is_group = groups.pop() if groups else True
            output.append("}" if is_group else r"\}")
    return "".join(output)


def math_text_to_tex(expression: str) -> str:
    text = re.sub(r"\[\[(.*?)\]\]", lambda m: matrix_to_tex(m.group(1)), expression.strip())
    text = escape_set_braces(text)
    text = re.sub(r"([A-Za-z])̃", lambda m: rf"\widetilde{{{m.group(1)}}}", text)
    text = re.sub(r"([A-Za-z])′", lambda m: rf"{m.group(1)}^{{\prime}}", text)
    for word, command in (("ker", r"\ker"), ("Im", r"\operatorname{Im}"), ("Vect", r"\operatorname{Vect}"), ("rg", r"\operatorname{rg}"), ("dim", r"\dim"), ("det", r"\det"), ("Mat", r"\operatorname{Mat}"), ("GL", r"\operatorname{GL}"), ("SL", r"\operatorname{SL}"), ("diag", r"\operatorname{diag}")):
        text = re.sub(rf"(?<![A-Za-z]){word}(?![A-Za-z])", lambda _match, replacement=command: replacement, text)
    for symbol, command in {**MATH_SYMBOLS, **GREEK_SYMBOLS}.items():
        text = text.replace(symbol, command)

    output: list[str] = []
    i = 0
    while i < len(text):
        if text[i] in SUBSCRIPT_CHARS:
            digits = []
            while i < len(text) and text[i] in SUBSCRIPT_CHARS:
                digits.append(SUBSCRIPT_CHARS[text[i]])
                i += 1
            output.append("_{" + "".join(digits) + "}")
        elif text[i] in SUPERSCRIPT_CHARS:
            powers = []
            while i < len(text) and text[i] in SUPERSCRIPT_CHARS:
                powers.append(SUPERSCRIPT_CHARS[text[i]])
                i += 1
            output.append("^{" + "".join(powers) + "}")
        elif text[i] == "ᵀ":
            output.append(r"^{\mathsf T}")
            i += 1
        else:
            output.append(text[i])
            i += 1
    return "".join(output)


def matrix_to_tex(contents: str) -> str:
    rows = re.split(r"\]\s*,\s*\[", contents.strip())
    rows = [re.sub(r"^\[|\]$", "", row.strip()) for row in rows]
    body = r" \\ ".join(" & ".join(cell.strip() for cell in row.split(",")) for row in rows)
    return r"\begin{pmatrix}" + body + r"\end{pmatrix}"


def is_math_only_line(line: str) -> bool:
    text = re.sub(r"^\d+[.)]\s*", "", line.strip()).rstrip(".,;")
    if not text or text.startswith(("#", "-", "*", ">", "|", "<")) or "\\(" in text or "\\[" in text or "`" in text:
        return False
    if not re.search(r"[=∈∉⊂⊃⊆⊕⊥→↦≤≥≠≈×∩∪∑]", text):
        return False
    words = re.findall(r"[^\W\d_]+", text, flags=re.UNICODE)
    return all(
        len(word) == 1
        or word.casefold() in MATH_WORDS
        or re.fullmatch(r"[A-Za-zΑ-Ωα-ω]+[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+", word)
        for word in words
    )


def render_math_block(expressions: list[str]) -> str:
    rendered = []
    for expression in expressions:
        formula = math_text_to_tex(re.sub(r"^\d+[.)]\s*", "", expression.strip()).rstrip(".,;"))
        if len(expressions) > 1 and "=" in formula:
            left, right = formula.split("=", 1)
            rendered.append(left.strip() + " &= " + right.strip())
        else:
            rendered.append(formula)
    body = rendered[0] if len(rendered) == 1 else r"\begin{aligned}" + r" \\ ".join(rendered) + r"\end{aligned}"
    return '<div class="equation-block">\\[' + html.escape(body, quote=False) + r"\]</div>"


MATH_ATOM = r"(?:[+\-−]\s*)?(?:[A-Za-zΑ-Ωα-ωℝℂℚℤℕ](?:[A-Za-zΑ-Ωα-ωℝℂℚℤℕ0-9_{}^′̃₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]*)?(?:\((?:[^()\n]|\([^()\n]*\))*\))?|\([^()\n]+\)|\{[^{}\n]+\}|\d+(?:/\d+)?)"
MATH_RELATION = r"(?:=|∈|∉|→|↦|⊕|≠|≤|≥|≈|⊂|⊆|⊥)"
MATH_TERM = rf"{MATH_ATOM}(?:\s*[+\-−*/]\s*{MATH_ATOM})*"
INLINE_EQUATION_RE = re.compile(rf"(?<![A-Za-zÀ-ÖØ-öø-ÿ0-9_]){MATH_TERM}(?:\s*{MATH_RELATION}\s*{MATH_TERM})+(?![A-Za-zÀ-ÖØ-öø-ÿ0-9_])")
INLINE_SYMBOL_RE = re.compile(r"(?<![A-Za-zÀ-ÖØ-öø-ÿ0-9_])(?:ℤ/\d+ℤ|[ℝℂℚℤℕ](?:\[[A-Z]\])?(?:[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]+)?|[A-Za-zΑ-Ωα-ω](?:[_^][A-Za-z0-9{}]+|[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]+)|[α-ωΑ-Ω])(?![A-Za-zÀ-ÖØ-öø-ÿ0-9_])")


def format_inline_math(line: str) -> str:
    if "\\(" in line or "\\[" in line or "$$" in line or "`" in line or "<code" in line:
        return line
    saved: dict[str, str] = {}

    def stash(match: re.Match[str]) -> str:
        token = f"MATHPLACEHOLDER{len(saved)}END"
        saved[token] = '<span class="math-inline">&#92;(' + html.escape(math_text_to_tex(match.group(0)), quote=False) + r"&#92;)</span>"
        return token

    line = INLINE_EQUATION_RE.sub(stash, line)
    line = INLINE_SYMBOL_RE.sub(stash, line)
    for token, value in saved.items():
        line = line.replace(token, value)
    return line


def exercise_md_to_html(source: str) -> str:
    lines = source.splitlines()
    output: list[str] = []
    i = 0
    fenced = False
    while i < len(lines):
        line = lines[i]
        if line.lstrip().startswith("```"):
            fenced = not fenced
            output.append(line)
            i += 1
            continue
        if fenced:
            output.append(line)
            i += 1
            continue
        if line.startswith("    "):
            block: list[str] = []
            j = i
            while j < len(lines):
                if lines[j].startswith("    "):
                    block.append(lines[j][4:])
                    j += 1
                elif not lines[j].strip() and j + 1 < len(lines) and lines[j + 1].startswith("    "):
                    block.append("")
                    j += 1
                else:
                    break
            expressions = [item for item in block if item.strip()]
            if expressions and all(is_math_only_line(item) for item in expressions):
                output.extend(["", render_math_block(expressions), ""])
            else:
                output.extend(lines[i:j])
            i = j
            continue
        if is_math_only_line(line):
            expressions = [line]
            j = i + 1
            while j < len(lines) and lines[j].strip() and not lines[j].startswith("    ") and is_math_only_line(lines[j]):
                expressions.append(lines[j])
                j += 1
            output.extend(["", render_math_block(expressions), ""])
            i = j
            continue
        output.append(format_inline_math(line))
        i += 1
    return md_to_html("\n".join(output))


def rewrite_markdown_links(source: str, current: Path) -> str:
    def replace(match: re.Match[str]) -> str:
        label, target = match.group(1), match.group(2)
        parts = urlsplit(target)
        path = unquote(parts.path)
        if not path or path.startswith(("http://", "https://", "mailto:")):
            return match.group(0)
        resolved = (current.parent / path).resolve()
        try:
            rel = resolved.relative_to(ROOT.resolve()).as_posix()
        except ValueError:
            return match.group(0)
        guide_map = {src: f"{slug}.html" for slug, _title, src, _track in GUIDES}
        guide_map[TRANSVERSAL[2]] = f"{TRANSVERSAL[0]}.html"
        if rel in guide_map:
            new_path = guide_map[rel]
        elif rel == "05-programme-2027/exercices-titre-01.md":
            new_path = "../exercices-titre-01.html"
        elif rel == "05-programme-2027/SOURCES.md":
            new_path = "../05-programme-2027/SOURCES.md"
        else:
            return match.group(0)
        if parts.fragment:
            new_path += "#" + parts.fragment
        return f"[{label}]({new_path})"
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", replace, source)


def katex_head(relative_root: str = "../") -> str:
    return f'''<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" crossorigin="anonymous">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="{relative_root}assets/site.css">
  <script defer src="{relative_root}assets/site.js"></script>'''


def shell(title: str, content: str, base: str = "../", progress_total: int = 0, extra_head: str = "") -> str:
    extra_head_block = f"  {extra_head}\n" if extra_head else ""
    return f'''<!doctype html>
<html lang="fr" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#11131a">
  <meta name="description" content="{html.escape(title)} — ressource de révision Agrégation Maths 2027.">
  <title>{html.escape(title)} · AGREG 27</title>
  <link rel="icon" href="{base}favicon.svg" type="image/svg+xml">
{extra_head_block}</head>
<body data-base="{base}" data-progress-total="{progress_total}">
  <a class="skip-link" href="#main">Passer au contenu</a>
  <header class="topbar"><div class="site-shell topbar-inner">
    <a class="brand" href="{base}index.html" aria-label="Retour à l’accueil AGREG 27"><span class="brand-mark" aria-hidden="true">∑</span><span class="brand-name">AGREG · 27<small>Atelier de révision</small></span></a>
    <nav class="topnav" aria-label="Navigation principale"><a href="{base}index.html#programme">Catalogue</a><a href="{base}jeu.html">Jeu</a><a href="{base}annales.html">Annales</a><a href="{base}exercices-titre-01.html">Exercices T1</a><button class="theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Activer le thème clair">☼</button></nav>
  </div></header>
  <main id="main" class="site-shell">{content}</main>
  <footer class="site-footer"><div class="site-shell site-footer-inner"><span>AGREG · 27 — Atelier de révision</span><span>Les supports ne remplacent pas le programme officiel.</span></div></footer>
</body>
</html>'''


def build_guides(catalogue: list[dict]) -> list[dict]:
    OUT.mkdir(parents=True, exist_ok=True)
    guide_entries = []
    all_defs = [(slug, title, src, track) for slug, title, src, track in GUIDES]
    all_defs.append(TRANSVERSAL)
    for slug, title, source_rel, track in all_defs:
        source_path = ROOT / source_rel
        if not source_path.is_file():
            raise FileNotFoundError(f"Guide source missing: {source_rel}")
        body = md_to_html(source_path.read_text(encoding="utf-8"), source_path)
        if slug == "titre-01":
            banner = '<div class="notice"><strong>Pour t’entraîner :</strong> les six exercices corrigés du titre 1 sont présentés en étapes, avec indices et auto-évaluation.<br><a href="../exercices-titre-01.html">Ouvrir le recueil interactif →</a></div>'
            body = banner + body
        top = f'''<div class="breadcrumb"><a href="../index.html">Accueil</a><span aria-hidden="true">/</span><a href="index.html">Guides</a><span aria-hidden="true">/</span><span>{html.escape(title)}</span></div>
<div class="guide-top"><a href="index.html">← Tous les guides</a><a href="../index.html#programme">← Catalogue de révision</a></div>
<article class="guide-container markdown-body">{body}</article>'''
        page = shell(title, top, base="../", extra_head=katex_head("../"))
        (OUT / f"{slug}.html").write_text(page, encoding="utf-8")
        guide_entries.append({
            "id": f"guide-{slug}", "title": title, "description": "Carte de notions, résultats, hypothèses et points de vigilance à travailler pour ce titre.",
            "url": f"guides/{slug}.html", "track": track, "kind": "guide", "tags": [title, "guide", "checklist"],
        })

    cards = []
    for entry in guide_entries:
        cards.append(f'<a class="resource-card" href="{html.escape(entry["url"].split("/")[-1])}"><span class="card-tag {entry["track"]}">{html.escape(entry["track"])}</span><h3>{html.escape(entry["title"])}</h3><p>{html.escape(entry["description"])}</p><span>Ouvrir →</span></a>')
    index_content = f'''<div class="breadcrumb"><a href="../index.html">Accueil</a><span aria-hidden="true">/</span><span>Guides</span></div>
<section class="page-heading"><span class="eyebrow">Programme officiel · session 2027</span><h1>Guides de révision</h1><p>Treize cartes de couverture, du titre 1 au programme spécifique de l’option A, plus les fiches transversales A5.</p></section>
<div class="resource-grid">{''.join(cards)}</div>'''
    (OUT / "index.html").write_text(shell("Guides de révision", index_content, base="../"), encoding="utf-8")
    return guide_entries


def parse_catalogue() -> list[dict]:
    readme = ROOT / "README.md"
    if not readme.exists():
        raise FileNotFoundError("README.md is required to build the HTML resource catalogue")
    entries: list[dict] = []
    group = "Ressources pédagogiques"
    track = "transversal"
    index = 1
    line_re = re.compile(r"^\s*- \[([^\]]+)\]\(([^)]+)\)\s+—\s+(.*)$")
    for line in readme.read_text(encoding="utf-8").splitlines():
        heading = re.match(r"^###\s+(.+)$", line)
        if heading:
            group = heading.group(1).strip()
            lowered = group.casefold()
            if lowered.startswith("algèbre"):
                track = "algebre"
            elif lowered.startswith("analyse"):
                track = "analyse"
            elif lowered.startswith("option a"):
                track = "option"
            elif lowered.startswith("fiches transversales"):
                track = "transversal"
            continue
        match = line_re.match(line)
        if not match:
            continue
        title, target, description = match.groups()
        decoded = unquote(target.strip())
        if not decoded.endswith(".html"):
            continue
        if not decoded.startswith(("01-algebre/", "02-analyse/", "03-option-A/")):
            continue
        if not (ROOT / decoded).is_file():
            print(f"Skip missing HTML resource: {decoded}", file=sys.stderr)
            continue
        # Strip inline Markdown markers; render plain description as text in JS.
        description = re.sub(r"\$([^$]+)\$", r"\1", description)
        description = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", description)
        description = re.sub(r"[`*_]", "", description)
        description = html.unescape(description).strip()
        slug = re.sub(r"[^a-z0-9]+", "-", title.casefold()).strip("-")
        safe_url = quote(decoded, safe="/-._~")
        entries.append({
            "id": f"resource-{slug}", "title": title, "description": description,
            "url": safe_url, "track": track, "kind": "html", "group": group,
            "tags": [group, track, title],
        })
        index += 1
    return entries


def build_exercises() -> dict:
    source_path = ROOT / "05-programme-2027/exercices-titre-01.md"
    source = source_path.read_text(encoding="utf-8")
    starts = list(re.finditer(r"(?m)^## Exercice (\d+) — (.+)$", source))
    if len(starts) != 6:
        raise ValueError(f"Expected six title-1 exercises, found {len(starts)}")
    exercises = []
    for pos, match in enumerate(starts):
        number = int(match.group(1))
        chunk_end = starts[pos + 1].start() if pos + 1 < len(starts) else source.find("\n## Référence du programme", match.end())
        if chunk_end < 0:
            chunk_end = len(source)
        chunk = source[match.end():chunk_end]
        headings = list(re.finditer(r"(?m)^### (Énoncé|Correction détaillée|Vérifications rapides)\s*$", chunk))
        sections: dict[str, str] = {}
        for i, heading in enumerate(headings):
            end = headings[i + 1].start() if i + 1 < len(headings) else len(chunk)
            sections[heading.group(1)] = chunk[heading.end():end].strip()
        if not {"Énoncé", "Correction détaillée", "Vérifications rapides"}.issubset(sections):
            raise ValueError(f"Exercise {number} is missing a required section")
        correction = sections["Correction détaillée"]
        step_matches = list(re.finditer(r"(?m)^#### (.+)$", correction))
        steps = []
        for i, step_match in enumerate(step_matches):
            end = step_matches[i + 1].start() if i + 1 < len(step_matches) else len(correction)
            step_source = correction[step_match.end():end].strip()
            if step_source:
                steps.append((step_match.group(1).strip(), exercise_md_to_html(step_source)))
        exercises.append({
            "number": number, "title": match.group(2).strip(),
            "statement": exercise_md_to_html(sections["Énoncé"]),
            "steps": steps,
            "checks": exercise_md_to_html(sections["Vérifications rapides"]),
        })
    return {"source": source, "exercises": exercises}


def build_exercise_page() -> None:
    parsed = build_exercises()
    exercises = parsed["exercises"]
    nav = ''.join(f'<a href="#exercise-{e["number"]}">Ex. {e["number"]}</a>' for e in exercises)
    cards = []
    for e in exercises:
        n = e["number"]
        subpart = re.search(r"1\.1 \([ab]\)|1\.2 \([abcd]\)", e["title"])
        subpart_text = subpart.group(0) if subpart else f"Exercice {n}"
        formula_blocks = ''.join(
            '<div class="math-panel"><p class="math-caption">Résultat à retenir</p><div>\\[' + html.escape(formula) + '\\]</div></div>'
            for formula in KEY_FORMULAS[n - 1]
        )
        step_details = ''.join(
            f'<details class="study-details solution-step"><summary>Étape {i} — {html.escape(title)}</summary><div class="details-content markdown-body">{body}</div></details>'
            for i, (title, body) in enumerate(e["steps"], start=1)
        )
        hint = HINTS[n - 1]
        cards.append(f'''<article class="exercise-card" id="exercise-{n}">
  <header class="exercise-head"><div class="exercise-meta"><span class="exercise-number">Exercice {n:02d} / 06</span><span class="card-tag algebre">{html.escape(subpart_text)}</span></div>
    <h2>{html.escape(e["title"].split(": ", 1)[-1])}</h2><div class="exercise-tags"><span>Rédaction</span><span>Calcul</span><span>Justification</span></div></header>
  <div class="exercise-body">
    <p class="content-label">À toi de jouer</p><div class="statement markdown-body">{e["statement"]}</div>
    <details class="study-details hint-details"><summary>Dévoiler un indice</summary><div class="details-content"><p>{html.escape(hint)}</p></div></details>
    <details class="study-details"><summary>Ouvrir la correction détaillée — une étape à la fois</summary><div class="details-content">
      {formula_blocks}
      {step_details}
      <details class="study-details quick-check"><summary>Vérifications rapides</summary><div class="details-content markdown-body">{e["checks"]}</div></details>
    </div></details>
    <div class="exercise-footer"><p>Après comparaison, note les hypothèses ou méthodes à retravailler.</p><button class="self-check" type="button" data-self-check="exercise-{n:02d}" aria-pressed="false">Marquer comme travaillé</button></div>
  </div>
</article>''')
    content = f'''<div class="breadcrumb"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><a href="guides/titre-01.html">Titre 1</a><span aria-hidden="true">/</span><span>Exercices corrigés</span></div>
<section class="page-heading"><span class="eyebrow">Titre 1 · Algèbre linéaire</span><h1>Six exercices pour vérifier le fond</h1><p>Un exercice par sous-partie officielle. Commence par l’énoncé; ouvre un indice si nécessaire, puis dévoile la correction par étapes. Les formules clés sont composées, et les démonstrations complètes restent disponibles.</p></section>
<div class="exercise-progress"><div><strong>Progression locale</strong><div class="progress-track" role="progressbar" aria-label="Exercices travaillés"><div class="progress-fill"></div></div></div><span data-progress-count>0 / 6 ressources</span></div>
<div class="exercise-layout"><nav class="exercise-nav" aria-label="Accès rapide aux exercices"><h2>Les six sous-parties</h2>{nav}</nav><div class="exercise-list">{''.join(cards)}
<div class="notice">Ces exercices sont des entraînements originaux, pas des sujets officiels ni des extraits d’annales. Ils donnent une première base de travail; ils ne couvrent pas toutes les variantes possibles.</div>
<div class="hero-actions"><a class="button" href="guides/titre-01.html">← Retour au guide du titre 1</a><a class="button button-primary" href="index.html#programme">Explorer les autres titres →</a></div>
</div></div>'''
    page = shell("Exercices corrigés — Titre 1", content, base="./", progress_total=6, extra_head=katex_head("./"))
    (ROOT / "exercices-titre-01.html").write_text(page, encoding="utf-8")


def build_catalogue(guide_entries: list[dict]) -> list[dict]:
    resources = parse_catalogue()
    exercise = {
        "id": "exercise-titre-01", "title": "Six exercices types corrigés — Titre 1",
        "description": "Une série progressive qui couvre les six sous-parties du titre 1, avec indices, corrections détaillées et vérifications rapides.",
        "url": "exercices-titre-01.html", "track": "exercices", "kind": "exercise",
        "group": "Entraînement", "tags": ["algèbre linéaire", "rang", "dualité", "déterminant", "Gauss", "réduction"],
    }
    game = {
        "id": "resource-game", "title": "Jeu de révision — programme complet",
        "description": "Rappel actif, application, preuve et diagnostic d’erreur pour les sous-parties des 12 titres communs et de l’option A.",
        "url": "jeu.html", "track": "outils", "kind": "tool", "group": "Jeu de révision",
        "tags": ["jeu", "rappel actif", "preuves", "programme 2027", "option A"],
    }
    annales = {
        "id": "resource-annales", "title": "Annales et rapports — concours docteur",
        "description": "Index sourcé des sujets 2017–2026 et rapports disponibles 2017–2025 du concours externe spécial de mathématiques.",
        "url": "annales.html", "track": "outils", "kind": "tool", "group": "Annales et rapports",
        "tags": ["annales", "sujets", "rapports du jury", "concours docteur", "externe spécial"],
    }
    coverage = {
        "id": "resource-coverage", "title": "Couverture du programme par sous-partie",
        "description": "Repère les fiches de cours, exercices originaux et questions d’annales reliés à chaque sous-partie officielle, ainsi que les cartes à vérifier.",
        "url": "couverture.html", "track": "outils", "kind": "tool", "group": "Couverture du programme",
        "tags": ["couverture", "programme 2027", "fiches de cours", "exercices", "annales"],
    }
    all_items = [game, annales, coverage, exercise, *guide_entries, *resources]
    data = {"title": "Révisions Agrégation Maths 2027", "resources": all_items}
    (ROOT / "assets/catalogue.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    html_count = len([x for x in resources if x["kind"] == "html"])
    if html_count != 24:
        raise ValueError(f"README catalog parsed {html_count} HTML resources; expected 24")
    return all_items


def build_routes(items: list[dict]) -> None:
    routes = [
        {"path": "/", "title": "Accueil — AGREG 27"},
        {"path": "/jeu.html", "title": "Jeu de révision — programme 2027"},
        {"path": "/annales.html", "title": "Annales et rapports — concours externe spécial"},
        {"path": "/couverture.html", "title": "Couverture du programme 2027"},
        {"path": "/exercices-titre-01.html", "title": "Exercices corrigés — Titre 1"},
        {"path": "/guides/", "title": "Guides du programme 2027"},
    ]
    for slug, title, _src, _track in GUIDES:
        routes.append({"path": f"/guides/{slug}.html", "title": title})
    routes.append({"path": f"/guides/{TRANSVERSAL[0]}.html", "title": TRANSVERSAL[1]})
    for item in items:
        url = item.get("url", "")
        if item.get("kind") == "html" and url.endswith(".html"):
            routes.append({"path": "/" + url, "title": item["title"]})
    (ROOT / "manus-routes.json").write_text(json.dumps({"routes": routes}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    guide_entries = build_guides([])
    build_exercise_page()
    build_annales_page(ROOT, shell, katex_head)
    items = build_catalogue(guide_entries)
    build_routes(items)
    print(f"Generated {len(guide_entries)} guide pages, exercise and annales pages, and {len(items)} catalogue entries.")
    print(f"HTML resources indexed: {len([item for item in items if item['kind'] == 'html'])}.")


if __name__ == "__main__":
    main()
