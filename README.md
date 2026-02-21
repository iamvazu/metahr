# MetaHR // Precision Human Capital Solutions

![MetaHR Banner](https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200)

> **Tailored HR solutions that drive behavioral change and organizational growth.**

MetaHR is a high-performance HR consultancy platform designed as a "Digital Instrument"—a precision tool for senior leadership to diagnose, align, and accelerate organizational excellence.

## 💎 Design Philosophy: The "Digital Instrument"
The platform identity is built on a **Precision-First** aesthetic, moving away from generic corporate visuals toward a sophisticated, data-driven look:
- **Navy & Teal Palette:** Deep space backgrounds with vibrant tactical accents.
- **Micro-Animations:** "Beating" status indicators that signal real-time organizational vitality.
- **Glassmorphism:** High-blur overlays and floating "Artifact" badges.
- **Centric Layout:** A perfectly balanced navigation system for effortless strategic exploration.

---

## 🚀 Core Methodology
MetaHR isn't just about policy; it's about the science of performance.

### 1. The Three-Chord Tapestry
We believe excellence happens at the intersection of:
- **People:** Unlocking potential through behavioral science (DiSC, Hogan, CliftonStrengths).
- **Culture:** Creating high-trust environments based on Lencioni’s **Five Behaviors®**.
- **Strategy:** Aligning human capital with business objectives for sustainable ROI.

### 2. The Six Disciplines (6Ds®)
Every intervention is structured for impact:
- **Define** Business Outcomes
- **Design** the Complete Experience
- **Deliver** for Application
- **Drive** Learning Transfer
- **Deploy** Performance Support
- **Document** Results

---

## 🛠 Tech Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | React 19 + Vite |
| **Styling** | Tailwind CSS 4 + Framer Motion |
| **Icons** | Lucide React |
| **Backend** | Headless WordPress (Custom PHP Theme) |
| **Deployment** | Heroku (Node.js Buildpack) |
| **CI/CD** | GitHub + Heroku Automated Deploys |

---

## 📂 Project Structure
```text
metahr-project/
├── frontend/             # React Application (Vite)
│   ├── src/
│   │   ├── pages/       # Home, Solutions, About, Resources, Contact
│   │   ├── components/  # Navbar, Footer, UI Badges
│   │   └── index.css    # Global "Digital Instrument" design tokens
├── headless-theme/       # Custom WordPress PHP Theme
└── package.json         # Heroku Monorepo Root Config
```

---

## ⚙️ Local Development

### 1. Prerequisites
- Node.js 22.x
- Git

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/iamvazu/metahr.git
cd metahr

# Install frontend dependencies
cd frontend
npm install

# Run the development server
npm run dev
```

---

## 🚢 Deployment (Heroku)
The project is configured for seamless deployment to Heroku-24.

1. **Root package.json:** Orchestrates the build by delegating to the `frontend` folder.
2. **Heroku Postbuild:** Automatically runs `npm install --include=dev` and `npm run build` within the frontend.
3. **Vite Preview:** The site is served via Vite's precision preview server with `allowedHosts` configured for the Heroku domain.

**Deployment URL:** [https://metahr-be351678c30d.herokuapp.com/](https://metahr-be351678c30d.herokuapp.com/)

---

## ✨ Key Features Implemented
- **Dynamic Navbar:** Centered link distribution with a "Premium White" scroll transition.
- **Status Beating Badges:** Custom CSS animations (`status-beat`) for indicating "Initializing_Potential" and "Outcome // Achieved".
- **Responsive "Impact" Sections:** High-resolution imagery with hover-triggered strategic overlays.
- **ROI Diagnostics:** Interactive 10-step ROI methodology visualization.

---

**Developed with Precision by Antigravity AI for MetaHR.**
