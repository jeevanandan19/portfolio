# Jeevanandan V — Personal Portfolio

A creative, modern, and fully animated personal portfolio website for an AI & ML engineer.

**Tech Stack:** React 18 · Vite 5 · Tailwind CSS v4 · Framer Motion · Lucide React

---

## 🚀 Setup & Run

### Prerequisites
- Node.js 18+ installed
- npm 9+

### Install dependencies
```bash
npm install --legacy-peer-deps
```

### Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Custom gradient favicon
│   └── resume.pdf           # ← Replace with actual resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with active-section highlight + dark/light toggle
│   │   ├── Hero.jsx         # Animated intro with typewriter effect
│   │   ├── Skills.jsx       # Tabbed skill cards with progress bars
│   │   ├── Projects.jsx     # Interactive project cards with tech tags
│   │   ├── Experience.jsx   # Timeline-style experience section
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Certifications.jsx # Badge-style certification cards
│   │   ├── Contact.jsx      # Contact form (Formspree) + direct links
│   │   └── Footer.jsx       # Footer with social links
│   ├── data/
│   │   └── portfolio.js     # All personal content in one place
│   ├── App.jsx              # Root component + dark/light mode state
│   ├── index.css            # Global styles + Tailwind import
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 📝 Customization

### Update personal content
All text content lives in **`src/data/portfolio.js`** — edit that one file to update name, roles, skills, projects, experience, education, and certifications.

### Replace resume
Drop your actual resume PDF at **`public/resume.pdf`** — the "Download Resume" button links to it automatically.

### Contact form
The contact form uses **Formspree**. To wire it to your own email:
1. Go to [formspree.io](https://formspree.io) and create a free form
2. Replace the form endpoint in `src/components/Contact.jsx`:
   ```js
   fetch("https://formspree.io/f/YOUR_FORM_ID", ...)
   ```

### Add a real profile photo
In `src/components/Hero.jsx`, replace the emoji avatar div with an `<img>` tag:
```jsx
<img src="/profile.jpg" alt="Jeevanandan V" className="w-full h-full object-cover" />
```
Then place `profile.jpg` in the `public/` folder.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary accent | `#00d9c0` (electric teal) |
| Secondary accent | `#7c3aed` (violet) |
| Background | `#0a0f1e` (deep navy) |
| Card | `#111827` |
| Heading font | Space Grotesk |
| Body font | Inter |

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | All animations — scroll reveals, hover effects, tab transitions |
| `react-type-animation` | Typewriter/rotating role text in Hero |
| `react-intersection-observer` | Trigger animations on scroll into view |
| `lucide-react` | Icon set |
| `tailwindcss` v4 | Utility CSS |

---

Built with ❤️ by Jeevanandan V
