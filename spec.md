# NeuralEdge AI (THUNDER)

## Current State
An AI agency website with dark navy/cyan theme. Sections: Navbar, Hero, Services, About, Testimonials, Contact, Footer. Contact email is placeholder "hello@neuraledge.ai". Brand name is "NeuralEdge AI". Color scheme uses oklch cyan accents on a dark navy background.

## Requested Changes (Diff)

### Add
- "THUNDER" branding — replace "NeuralEdge AI" name with "THUNDER" across Navbar, Hero, Footer, and page title
- Contact email updated to "Mohammedkaifkhan030@gmail.com" in the Contact section info panel

### Modify
- Color scheme: switch from cyan/navy to black and red
  - Background: pure/near-black (oklch ~0.07 0.005 0)
  - Primary accent: bold red (oklch ~0.55 0.22 25)
  - Gradient text, glows, section lines, orbs, borders all use red instead of cyan
  - Navbar glass, glass-cards, grid pattern updated to red tones
  - All inline oklch cyan values in components updated to red equivalents
- Navbar logo alt text and aria-label updated to "THUNDER"
- Footer tagline updated to reflect THUNDER brand
- Hero heading updated to reference THUNDER power/energy

### Remove
- Nothing removed

## Implementation Plan
1. Update index.css: replace all cyan/navy CSS tokens with black/red equivalents (--primary, --accent, --background, --cyan-glow token renamed to --red-glow, glow utilities, gradient-text, section-line, glass-card, navbar-glass, grid, orb)
2. Update Navbar.tsx: brand name "THUNDER", logo alt "THUNDER", aria-label "THUNDER", button colors to red
3. Update Hero.tsx: heading/tagline to reflect THUNDER brand, all oklch cyan inline styles to red, orb gradients to red
4. Update Footer.tsx: brand name to "THUNDER", divider colors to red
5. Update Contact.tsx: email value to "Mohammedkaifkhan030@gmail.com", all inline cyan styles to red
6. Update App.tsx: global orb colors to red
