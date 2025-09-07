# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 conference website for the PHC Conference 2026, a metabolic health conference taking place in London. The site uses TypeScript, React 19, Tailwind CSS v4, and Framer Motion for animations.

## Key Commands

```bash
# Development
npm run dev        # Start dev server on port 3010

# Build & Production
npm run build      # Build for production
npm run start      # Start production server

# Fix build issues (if SWC errors occur)
npm install        # Reinstall dependencies after lockfile patching
```

## Architecture & Structure

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom PHC color scheme
- **Animations**: Framer Motion for interactive UI elements
- **Deployment**: Netlify with automatic Git deployments
- **TypeScript**: Strict mode enabled with path alias `@/` for `src/`

### Deployment Configuration
The project is deployed on Netlify with:
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Static Export**: Configured via `output: 'export'` in Next.js
- **Auto Deploy**: Enabled for main branch
- **Preview Deploys**: Enabled for pull requests

### Design System
Custom Tailwind colors defined:
- `phc-dark`: #2D2E83
- `phc-light`: #4ABFD8
- `phc-yellow`: #E7E700

### Data Management
Conference data is centralized in `src/lib/data.ts` containing:
- Speaker profiles with initials for avatars
- Conference information (dates, location, CPD points)
- Statistics and focus areas

### Environment Configuration
Required environment variables in `.env.local`:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_TICKET_URL