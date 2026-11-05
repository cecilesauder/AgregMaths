#!/usr/bin/env python3
"""Build a public, non-personal coverage matrix from the validated game bank."""
from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
BANK_PATH = ROOT / "assets" / "game-bank.json"
OUTPUT_PATH = ROOT / "assets" / "coverage.json"
PROGRAM_URL = "https://www.devenirenseignant.gouv.fr/media/20323/download"


def build() -> dict[str, Any]:
    bank = json.loads(BANK_PATH.read_text(encoding="utf-8"))
    linked_annales: dict[str, dict[str, dict[str, Any]]] = defaultdict(dict)
    for title in bank.get("titles", []):
        for section in title.get("sections", []):
            for card in section.get("annaleCards", []):
                provenance = card.get("provenance", {})
                for code in provenance.get("programCodes", []):
                    linked_annales[code][card.get("id", "")] = card
                for code in provenance.get("relatedProgramCodes", []):
                    linked_annales[code][card.get("id", "")] = card

    titles_out: list[dict[str, Any]] = []
    totals = {
        "titles": 0,
        "officialSubsections": 0,
        "subsectionsWithCourseCards": 0,
        "subsectionsWithOriginalExercises": 0,
        "subsectionsWithAnnales": 0,
        "courseCards": 0,
        "originalExercises": 0,
        "annaleQuestionCards": 0,
        "courseCardsNeedingReview": 0,
        "originalExercisesNeedingReview": 0,
        "annaleCardsNeedingReview": 0,
    }

    for title in bank.get("titles", []):
        title_sections: list[dict[str, Any]] = []
        for section in title.get("sections", []):
            code = f"{title['id']}/{section.get('sectionId', section.get('id'))}"
            courses = section.get("knowledgeCards") or section.get("courseCards") or section.get("knowledge") or []
            exercises = section.get("activities", [])
            primary_annales = section.get("annaleCards", [])
            annale_cards = list(linked_annales.get(code, {}).values())
            sessions = sorted({card.get("provenance", {}).get("session") for card in annale_cards if isinstance(card.get("provenance", {}).get("session"), int)})
            review = {
                "course": sum(bool(card.get("needsReview")) for card in courses),
                "originalExercises": sum(bool(card.get("needsReview")) for card in exercises),
                "annalesLinked": sum(bool(card.get("needsReview")) for card in annale_cards),
            }
            counts = {
                "courseCards": len(courses),
                "originalExercises": len(exercises),
                "annaleCardsPrimary": len(primary_annales),
                "annaleCardsLinked": len(annale_cards),
                "annaleSessions": sessions,
            }
            if courses:
                totals["subsectionsWithCourseCards"] += 1
            if exercises:
                totals["subsectionsWithOriginalExercises"] += 1
            if annale_cards:
                totals["subsectionsWithAnnales"] += 1
            totals["officialSubsections"] += 1
            totals["courseCards"] += len(courses)
            totals["originalExercises"] += len(exercises)
            totals["annaleQuestionCards"] += len(primary_annales)
            totals["courseCardsNeedingReview"] += review["course"]
            totals["originalExercisesNeedingReview"] += review["originalExercises"]
            totals["annaleCardsNeedingReview"] += sum(bool(card.get("needsReview")) for card in primary_annales)
            title_sections.append({
                "code": code,
                "sectionId": section.get("sectionId", section.get("id")),
                "label": section.get("sectionTitle", section.get("title", "")),
                "notionCount": len(section.get("notions", [])),
                "notionNames": section.get("notions", []),
                "counts": counts,
                "needsReview": review,
                "coverage": {
                    "course": bool(courses),
                    "originalExercises": bool(exercises),
                    "annales": bool(annale_cards),
                },
            })
        titles_out.append({
            "id": title["id"],
            "title": title.get("title", ""),
            "sourceGuide": title.get("sourceGuide", ""),
            "officialSubsections": len(title_sections),
            "sections": title_sections,
        })
    totals["titles"] = len(titles_out)
    return {
        "schemaVersion": 1,
        "generatedOn": bank.get("generatedOn", ""),
        "programSource": {
            "title": "Programme officiel de l’agrégation externe spéciale de mathématiques — session 2027",
            "url": PROGRAM_URL,
        },
        "notice": "Cette matrice dénombre la présence de cartes par sous-partie officielle. Elle ne certifie pas que toutes les variantes, preuves ou formulations exigibles sont représentées. Les cartes signalées comme à vérifier restent visibles dans le jeu.",
        "totals": totals,
        "titles": titles_out,
    }


def main() -> None:
    data = build()
    OUTPUT_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(data["totals"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
