# SEO-Optimized Feature Page Structure

This skill defines the complete structure and content requirements for CalendHub feature pages to rank #1 on Google while maintaining premium styling consistency.

## Page Structure Requirements

Every feature page MUST include these sections in order:

1. **Hero Section** (from page-styling.md)
2. **Initial Features Grid** (6 feature cards)
3. **Introduction Section** (What Is This Feature?)
4. **How It Works Section** (3-step process)
5. **Use Cases Section** (4 user personas)
6. **Comparison Section** (CalendHub vs Competitors)
7. **Benefits Section** (6 key benefits)
8. **FAQ Section** (8 questions minimum)
9. **CTA Section** (from page-styling.md)
10. **Schema Markup** (FAQ + SoftwareApplication)

## Section Details

### 1. Hero Section

Use exact styling from page-styling.md:

- min-h-[40vh]
- Badge with feature category
- Large heading (text-5xl sm:text-6xl lg:text-7xl)
- Primary + Secondary CTA buttons
- Trust bar with 3 checkmarks
- Decorative blur circles
- Grid background

### 2. Initial Features Grid (After Hero)

```astro
<section id="features" class="py-32 relative overflow-hidden">
  <div class="container relative z-10">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- 6 Feature Cards with glow effect -->
    </div>
  </div>
  <!-- Background grid pattern -->
</section>
```

### 3. Introduction Section

**Purpose**: Define what the feature is, SEO keyword integration
**Length**: 400-500 words, 4 paragraphs
**Structure**:

```astro
<section class="py-20 bg-background">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-display font-bold text-text mb-6">What Is [Feature Name]?</h2>
      <div class="prose prose-lg max-w-none">
        <!-- 4 paragraphs explaining the feature -->
      </div>
    </div>
  </div>
</section>
```

**Content Requirements**:

- Paragraph 1: Define the feature and its core function
- Paragraph 2: Explain CalendHub's unique approach
- Paragraph 3: Compare to competitor limitations (with sources if making claims)
- Paragraph 4: Highlight privacy/security/reliability benefits

**SEO Keywords to Include**:

- Primary keyword in H2 and first paragraph
- 2-3 related long-tail keywords
- Natural mention of competitor names
- Action verbs: "sync", "automate", "streamline", "eliminate"

### 4. How It Works Section

**Required Styling**:

```astro
<section class="py-32 relative overflow-hidden">
  <div class="container relative z-10">
    <div class="max-w-5xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 mb-6">
        <svg>...</svg>
        <span>How It Works</span>
      </div>

      <!-- Heading -->
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-text">
        [Action Verb] [Feature]
        <br/>
        <span class="text-text-muted">In Three Simple Steps</span>
      </h2>

      <!-- 3 Step Cards with glow effects -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Each card: group relative + glow + w-16 h-16 icon + hover animations -->
      </div>

      <!-- Technical Details Card (Optional) -->
      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="relative bg-surface/80 dark:bg-surface/50 backdrop-blur-sm border border-border hover:border-orange-500/50 rounded-3xl p-8 transition-all duration-300">
          <h3>Behind the Scenes: [Technical Explanation]</h3>
          <p>Technical details...</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Background grid pattern -->
</section>
```

### 5. Use Cases Section

**Required**: 4 user personas with real-world scenarios
**Styling**:

```astro
<section class="py-32 bg-background relative overflow-hidden">
  <div class="container relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Badge + Large Heading -->
      <div class="text-center mb-20">
        <div class="inline-flex...">Use Cases</div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-text">
          Who Benefits from
          <br/>
          <span class="text-text-muted">[Feature Name]?</span>
        </h2>
      </div>

      <!-- 4 Use Case Cards (2x2 grid) -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Each card: group + glow effect + hover:-translate-y-2 -->
      </div>
    </div>
  </div>
</section>
```

**User Persona Templates**:

1. **Consultants & Freelancers**: Multiple client scenarios
2. **Executives & Business Leaders**: Work-life balance scenarios
3. **Executive Assistants**: Managing multiple calendars
4. **Distributed Teams**: Cross-timezone coordination

Each persona MUST include:

- Title (h3, text-2xl)
- Problem description (2-3 sentences)
- "Common setup:" example with specific calendar/tool counts

### 6. Comparison Section

**Required**: Compare CalendHub vs primary competitor vs manual process
**Must Include**:

- Comparison table with 5-6 feature rows
- Visual indicators (✓ green, ✗ red, ~ orange)
- Sources for competitor claims with target="\_blank" rel="noopener noreferrer"

**Required Disclaimer Box**:

```astro
<div class="mt-8 bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6">
  <p class="text-text-muted leading-relaxed">
    <strong class="text-text">[Competitor] limitation:</strong> [Specific problem]
    (<a href="[source]" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:text-orange-700 underline">source: [name]</a>)
  </p>
</div>
```

### 7. Benefits Section

**Required**: Exactly 6 benefit cards
**Styling**:

```astro
<section class="py-32 bg-background relative overflow-hidden">
  <div class="container relative z-10">
    <div class="max-w-6xl mx-auto">
      <!-- Badge + Heading -->
      <div class="text-center mb-20">
        <div class="inline-flex...">Key Benefits</div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-text">
          Benefits of [Feature]
          <br/>
          <span class="text-text-muted">[Secondary Descriptor]</span>
        </h2>
      </div>

      <!-- 6 Benefit Cards (3x2 grid) -->
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Each card: group + glow + w-14 h-14 gradient icon + hover effects -->
      </div>
    </div>
  </div>
</section>
```

**Benefit Card Structure**:

```astro
<div class="group relative">
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="relative bg-surface/80 dark:bg-surface/50 backdrop-blur-sm border border-border hover:border-orange-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-full">
    <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
      <svg class="w-7 h-7 text-white">...</svg>
    </div>
    <h3 class="text-lg font-display font-bold text-text mb-2">[Benefit Title]</h3>
    <p class="text-text-muted text-sm leading-relaxed">[Benefit description]</p>
  </div>
</div>
```

### 8. FAQ Section

**Required**: Minimum 8 questions (2x4 grid)
**Styling**: Use exact pattern from page-styling.md FAQ section

**Question Types to Include**:

1. Core feature explanation question
2. Technical how-it-works question
3. Speed/performance question
4. Privacy/security question
5. Platform compatibility question
6. Pricing/limits question
7. Use case-specific question
8. Competitor comparison question

**FAQ Schema**: MUST include FAQ Page schema markup after closing section tag

### 9. Meta Tags & SEO

**Title Format**: `[Feature Name] [Category] - [Key Benefit] | CalendHub`

- Max 60 characters
- Include primary keyword
- Include "CalendHub" brand

**Description Format**: `[Action verb] [feature benefit]. [Unique value prop]. [Key differentiator]. [CTA or trust element].`

- 150-160 characters
- Include primary + secondary keywords
- Mention competitor by name if relevant
- Include numbers when possible

**Examples**:

```astro
title="Multi-Calendar Sync Software - Sync Unlimited Calendars | CalendHub"
description="Sync unlimited Google Calendar, Outlook, iCloud & more with bidirectional calendar sync software. Real-time updates, zero conflicts, unlimited connections. No 6-calendar limit like Calendly."
```

### 10. Schema Markup Requirements

Include TWO schema types at end of page:

1. **FAQPage Schema** - All 8+ FAQ questions
2. **SoftwareApplication Schema** - Feature-specific details

```astro
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [/* all FAQ items */]
}
</script>

<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CalendHub [Feature Name]",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "[Feature description with keywords]",
  "url": "https://calendhub.com/features/[feature-slug]",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "14-day free trial, no credit card required"
  },
  "featureList": [/* 8-10 key features */]
}
</script>
```

## Content Length Requirements

- **Total Word Count**: 2,500-3,000 words
- **Introduction Section**: 400-500 words
- **How It Works**: 300-400 words
- **Use Cases**: 600-800 words (150-200 per persona)
- **Benefits**: 300-400 words
- **FAQ**: 800-1,000 words (100-125 per question)

## SEO Keyword Integration Strategy

### Keyword Density Guidelines

- **Primary Keyword**: 8-12 times throughout page
  - Title tag (1x)
  - Meta description (1x)
  - H1 (1x)
  - H2 headings (2-3x)
  - Body content (4-6x)
  - Schema markup (1x)

- **Secondary Keywords**: 4-6 times each
  - Distribute across H2/H3 headings
  - Natural integration in paragraphs
  - Feature card descriptions

- **Long-tail Keywords**: 2-3 times each
  - Use in FAQ questions (perfect for long-tail)
  - Use case descriptions
  - Benefit card descriptions

### Keyword Placement Priority

1. **Page title** - Most important
2. **First paragraph** - Within first 100 words
3. **H2 headings** - At least 2 of them
4. **Last paragraph** - Before CTA
5. **Image alt text** - If using images
6. **Schema markup** - Description fields

## Competitor Claims Verification

**CRITICAL**: When making claims about competitors:

1. MUST verify claim with web search
2. MUST include source link with target="\_blank" rel="noopener noreferrer"
3. Use format: `(<a href="[url]" target="_blank" rel="noopener noreferrer" class="text-orange-600 hover:text-orange-700 underline">source: [Site Name]</a>)`
4. If can't verify, DO NOT make the claim

## Internal Linking Strategy

Each feature page should link to:

- **2-3 related blog posts** (in comparison or intro section)
- **1-2 other feature pages** (in use cases or benefits)
- **Main pricing page** (in CTA)

Link format:

```astro
<a href="/blog/[slug]" class="text-orange-600 hover:text-orange-700 underline">[anchor text]</a>
```

## Common Mistakes to Avoid

❌ **DON'T**:

- Use basic cards without glow effects
- Forget badge components on section headers
- Use py-20 when py-32 is required
- Skip background grid patterns
- Make competitor claims without sources
- Use emojis in copy
- Write less than 2,500 words total
- Skip schema markup
- Forget dark mode variants

✅ **DO**:

- Use group + glow pattern on ALL card sections
- Include badge on How It Works, Use Cases, Benefits, FAQ
- Use py-32 for major sections
- Add background decorations
- Link to verified sources for claims
- Keep professional tone
- Aim for 2,800+ words
- Include both schema types
- Test dark mode appearance

## Quality Checklist

Before considering a feature page complete, verify:

- [ ] Page has 2,500+ words of content
- [ ] Title tag includes feature + benefit + brand (under 60 chars)
- [ ] Meta description is 150-160 chars with keywords
- [ ] All 10 required sections are present
- [ ] Hero section uses proper styling from page-styling.md
- [ ] How It Works has 3 steps with glow cards + numbered icons
- [ ] Use Cases has 4 personas with "Common setup" examples
- [ ] Comparison table includes sources for competitor claims
- [ ] Benefits section has 6 cards with gradient icons
- [ ] FAQ has 8+ questions covering all question types
- [ ] Both FAQPage and SoftwareApplication schema included
- [ ] All sections use proper badges and heading hierarchy
- [ ] All cards have glow effects (group + absolute blur layer)
- [ ] All icons use gradient backgrounds (from-orange-500 to-orange-600)
- [ ] Hover animations present on all interactive elements
- [ ] Background grid patterns on major sections
- [ ] Dark mode classes on all elements
- [ ] Internal links to 2-3 blog posts
- [ ] No emojis in content
- [ ] Professional tone throughout

## Feature-Specific Customization

While maintaining the structure above, customize these elements per feature:

1. **Primary Keyword**: Based on feature (e.g., "smart booking links", "AI meeting notes")
2. **Competitor**: Identify main competitor (Calendly, Otter.ai, etc.)
3. **User Personas**: Adjust to match feature relevance
4. **Benefits**: Feature-specific advantages
5. **Technical Details**: Unique implementation details
6. **FAQ Questions**: Feature-specific concerns

## Example Keywords by Feature

**Smart Booking Links**:

- Primary: "smart booking links", "meeting scheduling software"
- Secondary: "calendly alternative", "booking page", "scheduling links"
- Long-tail: "best meeting scheduler for teams", "unlimited booking pages"

**AI Meeting Notes**:

- Primary: "AI meeting notes", "automated meeting transcription"
- Secondary: "meeting assistant", "AI note taker", "meeting recorder"
- Long-tail: "automatic meeting summary software", "AI transcription for Zoom"

**Team Management**:

- Primary: "team calendar management", "workspace scheduling"
- Secondary: "team collaboration tool", "shared calendar software"
- Long-tail: "best calendar for distributed teams", "multi-user scheduling platform"
