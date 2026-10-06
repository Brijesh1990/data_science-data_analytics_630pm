# Om Mulchandani — Data Analyst Portfolio

A modern, high-performance personal portfolio website for **Om Mulchandani**, a Data Analytics professional currently pursuing training at **TOPS Technologies Pvt. Ltd., Rajkot**, with **6+ months of practical experience**.

Built with **HTML5**, **CSS3**, **Vanilla JavaScript**, **Tailwind CSS v4**, and **AOS (Animate On Scroll)** — with **zero frameworks** (no React, Angular, Vue, Bootstrap, or jQuery).

---

## 📁 Project Structure

```
live-portfolio-app/
│
├── index.html                  # Main portfolio webpage
├── css/
│   └── style.css               # Custom CSS variables, animations, glassmorphism, scrollbars
├── js/
│   └── script.js               # Vanilla JS logic (Navbar, Filters, Stats Counter, Form)
├── assets/
│   ├── images/                 # Project screenshots and diagrams
│   ├── icons/                  # Custom icons and badges
│   └── resume/                 # Resume PDF directory (Om_Mulchandani_Resume.pdf)
└── README.md                   # Complete documentation & customization guide
```

---

## 🚀 Key Features

* **Design & Aesthetics**: Sleek dark theme (`#070b14`), cyan/teal & indigo accents, glassmorphic cards, ambient glowing orbs, and subtle cyber-grid backdrop.
* **Interactive Hero Dashboard**: Pure CSS/HTML animated analytics visual featuring live KPI simulation, monthly exploratory bar chart, and floating tool badges.
* **Responsive Fixed Navigation**: Sticky glass header, desktop links with active scrollspy indicator, and animated mobile drawer menu with auto-close on selection.
* **About & Animated Metrics**: Live counter animation for 6+ months experience, project count, and specialized competencies via `IntersectionObserver`.
* **Structured Skills Matrix**: 4 domains (Data Analytics, Data Visualization, Database, Web Technologies) using transparent proficiency tiers (*Strong*, *Intermediate*, *Working Knowledge*).
* **Experience Timeline**: Vertical timeline detailing the current role as Data Analytics Trainee at TOPS Technologies Pvt. Ltd., Rajkot, with editable placeholder fields.
* **Project Showcase with Filtering**: Filter case studies instantly by category (`All`, `Data Analytics`, `Python`, `SQL`, `Power BI`, `Web`) using smooth Vanilla JS transitions.
* **Education & Certifications**: Cards highlighting TOPS Technologies training, degree placeholders, and verified credential slots.
* **Interactive Contact Section**: Contact information cards paired with a validated contact form (with field-level error feedback and success state).
* **Accessibility & SEO**: Semantic HTML5 markup, ARIA attributes, meta tags, and responsive design tested from 320px mobile to 1440px+ ultra-wide.

---

## 💻 How to Run Locally

You can run this project locally without any complex build steps:

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in your preferred web browser (Google Chrome, Edge, Brave, Firefox).

### Option 2: Using VS Code Live Server Extension
1. Open this folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Using Python HTTP Server (Terminal)
Open PowerShell or your terminal in the project directory and run:
```powershell
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

### Option 4: Using Node.js `npx serve`
```powershell
npx serve .
```

---

## 🎨 Tailwind CSS v4 Setup

The project uses the official Tailwind CSS v4 browser engine via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### Optional: Compiling via Tailwind CLI (Production Build)
If you prefer a compiled single CSS file:
1. Initialize package:
   ```bash
   npm init -y
   npm install @tailwindcss/cli
   ```
2. Build command:
   ```bash
   npx @tailwindcss/cli -i css/style.css -o css/output.css --minify
   ```
3. Update `<link rel="stylesheet" href="css/output.css">` in `index.html`.

---

## ✏️ Replacing Placeholder Information

All placeholders are clearly labeled inside `index.html`. Use `Ctrl + F` to search and update:

| Placeholder | Where to Find | Description |
|---|---|---|
| `[PROJECT NAME 1/2/3]` | `index.html` (Projects Section) | Replace with your actual project titles |
| `[YOUR-USERNAME]` | `index.html` (Projects & Contact) | Replace with your GitHub handle |
| `[YOUR-LINKEDIN]` | `index.html` (Contact & Footer) | Replace with your LinkedIn profile URL |
| `[email@example.com]` | `index.html` (Contact Section) | Replace with your actual email address |
| `[Phone Number]` | `index.html` (Contact Section) | Replace with your phone number |
| `[Start Date]` | `index.html` (Experience & Education) | Fill in your course enrollment date |
| `[DEGREE NAME]` | `index.html` (Education Section) | Fill in your college degree (e.g., B.Com, BCA, B.Sc) |
| `[CERTIFICATION NAME]` | `index.html` (Certifications Section) | Fill in any completed certification titles |

### Adding Your Resume:
Place your resume PDF inside `assets/resume/` and name it `Om_Mulchandani_Resume.pdf`.

---

## ➕ How to Add More Projects

To add another project card, copy this template and paste it inside the `<div id="projects-grid">` in `index.html`:

```html
<article class="project-card flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 group" data-category="analytics python" data-aos="fade-up">
  <div>
    <!-- Visual Preview -->
    <div class="h-48 bg-slate-950 p-5 relative flex items-center justify-center border-b border-slate-800">
      <span class="text-xs font-mono text-cyan-400">Project Screenshot / Visual</span>
    </div>
    <!-- Card Info -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-2">Project Title</h3>
      <p class="text-slate-300 text-sm mb-4">Brief summary of the data problem and your solution.</p>
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Python</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">SQL</span>
      </div>
    </div>
  </div>
  <!-- Links -->
  <div class="px-6 pb-6 flex items-center gap-3">
    <a href="https://github.com/..." target="_blank" class="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-slate-800 text-slate-200">GitHub</a>
    <a href="#" class="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Live Demo</a>
  </div>
</article>
```
*Note: Make sure the `data-category` attribute matches your filter options (e.g. `analytics`, `python`, `sql`, `powerbi`, `web`).*

---

## 📬 Connecting the Contact Form to Email

The contact form currently has full client-side validation. To receive messages in your inbox:

### Using Formspree (Free & Simple)
1. Register at [formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xyzabced`).
3. In `index.html`, update `<form id="contact-form">`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ENDPOINT_ID" method="POST">
   ```

---

## 🌐 Deployment Instructions

### 1. GitHub Pages (Free)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Om Mulchandani Data Analyst Portfolio"
   git branch -M main
   git remote add origin https://github.com/[YOUR-USERNAME]/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root (`/`), then click **Save**.
4. Your site will be live at `https://[YOUR-USERNAME].github.io/portfolio/`.

### 2. Netlify / Vercel
* Drag and drop the `live-portfolio-app` directory onto [Netlify Drop](https://app.netlify.com/drop) or import the GitHub repository into [Vercel](https://vercel.com) for instant deployment with SSL.

---

## 📄 License & Credits
© 2026 Om Mulchandani. Developed with custom Vanilla JS, Tailwind CSS v4, and modern web standards.
