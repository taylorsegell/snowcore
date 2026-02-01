# Snowflake Pro Core Exam Practice Tool

Interactive web-based study tool for preparing for the Snowflake Pro Core Certification exam.

![assets/screen-recording.gif](assets/screen-recording.gif)

## 🚀 Quick Start Options

### Option 1: GitHub Pages (No Setup Required)

**Deploy to GitHub Pages for free hosting:**

This repo includes a static version in the `docs/` folder that works without any backend.

1. Push to GitHub
2. Enable GitHub Pages in Settings → Pages
3. Select `main` branch and `/docs` folder
4. Your site will be live at `https://your-username.github.io/snowcore/`

See [docs/README.md](docs/README.md) for detailed deployment instructions.

### Option 2: Run Locally with Python

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/taylorsegell/snowcore.git
cd snowcore
```

### Prerequisites
- Python 3.7 or higher
- pip

### Create a Virtual Environment (Recommended)

```bash
# Using venv (built-in)
python3 -m venv venv
source venv/bin/activate

# Or with conda
conda create -n snowflake-practice python=3.11
conda activate snowflake-practice

# Or with uv
uv venv
source .venv/bin/activate
```

### Installation

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
python app.py
```

Open http://localhost:5001 in your browser.

## Project Structure

```
snowflake-practice/
├── app.py              # Flask backend
├── questions.csv       # Question database
├── requirements.txt    # Dependencies
└── web/               # Frontend assets
    ├── index.html
    ├── app.js
    └── styles.css
```
