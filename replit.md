# Picto - Personal Portfolio

## Overview
A personal portfolio website for "Brooklyn Gilbert" built with React, Vite, and Tailwind CSS v4. Features sections for introduction, about, work process, portfolio, blog, services, testimonials, and contact.

## Project Architecture
- **Framework**: React 19 with React Router v7
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Icons**: Font Awesome (React wrapper)
- **Other**: react-fast-marquee, react-scroll, swiper

## Project Structure
```
/
├── index.html          - Entry HTML
├── index.css           - Global styles (Tailwind imports)
├── vite.config.js      - Vite configuration
├── public/             - Static assets
├── src/
│   ├── main.jsx        - React entry point
│   ├── routes/Router.jsx - React Router config
│   ├── layouts/Main.jsx  - Main layout wrapper
│   ├── pages/Home.jsx    - Home page
│   ├── assets/           - Images
│   └── components/       - UI components
│       ├── common/       - Navbar, Footer, Loading, ScrollToTop, SocialMedia
│       ├── introduction/ - Hero section
│       ├── profession/   - Roles display
│       ├── profile/      - Profile section
│       ├── workProcess/  - Work process steps
│       ├── portfolio/    - Project showcase
│       ├── blog/         - Blog section
│       ├── testimonial/  - Client testimonials
│       ├── happyClients/ - Client logos/stats
│       ├── contact/      - Contact form
│       └── workTogether/ - CTA section
```

## Development
- Dev server: `npm run dev` (port 5000, host 0.0.0.0)
- Build: `npm run build` (outputs to `dist/`)
- Deployment: Static site deployment from `dist/`
