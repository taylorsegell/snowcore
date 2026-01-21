# Snowflake Practice Tests - GitHub Pages Deployment

This is the static GitHub Pages version of the Snowflake Practice Tests application. No backend required!

## 🚀 Live Demo

Once deployed, your app will be available at: `https://<your-username>.github.io/snowcore/`

## 📁 What's Inside

The `docs/` folder contains a fully self-contained static version:

- `index.html` - Main HTML page
- `app.js` - Application logic (no backend needed)
- `styles.css` - Styling
- `questions-data.js` - All 660 questions embedded as JavaScript

## 🔧 Deployment Steps

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Push this repository to GitHub**
   ```bash
   git add .
   git commit -m "Add GitHub Pages version"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select `main` and `/docs` folder
   - Click "Save"

3. **Wait a few minutes** and your site will be live!

### Option 2: Test Locally

**Without Python - Using npx/Node.js:**
```bash
cd docs
npx serve
```

**Without Python - Using PHP:**
```bash
cd docs
php -S localhost:8000
```

**Without Python - Using VS Code:**
1. Install the "Live Server" extension in VS Code
2. Right-click on `docs/index.html`
3. Select "Open with Live Server"

**With Python:**
```bash
cd docs
python3 -m http.server 8000
```

**Note:** Opening `index.html` directly in a browser (file://) won't work due to JavaScript module restrictions. You need a local server.

## ✨ Features

All features from the original app work in this static version:

- ✅ 660 Snowflake certification practice questions
- ✅ 9 practice tests
- ✅ Progress tracking (saved in browser localStorage)
- ✅ Review incorrect answers
- ✅ Export mistakes to CSV
- ✅ Fully offline-capable once loaded
- ✅ Mobile-responsive design

## 📝 Updating Questions

To update the questions:

1. Edit `questions.csv` in the root directory
2. Run the conversion script:
   ```bash
   python3 convert_questions.py
   ```
3. This regenerates `docs/questions-data.js`
4. Commit and push the changes

## 🔒 Privacy

All data is stored locally in your browser using localStorage. Nothing is sent to any server.

## 📂 File Structure

```
docs/
├── index.html          # Main page
├── app.js              # Application logic
├── styles.css          # Styling
└── questions-data.js   # Questions data (auto-generated)
```

## 🆚 Differences from Original

The original version uses:
- Python Flask backend
- Loads questions from CSV via API endpoint

This GitHub Pages version:
- Pure static HTML/CSS/JavaScript
- Questions embedded in JavaScript file
- No backend required
- Works on any static hosting (GitHub Pages, Netlify, Vercel, etc.)

## 🛠️ Development

The original development version with Flask backend is still in the root directory:
- `app.py` - Flask server
- `web/` - Original web files
- `questions.csv` - Source data

## 📄 License

Same as the main project.
