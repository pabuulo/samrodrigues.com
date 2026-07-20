# Sam Rodrigues — Personal Website

Human Capital Development Specialist · Forbes Coaches Council Member Leader 2026

## File Structure
```
/
├── index.html              ← Main website
├── favicon.svg             ← SR tab icon
├── assets/
│   ├── css/style.css       ← All styles
│   └── js/
│       ├── main.js         ← Interactions
│       └── images.js       ← Forbes badge images
├── .nojekyll
├── CNAME                   ← Edit for custom domain
├── 404.html
└── README.md
```

## Deploy to GitHub Pages
1. Create a **public** repo on github.com
2. Upload **all files** including the `assets/` folder
3. **Settings → Pages → Source → main branch → / (root) → Save**
4. Live at `https://[username].github.io/[repo-name]/` within minutes

## Custom Domain
1. Edit `CNAME` — replace comment with your domain: `www.samrodrigues.com`
2. DNS: add CNAME record `www` → `[username].github.io`
3. GitHub → Settings → Pages → Custom domain → Save → Enforce HTTPS
