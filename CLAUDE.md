# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tennis Forehand Learning Platform - a bilingual (Chinese/English) educational website built with Next.js 16 and React 19. Teaches tennis forehand techniques for right-handed players through structured tutorials with video content and progressive learning paths.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router (React 19 Server Components)
- **Tailwind CSS v4** via PostCSS plugin
- **TypeScript 5** with strict mode
- **Geist Font** via next/font/google

## Architecture

### App Router Structure
All pages are Server Components by default. Only components requiring client-side interactivity use `'use client'`:
- `Navigation.tsx` - Uses `usePathname()` hook and `useState` for mobile menu
- `YouTubeEmbed.tsx` - Client-rendered iframe wrapper

### Path Alias
`@/*` maps to `./src/*` - use for imports.

### Styling Approach
Pure Tailwind CSS utilities - no component library. Design system uses green color theme (#16a34a primary) for tennis court aesthetic.

### Content Pattern
Pages follow consistent template: Hero section → Video tutorials → Numbered content sections → Key takeaways → CTAs to related pages.

Data is structured as arrays of objects mapped to JSX for DRY rendering.

### Image Handling
Uses `next/image` with `unoptimized` flag for external Unsplash URLs. Hero images use `priority` for above-fold loading.

## Routes

| Path | Content |
|------|---------|
| `/` | Landing page |
| `/basics` | Forehand fundamentals |
| `/grip` | 4 grip styles |
| `/footwork` | Stance & positioning |
| `/swing` | Swing motion phases |
| `/mistakes` | Common errors |
| `/practice` | Training drills |
| `/pros` | Pro player analysis |

## Component Interfaces

```typescript
// YouTubeEmbed
interface YouTubeEmbedProps {
  videoId: string;
  title?: string;  // defaults to 'YouTube video'
}

// ImageCard
interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}
```

## Conventions

- Primary language: Chinese (Simplified)
- Components: PascalCase
- Routes: lowercase kebab-case
- Mobile-first responsive design (md: 768px breakpoint)
- No external state management - static content site
