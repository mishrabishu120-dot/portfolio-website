# 🚀 Saumy Mishra — Personal Portfolio

<img src="images/profile.jpg" width="150" style="border-radius: 50%;">

A clean, modern, and fully responsive **Personal Portfolio Website** built entirely with **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no dependencies, just pure web standards.

---

## 📋 Project Overview

This portfolio showcases the skills, education, projects, and contact information of **Saumy Mishra**, a Computer Science & Software Engineering student specializing in **AI**, **Full Stack Development**, and **Agentic AI**.

The site is designed to be:
- ✅ Responsive on all screen sizes (desktop, tablet, mobile)
- ✅ Accessible (semantic HTML, ARIA attributes, keyboard navigation)
- ✅ Fast (no external JS libraries, lazy-loaded images, passive event listeners)
- ✅ Modern-looking (Glassmorphism navbar, gradient accents, smooth animations)
- ✅ Beginner-friendly (every section is clearly commented)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Sticky Navbar** | Transparent → opaque on scroll, with backdrop blur |
| **Scroll Spy** | Active nav link auto-highlights based on current section |
| **Mobile Menu** | Hamburger toggle with animated icon (☰ → ✕) |
| **Hero Section** | Name, role, tags, bio, CTA buttons |
| **Floating Profile Image** | CSS keyframe float animation with decorative ring |
| **About Section** | Two-column layout with quick-fact cards |
| **Education Timeline** | Vertical timeline with card hover effects |
| **Skills Cards** | Responsive grid with animated top-border on hover |
| **Projects Grid** | 3-column cards with tech tags and View Project buttons |
| **Contact Form** | Live validation (name, email, message) + success state |
| **Scroll Reveal** | Elements fade & slide in as you scroll (IntersectionObserver) |
| **Back to Top** | Floating button appears after scrolling 400px |
| **Footer** | Clean footer with nav links and copyright |

---

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#F8FAFC` | Page background |
| Primary | `#2563EB` | Buttons, headings, accents |
| Secondary | `#1E293B` | Dark text, footer |
| Accent | `#38BDF8` | Gradient complement, ring |
| Card | `#FFFFFF` | Card backgrounds |
| Text | `#334155` | Body text |

**Font:** [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, animations, responsive layout (Grid + Flexbox) |
| **Vanilla JavaScript** | Interactivity (no libraries/frameworks) |
| **Google Fonts** | Poppins typeface |
| **CSS Custom Properties** | Design token system |
| **IntersectionObserver API** | Performant scroll reveal |
| **CSS Keyframes** | Float and bounce animations |

> ❌ No React, No Bootstrap, No Tailwind, No jQuery, No Node.js

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html          ← Main HTML file (all sections)
├── style.css           ← All styles (tokens, layout, components, responsive)
├── script.js           ← All JavaScript (interactivity, animations)
│
├── images/
│   └── profile.jpg     ← Profile photo used in Hero & About sections
│
└── README.md           ← This file
```

---

## ▶️ How to Run

This is a **pure static website** — no build tools or server required.

### Option 1 — Open Directly in Browser
```bash
# Navigate to the project folder
cd portfolio

# Open index.html in your default browser
open index.html         # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

### Option 2 — Use VS Code Live Server (Recommended)
1. Open the `portfolio/` folder in **VS Code**
2. Install the **Live Server** extension (Ritwick Dey)
3. Right-click `index.html` → **"Open with Live Server"**
4. The site opens at `http://127.0.0.1:5500`

### Option 3 — Python Simple HTTP Server
```bash
cd portfolio
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Full desktop layout (two-column hero, side-by-side about) |
| `≤ 900px` | Tablet: hamburger menu, stacked hero, single-column contact |
| `≤ 600px` | Mobile: single column everywhere, stacked buttons, smaller fonts |

---

## 🔮 Future Improvements

- [ ] **Dark Mode Toggle** — CSS custom properties make it easy to add
- [ ] **Blog Section** — Showcase articles and learning logs
- [ ] **Live Project Links** — Replace `href="#"` with real GitHub / deploy URLs
- [ ] **Backend Contact Form** — Integrate with EmailJS, Formspree, or Netlify Forms
- [ ] **Animations** — Add more micro-interactions (typing effect, progress bars)
- [ ] **PWA Support** — Add a `manifest.json` and service worker
- [ ] **Analytics** — Add privacy-respecting analytics (Plausible, Fathom)
- [ ] **Multilingual** — Add Hindi / other language support
- [ ] **More Projects** — Expand project section as new projects are built

---

## 👤 Author

**Saumy Mishra**
- 🎓 B.Tech Computer Science & Software Engineering — NIAT × Vivekananda Global University
- 💻 Specialization: AI, Full Stack Development, Agentic AI
- 📧 mishrasaumy72@gmail.com
- 🐙 [github.com/saumymishra](https://github.com/mishrabishu120-dot)

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to use, modify, and share — attribution appreciated! 🙏

---

*Built with ❤️ using HTML, CSS & JavaScript — © 2026 Saumy Mishra*
