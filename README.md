# Al-Amin Akram — Professional Portfolio Website

A modern, responsive, high-performance portfolio website for **Al-Amin Akram** (Business Computing Undergraduate at UiTM Shah Alam, CGPA 3.33, YDP Kolej Teratai).

Inspired by modern aesthetics (dark/light mode, glassmorphism, responsive grid, micro-interactions, bilingual support BM/EN), tailored specifically for IT solutions, system development, and executive leadership.

---

## 🚀 Live Preview Locally

This site is built with pure web standards (HTML5, Vanilla CSS, Vanilla JavaScript) without heavy framework bloat. You can run it locally with any simple static server:

```bash
# Using Python:
python3 -m http.server 3000

# Open in browser:
http://localhost:3000
```

---

## 🌐 Options to Publish on a FREE Domain

Here are the best free hosting & free subdomain options:

### 1. Netlify (Recommended — Same as reference site `*.netlify.app`)
- **URL you get:** `alamin-akram.netlify.app`
- **Steps:**
  1. Go to [Netlify Drop](https://app.netlify.com/drop) and log in or create a free account.
  2. Drag and drop this entire `My Portfolio` folder right into the browser.
  3. Your site is instantly live with free HTTPS/SSL!
  4. Go to **Site Settings > Change site name** and set it to `alaminakram` (or your choice).

### 2. Vercel (`*.vercel.app`)
- **URL you get:** `alaminakram.vercel.app`
- **Steps:**
  1. Push this folder to a GitHub repository (e.g. `github.com/your-username/my-portfolio`).
  2. Go to [Vercel](https://vercel.com) and log in with GitHub.
  3. Click **"Add New Project"**, select your repository, and click **"Deploy"**.
  4. Instant deployment with worldwide edge CDN.

### 3. GitHub Pages (`*.github.io`)
- **URL you get:** `[your-username].github.io/portfolio`
- **Steps:**
  1. Create a GitHub repo named `portfolio` (or `[username].github.io`).
  2. Push the files into the `main` branch.
  3. In repository **Settings > Pages**, choose `Deploy from a branch` -> `main` -> `/ (root)` -> Click **Save**.
  4. Your site will be published within 1-2 minutes.

### 4. Custom Domain (Optional Upgrade)
If you ever want a custom personal domain like `alaminakram.com` or `alaminakram.my`:
- You can buy a domain from Namecheap / Cloudflare Registrar (~$8-$10/year).
- Connect it for **free** on Netlify, Vercel, or GitHub Pages with automated free SSL.

---

## 📂 File Structure

```
My Portfolio/
├── index.html                   # Semantic HTML5 with SEO meta tags & schemas
├── style.css                    # Modern CSS design system (Dark & Light theme, glassmorphism)
├── script.js                    # Interaction engine (EN/BM i18n, AI Q&A assistant, modals)
├── README.md                    # Documentation & deployment guide
└── assets/
    ├── avatar.png               # Profile portrait extracted from resume
    ├── avatar_square.png        # Headshot crop
    ├── resume.pdf               # Downloadable official PDF resume
    ├── miker_system.svg         # FYP Web System architecture preview
    ├── warga_emas.svg           # SULAM digital literacy graphic
    ├── international_delegation.svg # International LOI & delegation graphic
    └── sidradika.svg            # Sidradika Choir Gold Award graphic
```

---

## ✨ Key Features
- **Bilingual Switcher (EN & BM):** Full localized content in both English and Bahasa Melayu.
- **Dark & Light Mode:** Toggleable with automatic persistence in `localStorage`.
- **Interactive "Ask Al-Amin" AI Q&A Assistant:** Allows recruiters to ask questions about FYP, CGPA, leadership, and publications with instant answers.
- **Interactive Project Case Study Modals:** In-depth views into problem statements, tech stacks, and outcome metrics.
- **Direct Contact Integrations:** 1-click WhatsApp chat link with prefilled message, direct email, and LinkedIn links.
- **Resume Download:** Direct link to download the complete official PDF resume.
