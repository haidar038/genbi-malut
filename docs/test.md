**Context:** I am building a landing page for "GenBI Maluku Utara" (Generasi Baru Indonesia). I need you to act as an expert Frontend Developer specializing in Next.js (App Router) and Tailwind CSS.

**Design System Tokens:** Please strictly adhere to the following design system tokens for colors, typography, spacing, and shapes. Convert these tokens into Tailwind CSS utility classes or a custom `tailwind.config.js` extension:

```
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
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1.1
  h2:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "Inter, sans-serif"
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

```

**Task & Requirements:**

1.  **Framework:** Generate code using React, Next.js (App Router), and Tailwind CSS.

2.  **Typography Setup:** Use `next/font/google` to import `Host Grotesk` (as a fallback for Host Grotesk headings) and `Inter` (for body text). Configure the typography in Tailwind to match the design tokens.

3.  **Design Aesthetic:** The layout must be clean, minimalist, and institutional. Use generous white space between sections (utilizing the `lg` and `xl` spacing tokens). Avoid heavy shadows; rely on subtle borders (`outline`) or off-white backgrounds (`surface`) to separate cards.

4.  **Required Sections (Single Page Layout):**

-   **Hero Section:** Bold headline, subheadline, primary CTA button ("Kenali Kami"), and a placeholder for an illustration/hero image.

-   **Tentang & Sejarah (About & History):** A brief overview of GenBI Malut and its establishment.

-   **Visi & Misi (Vision & Mission):** A clean grid layout displaying the vision and bulleted mission points.

-   **Program Unggulan (Programs):** 3 to 4 cards showcasing key programs (e.g., Bina Desa, Literasi Keuangan). Use the `card-surface` design specs.

-   **Komisariat (Commissariats):** A section highlighting the 3 chapters: Universitas Khairun (Unkhair), Universitas Muhammadiyah Maluku Utara (UMMU), and IAIN Ternate.

-   **Struktur Organisasi (Org Structure):** Clean profile cards for the Chairman, Vice-Chairman, and core divisions.

-   **Pencapaian (Achievements):** A statistics highlight bar (e.g., "50+ Programs", "150+ Active Members").

-   **Hall of Fame:** A masonry or grid layout placeholder for event documentation and galleries.

-   **Call to Action (CTA):** A closing section encouraging users to follow the GenBI Malut Instagram or join the community.

1.  **Killer Feature (Floating AI Chatbot UI):**

    -   Build a floating action button in the bottom right corner with a message/robot icon.

    -   When clicked, toggle a modern, clean chat interface modal/popover (simulating a RAG-based AI assistant).

    -   Use the brand's blue and red accents for user/bot message bubbles.

    -   Include this specific disclaimer text inside the chat header or footer: *"AI ini hanya diatur untuk menjawab seputar informasi GenBI Malut."*

Please provide modular, fully responsive code (Mobile, Tablet, Desktop) implementing these requirements. Start with the main layout and components.