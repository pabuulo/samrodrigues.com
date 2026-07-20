# Samuel Rodrigues — Personal Website

**Human Capital Development Specialist · Senior Consultant · Executive Coach**
Forbes Coaches Council Member Leader 2026 · Connections Lead

## 🌐 Live Site
`https://[your-github-username].github.io/[repo-name]/`

---

## 📁 File Structure

```
/
├── index.html              # Main website
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (typography, layout, colours)
│   └── js/
│       ├── main.js         # Interactions (cursor, nav, tabs, tilt effects)
│       └── images.js       # Embedded Forbes badge images
├── .nojekyll               # Prevents GitHub Jekyll processing
├── CNAME                   # Custom domain (edit if needed)
├── 404.html                # Redirect for unknown routes
└── README.md               # This file
```

---

## 🚀 Publishing on GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it (e.g. `samuel-rodrigues` or `my-website`)
4. Set visibility to **Public**
5. Click **Create repository**

### Step 2 — Upload all files
1. On your new repo page, click **"uploading an existing file"**
2. Upload **all files and the assets folder** (drag the entire `github_site` folder contents)
3. Commit with message: `Initial website upload`

### Step 3 — Enable GitHub Pages
1. Go to **Settings** (top menu of your repo)
2. Scroll to **Pages** in the left sidebar
3. Under **Source** → **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**
6. Your site will be live within **2–5 minutes**

---

## 🌍 Custom Domain (optional)

### If you have a domain (e.g. `www.samuelrodrigues.com`):
1. Edit the `CNAME` file — replace the comment with just your domain:
   ```
   www.samuelrodrigues.com
   ```
2. In your DNS provider (GoDaddy, Namecheap, etc.):
   - Add a **CNAME record**: `www` → `[your-username].github.io`
3. In GitHub → **Settings → Pages → Custom domain** → enter your domain
4. Check **Enforce HTTPS** (appears after DNS propagation, ~24h)

---

## ✏️ Editing Content

All content is in `index.html`. To update:
- **Text, stats, client data** → search and edit in `index.html`
- **Colours** → edit CSS variables at top of `assets/css/style.css` (`:root` block)
- **Fonts** → `style.css` top `@import` line
- **Interactions** → `assets/js/main.js`
- **Forbes badge images** → `assets/js/images.js`

---

## 📬 Contact
- Email: contacto.samuel.rodrigues@gmail.com
- LinkedIn: [samuel-rodrigues-business](https://linkedin.com/in/samuel-rodrigues-business)
- Forbes Council: [Forbes Profile](https://councils.forbes.com/profile/Samuel-Rodrigues)
