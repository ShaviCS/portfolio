# Shavindya Chamalka — Portfolio Website

Personal portfolio built with **React + Vite**, designed to be hosted on **GitHub Pages**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or any name you like)
3. Leave it public, click **Create repository**

### Step 2 — Configure the base URL
Open `vite.config.js` and update `base` to match your repo name:

```js
// If your repo is github.com/YourUser/portfolio
base: '/portfolio/'

// If your repo is github.com/YourUser/YourUser.github.io
base: '/'
```

### Step 3 — Add your GitHub remote
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 4 — Deploy
```bash
npm run deploy
```
This builds the project and pushes the `dist/` folder to the `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages
1. Go to your repo on GitHub
2. **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Branch: `gh-pages` / `/ (root)` → **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## ✉️ Enable the Contact Form (Optional)

The contact form uses [Formspree](https://formspree.io) (free tier available):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID (looks like `xabc1234`)
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const FORMSPREE_ID = 'YOUR_FORM_ID'
   // →
   const FORMSPREE_ID = 'xabc1234'
   ```
4. Redeploy: `npm run deploy`

---

## 🗂️ Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          ← All styles & design system
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🎨 Customization Tips

- **Colors**: Edit CSS variables at the top of `src/index.css`
- **Content**: Each component has a data array at the top — edit those constants directly
- **Profile photo**: Add your photo to `public/` and add an `<img>` tag in `Hero.jsx`
- **GitHub links**: Add `github` fields to each project in `Projects.jsx` and link them

## 🛠️ Tech Stack

- [React 18](https://react.dev)
- [Vite 4](https://vitejs.dev)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
- Google Fonts: Sora · DM Sans · JetBrains Mono
