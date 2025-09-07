# PHC Conference 2026 Website - Development Handoff

## Project Overview
Build a modern, animated conference website for PHC Conference 2026 "Nourish to Flourish" - a 10th anniversary health and metabolic wellness conference. The site should match the visual sophistication of Elevate Health with smooth animations and premium design.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Development**: Cursor with Claude Code
- **Deployment**: Static export (for future AWS hosting)

## Setup Instructions

### 1. Initialize Project
```bash
npx create-next-app@latest phc-conference-2026 --typescript --tailwind --app --src-dir
cd phc-conference-2026
npm install framer-motion lucide-react @next/font
```

### 2. Configure for Static Export
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 3. Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'phc-dark': '#2D2E83',
        'phc-light': '#4ABFD8', 
        'phc-yellow': '#E7E700',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

## Brand Guidelines

### Colors
- **Primary Dark**: #2D2E83 (Deep blue)
- **Primary Light**: #4ABFD8 (Light blue)
- **Accent**: #E7E700 (Bright yellow - use sparingly)
- **Neutrals**: White, light gray (#f8f9fa), dark gray (#333)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Logo
- Text-based: "PHC 2026" in gradient from phc-dark to phc-light
- Include 10th anniversary badge/element

## Content Structure

### Conference Details
- **Name**: PHC Conference 2026
- **Theme**: "Nourish to Flourish"
- **Tagline**: "Celebrating 10 years of helping people nourish to flourish"
- **Dates**: Saturday 16th & Sunday 17th May 2026, 8am-5pm each day
- **Location**: The Light, Euston, London, NW1 2BJ
- **CPD Points**: 16 points available
- **Tickets**: https://phc26.eventify.io/t2/tickets
- **Gala Dinner**: Saturday 16th May 2026, 7pm (details January 2026)

### Confirmed Speakers
1. **Dr Ben Bikman** - Metabolic Research Expert
2. **Nina Teicholz** - Nutrition Science Journalist
3. **Dr David Unwin** - GP & Low Carb Pioneer
4. **Dr Isabella Cooper** - Functional Medicine Doctor
5. **Davinia Taylor** - Wellness Entrepreneur
6. **Thomas Hal Robson-Kanu** - Elite Athlete & Wellness Advocate
7. **Dr Wafaa Abdel-Hadi** - Functional Medicine Expert
8. **Dr Paul Reynolds** - Research Specialist
9. **Chris Hill** - Keto Expert
10. **David Sogan** - Real Food Rebellion Co-Leader
11. **Sue Beckers** - Nutrition Expert
12. **Steve Bennett** - Health Expert
13. **Dr David Jehring** - Medical Professional
14. **Sam Feltham** - Health Researcher

### Key Statistics (for impact section)
- **10** Years of Excellence
- **16** CPD Points Available
- **14+** World-Class Speakers
- **2** Full Days of Learning
- **1000+** Healthcare Professionals (estimated attendees)

## Page Structure & Components

### 1. Header Component
```typescript
// Sticky header with smooth background transition on scroll
// Logo on left, navigation in center, ticket CTA on right
// Mobile: hamburger menu with overlay
// Navigation: Home, About, Speakers, Schedule, Venue, Contact
```

### 2. Hero Section
```typescript
// Full-screen gradient background (phc-dark to phc-light)
// Floating animated shapes (circles, squares) - subtle opacity
// Center content:
//   - "10th Anniversary Conference" badge
//   - Main headline: "Nourish to Flourish"
//   - Subtitle about metabolic health for families
//   - Key details in cards: Date, Location, CPD Points
//   - Primary CTA: "Get Your Tickets"
//   - Secondary CTA: "Learn More" (scroll to next section)
// Scroll indicator at bottom
```

### 3. About/Anniversary Section
```typescript
// Light background
// "Celebrating 10 Years" headline
// Description paragraph
// Animated statistics grid (4 cards):
//   - 10 Years of Excellence
//   - 16 CPD Points  
//   - 14+ World-Class Speakers
//   - 2 Full Days
// Cards should have hover effects and counter animations
```

### 4. Speakers Grid Section
```typescript
// White background
// "World-Renowned Speakers" headline
// Grid of speaker cards (responsive: 4 cols desktop, 2 tablet, 1 mobile)
// Each card:
//   - Placeholder image/initials (colored background with initials)
//   - Speaker name
//   - Title/specialization
//   - Brief description
// Cards animate in with staggered timing (Elevate Health style)
// Alternating slide directions (left/right)
```

### 5. Conference Focus Areas
```typescript
// Light background
// "Comprehensive Health Coverage" or similar headline
// Grid of topic cards:
//   - Women's Health (with relevant icon)
//   - Men's Health
//   - Teenage Health  
//   - Children's Health
//   - Metabolic Health
//   - Nutrition Science
// Icons should be modern and medical-themed
// Cards slide in from alternating directions
```

### 6. Event Details Section
```typescript
// White background
// "Event Information" headline
// Grid of info cards:
//   - Schedule (details coming January 2026)
//   - Venue (The Light, Euston + map link)
//   - CPD Points (16 points, accredited)
//   - Gala Dinner (Saturday evening info)
//   - Networking (opportunities to connect)
//   - Resources (conference materials)
// Each card has icon, title, description
```

### 7. Call-to-Action Section
```typescript
// Gradient background (similar to hero but darker)
// Centered content:
//   - "Don't Miss Out" or "Secure Your Spot" headline
//   - Brief urgency text (early bird pricing, etc.)
//   - Large ticket button
//   - "Schedule released January 2026" note
```

### 8. Footer
```typescript
// Dark background (phc-dark)
// Logo and conference name
// Links: Privacy Policy, Contact, Terms
// Social media icons (placeholder for now)
// Copyright and company info
// Contact: info@phcconference.co.uk (placeholder)
```

## Animation Requirements

### Inspiration: Elevate Health Animations
- **Slide-in effects**: Cards slide from off-screen (-60vw, 60vw)
- **Staggered timing**: Each card delays by 0.1-0.2s
- **Smooth easing**: Use ease-out transitions
- **Scroll triggers**: Animations trigger when elements are 70% in viewport
- **Hover effects**: Subtle scale transforms and shadow changes

### Framer Motion Implementation
```typescript
// Example card animation variants
const cardVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

// Alternating slide directions
const getSlideDirection = (index: number) => ({
  hidden: { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
  visible: { x: 0, opacity: 1 }
})
```

### Floating Elements
- Subtle geometric shapes in hero background
- Slow floating animation (6s duration)
- Low opacity (0.1-0.2)
- Different sizes and positions

## Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column, stack everything)
- **Tablet**: 768px - 1023px (2 columns for most grids)
- **Desktop**: ≥ 1024px (full multi-column layouts)

### Mobile Considerations
- Hero text should be legible on small screens
- Speaker cards stack single column
- Navigation collapses to hamburger menu
- Touch-friendly button sizes (44px minimum)
- Maintain animation performance on mobile

## Performance Requirements
- **Lighthouse Score Target**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: Next.js Image component for all images
- **Font Loading**: Optimize Google Fonts loading

## File Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Speakers.tsx
│   ├── EventDetails.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── FloatingShapes.tsx
├── lib/
│   └── data.ts (speaker data, conference info)
└── types/
    └── index.ts
```

## Development Notes

### Immediate Implementation
1. Set up basic Next.js structure
2. Implement header with logo and navigation
3. Create hero section with gradient and floating shapes
4. Build speaker grid with placeholder data
5. Add animations with Framer Motion
6. Ensure mobile responsiveness
7. Optimize for static export

### Future Enhancements (not required now)
- Prisma DB integration for speaker management
- Contact forms (when needed)
- CMS integration for content management
- Advanced analytics
- A/B testing capabilities

### External Links
- Ticket purchases: https://phc26.eventify.io/t2/tickets
- Venue map: https://maps.app.goo.gl/d2o6wJoABz7KCZNp8 (The Light, Euston)

## Success Criteria
1. ✅ Visually matches the sophistication of Elevate Health
2. ✅ Smooth animations that work on all devices
3. ✅ Fast loading times (< 2s initial load)
4. ✅ Mobile-first responsive design
5. ✅ Effective conversion funnel to ticket sales
6. ✅ Professional healthcare conference aesthetic
7. ✅ 10th anniversary celebration theme prominent

This markup provides everything needed to hand off to Claude Code for development in Cursor. The site will be a static showcase that drives ticket sales while building excitement for the conference.