# OHPiiS Creative Agency — Part 2

## Student Information

- Student name: Siphosihle Ndlovu
- Student number: ST10456206
- Subject: WEB DEVELOPMENT (INTRODUCTION)
- Subject code: WEDE5020w
- Project: OHPiiS Creative Agency

## Project Overview
OHPiiS Creative Agency is a South African creative agency concept providing creative direction, brand identity, digital design, photography/videography and creative campaign services. The website communicates the organisation's offering and provides clear routes for potential clients to make project enquiries.

Part 1 established the semantic HTML foundation. Part 2 extends that foundation with an external CSS stylesheet, visual hierarchy, layout systems, typography, colour, responsive breakpoints and device-specific layouts.

## Target Audience
- Musicians and artists
- Fashion and lifestyle brands
- Small businesses and entrepreneurs
- Organisations and events
- Creative professionals

## Website Goals and Objectives
- Establish a professional online presence.
- Explain OHPiiS services clearly.
- Create a consistent visual identity.
- Generate project enquiries.
- Provide clear contact information for Johannesburg and Cape Town.

## Key Features and Functionality
### Part 1
- Five linked HTML pages.
- Semantic HTML structure.
- Navigation across all pages.
- Enquiry and contact forms.
- Organisation information and services.
- Sitemap, README and project documentation.

### Part 2
- External stylesheet at `css/style.css`.
- OHPiiS blue `#0000FF`, white and black visual system.
- Responsive typography using `clamp()`.
- CSS Flexbox for navigation and footer alignment.
- CSS Grid for hero, service, form and content layouts.
- Tablet breakpoint at 1000px.
- Mobile breakpoint at 700px.
- Relative spacing using `rem`, `%`, `vw` and `clamp()`.
- Responsive images using `picture`, `srcset`, `sizes` and fluid image rules.
- Focus states and reduced-motion consideration.
- Screenshot evidence for desktop, tablet and mobile layouts.

## Sitemap
```text
OHPiiS Creative Agency
|-- Home
|-- About
|-- Services
|-- Enquiry
`-- Contact
```

## File and Folder Structure

OHPiiS-Creative-Agency/
|-index.html
|-about.html
|-services.html
|-enquiry.html
|-contact.html
|-css/
|   `++style.css
|-images/
|   |-ohpiis-mark.svg
|   |-studio-640.jpg
|   |-studio-1280.jpg
|   `++studio-portrait.jpg
|-docs/
|-research/
|-screenshots/
|-README.md

## Part 2 Design Decisions
The visual direction uses a high-contrast blue, black and white palette. Large headings create a strong hierarchy, while compact uppercase labels create an editorial/agency feel. CSS Grid is used for two-dimensional page sections and Flexbox is used for one-dimensional alignment such as navigation and the footer.

The mobile layout changes multi-column sections to a single column at 700px. A tablet breakpoint at 1000px reduces the number of columns and allows the navigation to wrap. Responsive units and `clamp()` prevent typography and spacing from being tied to one device size.

## Responsive Testing Evidence
Design previews are included at these target viewport sizes:

- `desktop-design-preview.png` — desktop target 1440×900
- `tablet-design-preview.png` — tablet target 768×1024
- `mobile-design-preview.png` — mobile target 390×844

These are design previews generated for the project package. Before LMS submission, replace or supplement them with actual screenshots captured from Chrome/Edge Developer Tools at the same viewport sizes. The final screenshots should show the running Part 2 website and should be added to the README as evidence.

## Part 1 Details
Part 1 established the project proposal, content research, sitemap, wireframe, semantic HTML pages, navigation, forms and GitHub documentation. Part 1 references have been retained and the reference list below has been expanded for Part 2.

## Timeline and Milestones
1. Part 1 approval and planning.
2. HTML foundation and navigation.
3. Part 2 external stylesheet.
4. Desktop visual styling.
5. Tablet and mobile responsive layouts.
6. Browser developer-tool testing and screenshots.
7. README and reference update.

## Changelog
### v1.0 — Part 1 foundation
- Created five HTML pages.
- Added semantic page structure.
- Added navigation.
- Added enquiry and contact forms.
- Added sitemap, project documentation and references.

### v2.0 — Part 2 visual design
- Created an external `css/style.css` stylesheet.
- Applied the OHPiiS blue, black and white visual system.
- Added responsive typography using `clamp()`.
- Added CSS Grid and Flexbox layouts.
- Added visual styling for buttons, cards, forms, sections and footer.
- Added tablet and mobile breakpoints.
- Added responsive image techniques using `picture`, `srcset` and `sizes`.
- Added keyboard focus styling and reduced-motion support.
- Added desktop, tablet and mobile screenshot evidence.


## References
GitHub (n.d.) *Quickstart for repositories*. Available at: https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *Flexbox*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 25 September 2026).

W3C (n.d.) *Accessibility standards overview*. Available at: https://www.w3.org/WAI/standards-guidelines/ (Accessed: 25 September 2026).
