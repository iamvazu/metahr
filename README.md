# MetaHR - High-Performance Headless CMS & AI Platform

A state-of-the-art, premium corporate platform for **MetaHR**, built with a **Headless Architecture**. It combines a cutting-edge React/Vite/TypeScript frontend with a robust WordPress backend and a custom AI "Digital Twin" integration.

## 🚀 Live Site
**Domain:** [metahr.co.in](https://metahr.co.in)

---

## ✨ Primary Ecosystem Features

### 🧠 Ee-in - The Digital Twin (AI)
The centerpiece of the platform is **Ee-in**, a digital twin of Ian Kishander. 
- **Diagnosis Terminal**: A high-precision chat interface for executive consultation.
- **Strategic Synthesis**: Users can upload reports (DiSC, Hogan, CliftonStrengths) via PDF or Image.
- **Interactive Prescription**: A dedicated results engine that translates behavioral data into a "Strategic Roadmap," "Core Capabilities," and "Executive Reflection" questions.
- **GoDaddy-Optimized Gateway**: Powered by a custom WordPress plugin that bypasses hosting restrictions and handles robust JSON communication with the Anthropic Claude 3.5 Sonnet engine.

### 🏛️ Strategic solutions
- **Interactive Carousels**: Mosaic galleries have been replaced with high-fidelity, smooth-scrolling carousels to showcase core services (Executive Coaching, Team Development, etc.) without image cropping.
- **Premium Aesthetics**: Uses a "Cyber-Corporate" design system with deep transparency, gradient glassmorphism, and micro-animations.

### 📰 Intelligence Feed (Blog & Resources)
- **Dynamic Content**: Fetched directly from WordPress REST API with custom rendering for the "Resources" hub.
- **High-Contrast Reading**: Individual blog posts feature a specialized Hero section with white, shadowed typography to ensure legibility across all hero imagery.
- **Call-to-Action**: Standardized "Read Article" protocols for consistent user flow.

---

## 🛠️ Technology Stack
- **Frontend**: React 18, Vite, TypeScript, Framer Motion, Lucide React, PDF.js.
- **AI Engine**: Anthropic Claude (claude-sonnet-4-6).
- **Backend Architecture**: 
  - **Headless WordPress**: Managed via GoDaddy.
  - **Custom AI Plugin**: `ee-an-ai-plugin.php` (Internal class `EeIn_AI`) handles all secure AI gateways.
  - **Prompt Engineering**: Persona & Logic externalized in `system-prompt.md` for zero-code persona management.
- **Assets**: Content-hashed filenames for automatic cache-busting.

---

## 📁 Architecture & Administration

### Managing Ee-in’s Identity
The "Digital Brain" of the site can be updated without touching any code:
1. Open [`system-prompt.md`](./system-prompt.md).
2. Edit the "Persona & Voice" or "Coaching Question Bank" sections.
3. Upload the file to the plugin directory on the server. Ee-in will adopt the new logic instantly.

### Deployment & Build
1.  **Build**: Run `npm run build` in the `/frontend` directory.
2.  **Output**: assets are generated with content hashes (e.g., `meta-logic-[hash].js`) to ensure users always see the latest version on GoDaddy.
3.  **Plugin**: Ensure the `ee-in-ai-plugin` (class `EeIn_AI`) is active in the WordPress admin under **Plugins**.
4.  **API Key**: Manage the Anthropic API key and test connections directly in **Settings > Ee-in AI**.

---

## 🛠️ Local Development

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

## 📄 License
Custom Project for MetaHR. All rights reserved. Proprietary AI Logic.
