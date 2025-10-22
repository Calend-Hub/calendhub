# CalendHub Page Styling Guidelines

This skill defines the consistent styling patterns used across all CalendHub feature pages and landing pages to ensure a cohesive, modern, and premium user experience.

## Brand Colors

- **Primary Orange**: `orange-600` (#EA580C) - Main brand color
- **Orange Accent**: `orange-500` (#F97316) - Lighter accent
- **Amber Accent**: `amber-500` (#F59E0B) - Warm complement
- **Text Primary**: `text` - Dynamic based on theme
- **Text Muted**: `text-muted` - Secondary text color
- **Background**: `background` - Main background color
- **Surface**: `surface` - Card/component background

## Core Styling Patterns

### 1. Hero Section

```astro
<section class="min-h-[40vh] bg-background relative overflow-hidden flex items-center">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-background"></div>

  <!-- Decorative blur circles -->
  <div class="absolute top-20 right-[15%] w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 left-[10%] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

  <div class="container relative z-10 py-20">
    <!-- Content here -->
  </div>

  <!-- Subtle grid background -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)"/>
    </svg>
  </div>
</section>
```

**Key Features:**

- `min-h-[40vh]` for impactful height
- Gradient background with subtle orange tint
- Decorative blur circles for depth
- Subtle grid pattern overlay at 3% opacity
- Proper z-index layering

### 2. Badge Components

```astro
<div class="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400">
  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <!-- Icon path -->
  </svg>
  <span>Badge Text</span>
</div>
```

**Key Features:**

- Rounded full pill shape
- 10% opacity background with 20% opacity border
- Dark mode compatible with `dark:` prefix
- Icon size: `w-4 h-4`
- Small font: `text-sm`

### 3. Primary CTA Buttons

```astro
<a
  href="https://app.calendhub.com/sign-up"
  class="group relative inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40"
>
  <span>Button Text</span>
  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
  </svg>
</a>
```

**Key Features:**

- Full rounded corners (`rounded-full`)
- Large padding: `px-10 py-5`
- Scale effect on hover: `hover:scale-105`
- Animated shadow: `shadow-lg shadow-orange-500/25` to `hover:shadow-xl hover:shadow-orange-500/40`
- Icon animation: `group-hover:translate-x-1`
- Smooth transitions: `transition-all duration-300`

### 4. Secondary Buttons

```astro
<a
  href="#features"
  class="inline-flex items-center justify-center gap-2 border-2 border-text/20 hover:border-orange-500/50 text-text hover:text-orange-600 dark:hover:text-orange-400 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-orange-500/5"
>
  <span>Button Text</span>
</a>
```

**Key Features:**

- Border style with hover color change
- Background tint on hover: `hover:bg-orange-500/5`
- Dark mode compatible
- Same padding and rounded style as primary

### 5. Feature Cards (Enhanced with Glow)

```astro
<div class="group relative">
  <!-- Glow effect on hover -->
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div class="relative bg-surface/80 dark:bg-surface/50 backdrop-blur-sm border border-border hover:border-orange-500/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 h-full">
    <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
      <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <!-- Icon path -->
      </svg>
    </div>
    <h3 class="text-2xl font-display font-bold text-text mb-4">Feature Title</h3>
    <p class="text-text-muted leading-relaxed">Feature description goes here.</p>
  </div>
</div>
```

**Key Features:**

- Parent wrapper with `group` for coordinated hover effects
- Glow layer: `blur-xl opacity-0 group-hover:opacity-100`
- Semi-transparent background: `bg-surface/80 dark:bg-surface/50`
- Backdrop blur: `backdrop-blur-sm`
- Lift effect: `hover:-translate-y-2`
- Icon container: `w-16 h-16` with gradient background
- Icon scale on hover: `group-hover:scale-110`
- Shadow on icon: `shadow-lg shadow-orange-500/25`
- Larger rounded corners: `rounded-3xl` for cards, `rounded-2xl` for icons

### 6. Section Backgrounds

```astro
<section class="py-32 relative overflow-hidden">
  <div class="container relative z-10">
    <!-- Content -->
  </div>

  <!-- Background decoration -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="section-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#section-grid)"/>
    </svg>
  </div>
</section>
```

**Key Features:**

- Generous padding: `py-32`
- Subtle gradient background
- Grid pattern overlay at 3% opacity
- Relative positioning for layering

### 7. CTA Section with Enhanced Card

```astro
<section class="py-32 bg-gradient-to-b from-orange-500/5 to-background relative overflow-hidden">
  <div class="container relative z-10">
    <div class="max-w-5xl mx-auto">
      <div class="relative group">
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        <div class="relative bg-surface/80 dark:bg-surface/50 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 text-center">
          <!-- CTA Content -->
        </div>
      </div>
    </div>
  </div>

  <!-- Floating elements -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    <div class="absolute top-20 left-[10%] animate-pulse" style="animation-duration: 4s;">
      <!-- SVG icon -->
    </div>
  </div>
</section>
```

**Key Features:**

- Extra large rounded corners: `rounded-[3rem]`
- Stronger glow effect: 30% opacity, up to 80% on hover
- Large padding: `p-12 md:p-16`
- Animated floating elements with custom animation duration
- Opacity at 20% for subtle decoration

### 8. Typography Hierarchy

**Headings:**

- Hero H1: `text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1]`
- Section H2: `text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight`
- Card H3: `text-2xl font-display font-bold text-text mb-4`

**Body Text:**

- Large: `text-xl lg:text-2xl text-text-muted leading-relaxed`
- Regular: `text-text-muted leading-relaxed`
- Small: `text-sm text-text-muted`

### 9. Trust Indicators

```astro
<div class="flex flex-wrap justify-center items-center gap-6 text-sm text-text-muted pt-8">
  <div class="flex items-center gap-2">
    <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
    </svg>
    <span>Trust item text</span>
  </div>
</div>
```

**Key Features:**

- Checkmark icons in orange: `text-orange-600`
- Icon size: `w-5 h-5`
- Flexible wrapping layout
- Gap spacing: `gap-6`

## Spacing Guidelines

- **Section Padding**: `py-32` for main sections, `py-20` for smaller sections
- **Container Max Width**: `max-w-5xl` for CTA, `max-w-6xl` for features, `max-w-7xl` for hero
- **Card Padding**: `p-8` for regular cards
- **Button Padding**: `px-10 py-5` for large CTAs
- **Gap Between Elements**: `gap-4` for buttons, `gap-8` for cards

## Animation Guidelines

- **Transition Duration**: `duration-300` for interactive elements, `duration-500` for glow effects
- **Hover Transforms**: `hover:-translate-y-2` for cards, `hover:scale-105` for buttons, `hover:scale-110` for icons
- **Easing**: Use `transition-all` for comprehensive smooth transitions
- **Pulse Animation**: Custom durations (4s, 5s) for decorative elements

## Responsive Design

- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Mobile-first approach: base styles for mobile, larger screens with prefixes
- Flexible layouts: `flex-col sm:flex-row`
- Responsive text sizing: `text-5xl sm:text-6xl lg:text-7xl`

## Dark Mode Support

- Always include dark mode variants: `dark:bg-surface/50`, `dark:text-orange-400`
- Use semantic color tokens: `text`, `text-muted`, `background`, `surface`, `border`
- Test all components in both light and dark modes

## Implementation Checklist

When creating or updating a page, ensure:

- [ ] Hero section has min-h-[40vh] with gradient background and blur circles
- [ ] All cards use the glow effect pattern with group hover
- [ ] Buttons have proper shadow and hover animations
- [ ] Typography follows the hierarchy (display font for headings)
- [ ] Section backgrounds include subtle grid patterns
- [ ] Spacing uses py-32 for main sections
- [ ] All interactive elements have smooth transitions
- [ ] Dark mode variants are included
- [ ] Trust indicators use checkmark icons
- [ ] CTA sections have enhanced glow and floating elements

## Notes

- The `font-display` class refers to a special display font defined in your Tailwind config
- Always test animations and transitions for smooth performance
- Maintain consistent color usage: orange for primary actions, amber for accents
- Use backdrop-blur-sm for modern glassmorphism effects
