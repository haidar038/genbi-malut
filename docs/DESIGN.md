---
name: GenBI Maluku Utara
description: Sistem desain resmi untuk platform digital Generasi Baru Indonesia (GenBI) Komisariat Maluku Utara.
colors:
    primary: "#111827"
    secondary: "#0142A0"
    tertiary: "#EE1C24"
    neutral: "#FFFFFF"
    surface: "#F8F9FA"
    outline: "#E5E7EB"
    on-secondary: "#FFFFFF"
    on-tertiary: "#FFFFFF"
typography:
    h1:
        fontFamily: "Neue Power, Syne, sans-serif"
        fontSize: 4rem
        fontWeight: 800
        lineHeight: 1.1
    h2:
        fontFamily: "Neue Power, Syne, sans-serif"
        fontSize: 2.5rem
        fontWeight: 700
        lineHeight: 1.2
    h3:
        fontFamily: "Neue Power, Syne, sans-serif"
        fontSize: 1.5rem
        fontWeight: 600
    body-md:
        fontFamily: "Poppins, sans-serif"
        fontSize: 1rem
        fontWeight: 400
        lineHeight: 1.6
    label-caps:
        fontFamily: "Poppins, sans-serif"
        fontSize: 0.875rem
        fontWeight: 600
        letterSpacing: 0.05em
rounded:
    sm: 8px
    md: 16px
    lg: 24px
    full: 9999px
spacing:
    xs: 8px
    sm: 16px
    md: 24px
    lg: 48px
    xl: 80px
components:
    button-primary:
        backgroundColor: "{colors.secondary}"
        textColor: "{colors.on-secondary}"
        rounded: "{rounded.full}"
        padding: 16px
    button-secondary:
        backgroundColor: "{colors.neutral}"
        textColor: "{colors.secondary}"
        rounded: "{rounded.full}"
        padding: 16px
    button-tertiary:
        backgroundColor: "{colors.tertiary}"
        textColor: "{colors.on-tertiary}"
        rounded: "{rounded.full}"
        padding: 16px
    card-surface:
        backgroundColor: "{colors.neutral}"
        rounded: "{rounded.md}"
        padding: "{spacing.md}"
---

## Overview

Clean, Institutional, and Forward-looking. The UI embraces a modern minimalist aesthetic with generous white space to ensure information clarity. It reflects GenBI's identity as an intellectual, energetic, and professional community under the auspices of Bank Indonesia.

## Colors

The palette is built on a pristine white foundation, allowing the energetic and institutional brand colors to stand out.

-   **Primary (#111827):** Deep charcoal for core text to ensure maximum legibility and reduced eye strain compared to pure black.

-   **Secondary (#0142A0):** "Bank Indonesia Blue" --- Used for primary actions, active states, and brand trust.

-   **Tertiary (#EE1C24):** "Energetic Red" --- Used for specific call-to-actions, highlights, or alert states.

-   **Neutral (#FFFFFF):** Pure clean white serving as the dominant background color to maintain a clean layout.

-   **Surface (#F8F9FA):** A very light gray used for section backgrounds to create subtle separation without heavy lines.

## Typography

A combination of strong, modern display fonts and highly readable geometric sans-serif for content.

-   **Headings:** Neue Power (fallback to Syne). Bold, wide, and commanding for section titles and hero texts.

-   **Body:** Poppins. Round, friendly, and highly readable geometric sans-serif for all long-form text and UI elements.

## Layout

Spacing should be proportional and generous. We rely on ample padding and margins (`spacing.lg` and `spacing.xl`) between sections to let the content breathe. Do not cramp elements together.

## Elevation & Depth

Use very subtle drop shadows for floating elements like the AI Chatbot button or sticky navigation. Cards should primarily rely on border (`colors.outline`) or subtle background contrasts (`colors.surface`) rather than heavy shadows to maintain a flat, clean look.

## Shapes

We favor a mix of moderately rounded corners for structural elements (Cards) and fully rounded (pill-shaped) elements for interactions (Buttons, Badges) to make the UI feel approachable.

## Components

-   **Buttons:** Pill-shaped (`rounded-full`) for a modern, friendly feel. Use the secondary blue for primary actions and tertiary red for high-emphasis CTAs.

-   **Cards:** Clean boxes with `md` rounding and subtle borders, used for News, Programs, and Commissioners.

-   **Chatbot Widget:** Should stand out but not obstruct. Use the brand blue or a sleek white card with brand accents.

## Do's and Don'ts

-   **Do** use whitespace generously to separate sections.

-   **Do** ensure contrast ratios are accessible (e.g., White text on Blue/Red backgrounds).

-   **Don't** use too many colors outside the defined palette. Keep it strictly Blue/Red/White/Gray.

-   **Don't** use heavy gradients. Stick to solid colors for a cleaner, professional look.