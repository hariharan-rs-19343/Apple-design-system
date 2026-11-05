---
version: alpha
name: ZhareHub Design System
description: Design system for ZhareHub — a file sharing and collaboration app targeting iOS/iPadOS 26, macOS, and watchOS. Built on Apple HIG with a custom brand layer.

colors:
  # ── ZhareHub Brand: Primary (Blue) ──
  primary: "#226DB4"
  primary-pressed: "#1B5A96"
  on-primary: "#FFFFFF"
  primary-container: "#E3EEF9"
  on-primary-container: "#0F3A63"
  primary-50: "#EEF5FC"
  primary-100: "#D6E7F7"
  primary-200: "#ADCFEF"
  primary-300: "#7FB3E5"
  primary-400: "#4F93D6"
  primary-500: "#226DB4"
  primary-600: "#1C5D9A"
  primary-700: "#174C7E"
  primary-800: "#113A61"
  primary-900: "#0B2742"

  # ── ZhareHub Brand: Secondary (Teal) ──
  secondary: "#0E7C72"
  secondary-pressed: "#0A655D"
  on-secondary: "#FFFFFF"
  secondary-container: "#DDF3F0"
  on-secondary-container: "#0A4A44"

  # ── ZhareHub Brand: Tertiary (Amber/Orange) ──
  tertiary: "#AD5615"
  tertiary-pressed: "#8F4610"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#FBE9DB"
  on-tertiary-container: "#5C2D0A"

  # ── Disabled ──
  disabled-fill: "#E4E7EB"
  disabled-label: "#A1A8B0"
  disabled-border: "#D3D8DE"

  # ── Surfaces ──
  background: "#FFFFFF"
  surface: "#F5F7FA"
  label: "#0F1B2A"
  label-secondary: "#4A5767"
  separator: "#DDE2E8"

  # ── iOS System Accents ──
  accent-red: "#FF383C"
  accent-blue: "#0088FF"
  accent-green: "#34C759"
  accent-orange: "#FF8D28"
  accent-yellow: "#FFCC00"
  accent-purple: "#CB30E0"
  accent-pink: "#FF2D55"
  accent-teal: "#00C3D0"
  accent-indigo: "#6155F5"
  accent-cyan: "#00C0E8"
  accent-mint: "#00C8B3"
  accent-brown: "#AC7F5E"

  # ── Dark Mode Overrides ──
  dark-primary: "#5FA8EE"
  dark-primary-pressed: "#4A92D6"
  dark-on-primary: "#0A2540"
  dark-primary-container: "#123A61"
  dark-on-primary-container: "#D3E6FA"
  dark-secondary: "#4FC7B8"
  dark-secondary-pressed: "#3AAD9F"
  dark-on-secondary: "#062E2A"
  dark-secondary-container: "#0D3F3A"
  dark-on-secondary-container: "#C8F0EA"
  dark-tertiary: "#F0A060"
  dark-tertiary-pressed: "#D98A4C"
  dark-on-tertiary: "#3D1D05"
  dark-tertiary-container: "#4A2A12"
  dark-on-tertiary-container: "#FBDCC4"
  dark-background: "#0B1118"
  dark-surface: "#151D27"
  dark-label: "#EAF0F6"
  dark-label-secondary: "#9AA8B8"
  dark-separator: "#2A3441"
  dark-accent-red: "#FF4245"

  # ── iOS Semantic Grays ──
  gray: "#8E8E93"
  gray-2: "#AEAEB2"
  gray-3: "#C7C7CC"
  gray-4: "#D1D1D6"
  gray-5: "#E5E5EA"
  gray-6: "#F2F2F7"
  black: "#000000"
  white: "#FFFFFF"

typography:
  large-title:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: "41px"
    letterSpacing: "0.37px"
  title1:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "34px"
    letterSpacing: "0.36px"
  title2:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "0.35px"
  title3:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "25px"
    letterSpacing: "0.38px"
  headline:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: "22px"
    letterSpacing: "-0.41px"
  body:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "-0.41px"
  callout:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "21px"
    letterSpacing: "-0.32px"
  subheadline:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "-0.24px"
  footnote:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "18px"
    letterSpacing: "-0.08px"
  caption1:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
  caption2:
    fontFamily: "Zoho Puvi, SF Pro, -apple-system, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "13px"

spacing:
  xs: "4px"
  sm: "8px"
  sm-md: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "24px"
  xxxl: "32px"
  row-standard: "44px"
  row-tall: "64px"

rounded:
  none: "0px"
  sm: "8px"
  md: "10px"
  lg: "13px"
  xl: "26px"
  sheet-top: "34px"
  sheet-ipad: "38px"
  sheet-bottom: "58px"
  window: "34px"
  widget-sm: "28px"
  full: "100px"

shadows:
  sheet: "0 15px 75px rgba(0,0,0,0.18)"
  window: "0 20px 76px rgba(0,0,0,0.2)"
  popover: "0 10px 100px rgba(0,0,0,0.3)"
  tab-pill: "0 2px 8px rgba(0,0,0,0.08)"

blur:
  regular: "7px"
  medium: "12px"
  large: "14px"
  popover: "130px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    fontWeight: 600
    fontSize: "17px"
  button-secondary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    fontWeight: 600
    fontSize: "17px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    fontWeight: 400
    fontSize: "17px"
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: "16px"
    shadow: "{shadows.tab-pill}"
  list-row:
    height: "44px"
    padding: "0 16px"
    separatorColor: "{colors.separator}"
  navigation-bar:
    backgroundColor: "{colors.background}"
    titleFont: "{typography.headline}"
    largeTitleFont: "{typography.large-title}"
  tab-bar:
    backgroundColor: "{colors.background}"
    activeColor: "{colors.primary}"
    inactiveColor: "{colors.label-secondary}"
---

## Visual Theme & Atmosphere

ZhareHub is a file sharing and collaboration app with a clean, functional iOS-native aesthetic. The design language is minimal and utilitarian — **clarity over decoration**. Think system-level Apple design precision with a custom blue-teal-amber brand accent layer on top.

The brand mark is a red rocket icon (red body, blue exhaust/window). The primary brand color is a confident blue (`#226DB4`), supported by a teal secondary and warm amber tertiary.

## Color Roles & Usage

- **Primary (`#226DB4`)**: Main actions, links, selection highlights, active tab indicators, and primary buttons. This is ZhareHub's signature blue.
- **Secondary (`#0E7C72`)**: Supporting actions, success-adjacent states, secondary badges. Use sparingly alongside primary.
- **Tertiary (`#AD5615`)**: Warm amber for accent badges, attention callouts, and visual contrast against the blue primary.
- **Background (`#FFFFFF`)**: Page-level background. Pure white in light mode, near-black (`#0B1118`) in dark mode.
- **Surface (`#F5F7FA`)**: Card and section backgrounds. Slightly off-white for subtle depth separation.
- **Separator (`#DDE2E8`)**: Thin 0.5px lines between list rows and sections.

### Dark Mode
Full dark mode token set is provided. All `on-*` color pairs maintain ≥ 4.5:1 contrast ratio. Dark primary shifts to `#5FA8EE` (lighter blue) for readability on dark surfaces.

### iOS System Accents
The 12 standard iOS accent colors are available for system-level UI (destructive actions use `accent-red`, success uses `accent-green`, etc.). Don't use system accents for brand surfaces — use the `--zh-*` tokens instead.

## Typography

- **Brand typeface**: **Zoho Puvi** (10 weights, Thin 100 → Extrablack 950). Always declared first in the font stack with SF Pro as fallback so SF Symbols glyphs (Private Use Area) render correctly.
- **11-level type scale** following Apple's iOS Human Interface Guidelines, from Large Title (34px) down to Caption 2 (11px).
- **Headline** (17px) defaults to Semibold (600). All other styles default to Regular (400).
- Body and smaller sizes use negative letter-spacing (e.g., −0.41px for Body) for tighter, iOS-native text rendering.

## Layout Principles

- **16px horizontal padding** for all content areas (standard iOS margins).
- Use the 8px grid: spacing values progress as 4 → 8 → 10 → 12 → 16 → 20 → 24 → 32.
- **List row height**: 44px standard, 64px+ for rows with images/thumbnails.
- **Grouped table section insets**: 20px margins.
- Maintain generous whitespace. Avoid crowding — every element should breathe.

## Corner Radii

- **Buttons**: Full pill (100px border-radius) — this is non-negotiable for primary, secondary, and tertiary buttons.
- **Cards/Groups**: 10–13px for content cards and grouped sections.
- **Sheets**: 34px top (iPhone), 38px (iPad), 58px bottom (iPhone).
- **App icons**: 26px at 120px size, proportionally scaled.
- **Windows** (macOS/iPad): 34px.

## Backgrounds & Materials

- **No gradients on backgrounds** — use flat solid colors. Gradients are reserved for widgets and special decorative elements only.
- Grouped table backgrounds use a light gray (#F2F2F7) in light mode, pure black in dark mode.
- iOS 26 Liquid Glass effect: frosted glass with backdrop blur. Regular = 7px, Medium = 12px, Large = 14px.
- Material styles: Regular, Thick, Thin, Ultrathin — each with Light and Dark variants.

## Shadows

- Use shadows sparingly. Only sheets, windows, popovers, and floating elements get shadows.
- Tab bar floating pill: subtle `rgba(0,0,0,0.08)` shadow only.
- Never apply drop shadows to list rows, cards within grouped tables, or inline content.

## Iconography

- **SF Symbols only** — Apple's system icon font. No third-party icon sets, no emoji in system UI.
- Monochrome, single-weight line icons matching SF Pro's optical weight.
- App icon: ZhareHub rocket mark, available in Light and Dark variants.

## Content & Tone

- **Clean, functional iOS system language**. Labels are short and direct.
- **Title Case** for navigation titles; **Sentence case** for body text and descriptions.
- **Second person** ("you") for user-facing copy. First person for user actions ("My Files").
- No emoji in system UI. No decorative flourishes.

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use `--zh-primary` blue for main CTAs | Use iOS system blue for brand actions |
| Keep buttons as full-pill (100px radius) | Use squared or lightly-rounded buttons |
| Use Zoho Puvi as the primary typeface | Use SF Pro as primary (it's the fallback) |
| Flat backgrounds, no surface gradients | Apply gradients to page backgrounds |
| 16px horizontal content padding | Vary content margins per screen |
| 44px minimum touch targets | Make interactive elements smaller than 44px |
| Use SF Symbols for all icons | Import third-party icon sets |
