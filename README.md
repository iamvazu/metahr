# MetaHR - High-Performance Headless CMS Website

A state-of-the-art, premium corporate website for **MetaHR**, built with a **Headless Architecture** that combines a cutting-edge React/Vite frontend with a robust WordPress backend.

## 🚀 Live Site
**Domain:** [metahr.co.in](https://metahr.co.in)

## 🛠️ Technology Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Framer Motion (for animations), Lucide React (icons).
- **Backend**: WordPress (Headless), REST API integration.
- **Hosting**: GoDaddy Managed WordPress.
- **Routing**: Client-side Hash Routing (to bypass server-side redirection conflicts).

## ✨ Key Features
- **Digital Instrument Aesthetic**: A premium "Glassmorphism" and "Cyber-Corporate" design system featuring high-contrast typography, subtle micro-animations, and a dark/navy professional color palette.
- **Dynamic Projects Showcase**: Powered by a custom **Projects** post type in WordPress. Projects are fetched via REST API and displayed in a high-fidelity diagnostic-style grid.
- **Intelligence Feed (Blog)**: Real-time integration with WordPress **Posts**. The Resources page dynamically fetches and displays the latest thinking with loading skeletons and smooth hover transitions.
- **Headless Bridge Architecture**: A custom PHP-based bridge (`index.php` in the WordPress theme) that injects the React application directly into the WordPress environment, bypassing common server-side security blocks.
- **Mobile First**: Fully responsive design optimized for desktop, tablet, and mobile devices.

## 📁 Architecture & Integration
MetaHR uses a unique **Themed-Bridge** deployment strategy:
1.  The React app is built into a single set of uniquely named assets (`meta-logic.js`, `meta-styles.css`) to prevent aggressive CDN caching.
2.  The WordPress theme (`headless-theme`) acts as the delivery vehicle, manually enqueuing the React assets via `index.php`.
3.  WordPress REST API handles all content management, allowing non-technical users to update the site via the `/wp-admin/` panel.

## 🛠️ Development & Deployment

### Local Development
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

### Building for Production
```bash
# Generate optimized build
npm run build
```

### Deployment to GoDaddy
1.  Upload `meta-logic.js` and `meta-styles.css` from the `/dist` folder to `/wp-content/themes/headless-theme/`.
2.  Ensure the `index.php` in the theme folder includes the asset injection logic.
3.  **Flush Cache** in the GoDaddy Managed WordPress dashboard to apply changes.

## 📄 License
Custom Project for MetaHR. All rights reserved.
