# Porygon - High-Converting Websites

A modern Next.js website for Porygon, featuring a retro pixel aesthetic with neon green accents.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Press Start 2P** - Retro pixel font

## Features

- 🎨 Black + Neon Green (#d7df23) theme
- 📱 Fully responsive design
- 🎯 Animated hero section with typing effect
- 💬 Scrolling testimonials
- 📅 Interactive appointment calendar
- ❓ Expandable FAQ section
- ⚡ Smooth animations and transitions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── Header.tsx       # Animated header with shrinking effect
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Trusted.tsx      # Scrolling logo section
│   ├── Testimonials.tsx # Client testimonials with animations
│   ├── About.tsx        # About section
│   ├── Appointments.tsx # Interactive calendar booking
│   └── FAQ.tsx          # Expandable FAQ section
└── public/
    └── porygon-logo.png # Brand logo
```

## Color Palette

- **Background**: `#000000` (Black)
- **Primary**: `#d7df23` (Neon Green)
- **Secondary**: `#111111` (Dark Gray)
- **Text**: `#ffffff` (White)

## Customization

Edit the components in the `components/` directory to customize content, styling, and functionality.
