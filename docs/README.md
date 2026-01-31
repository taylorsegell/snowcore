# Snowflake Practice Tests - GitHub Pages Deployment

This is the static GitHub Pages version of the Snowflake Practice Tests application. No backend required!

The `docs/` folder contains a fully self-contained static version:

- `index.html` - Main HTML page
- `app.js` - Application logic (no backend needed)
- `styles.css` - Styling
- `questions-data.js` - All 660 questions embedded as JavaScript



### Test Locally

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

> **Note:** Opening `index.html` directly in a browser (file://) won't work due to JavaScript module restrictions. You need a local server.
