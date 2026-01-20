from __future__ import annotations

import csv
from pathlib import Path
from typing import Any, Dict, List

from flask import Flask, jsonify, render_template

BASE_DIR = Path(__file__).parent
DATA_PATH = BASE_DIR / "questions.csv"

app = Flask(__name__, static_folder="web", static_url_path="", template_folder="web")


def load_questions() -> List[Dict[str, Any]]:
    """Load and normalize questions from the CSV."""
    with DATA_PATH.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    questions: List[Dict[str, Any]] = []
    for idx, row in enumerate(rows):
        answers = [int(x) for x in row.get("correct_answers", "").split(",") if x.strip()]
        options = []
        for i in range(1, 7):
            val = row.get(f"option_{i}")
            if val and val.strip():
                options.append({"id": i, "value": val})

        questions.append(
            {
                "id": f"{row.get('source_file','')}_{row.get('number','')}_{idx}",
                "number": int(row.get("number", "0") or 0),
                "question": row.get("question", ""),
                "options": options,
                "answers": answers,
                "explanation": row.get("explanation", ""),
                "reference": row.get("reference_url", ""),
                "source": row.get("source_file", ""),
                "testNumber": int(row.get("test_number", "0") or 0) or None,
            }
        )

    return questions


@app.route("/")
def home() -> Any:
    return render_template("index.html")


@app.route("/data")
def data() -> Any:
    return jsonify(load_questions())


@app.route("/health")
def health() -> Any:
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
