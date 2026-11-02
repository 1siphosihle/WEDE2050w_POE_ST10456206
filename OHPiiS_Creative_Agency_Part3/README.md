# OHPiiS Creative Agency — Part 3 (Parts 1 to 3 combined)

## Student Information

- **Student name:** Siphosihle Ndlovu
- **Student number:** ST10456206
- **Subject:** WEB DEVELOPMENT
- **Subject code:** WEDE5020
- **Project:** OHPiiS Creative Agency

## Project Overview
OHPiiS Creative Agency is a South African creative agency concept providing creative direction, brand identity, digital design, photography/videography and creative campaign services. The website communicates the organisation's offering and provides clear routes for potential clients to make project enquiries.

Part 1 established the semantic HTML foundation. Part 2 added an external CSS stylesheet, layout systems, typography, colour and responsive breakpoints. Part 3 adds JavaScript interaction, dynamic content, validated forms, an interactive map, search engine optimisation and deployment.

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
- Provide a responsive foundation for Part 3 functionality and SEO work.
- Make the site interactive, searchable and easy to find in search engines (Part 3).

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

### Part 3
- **Interactive elements:** accordion (FAQ on services), tabs with arrow-key support (process on about), modal dialogs (enquiry result and email preview) and a lightbox gallery (about and home).
- **Interactive map:** Leaflet with OpenStreetMap showing the Johannesburg and Cape Town studios, with buttons that fly to each location (contact).
- **Animations:** CSS keyframe entrance on the hero, scroll-reveal using `IntersectionObserver`, image zoom and button transitions. Disabled for `prefers-reduced-motion`.
- **Advanced DOM manipulation:** project cards and category filters are created from `js/data.js`; services are filtered, searched and re-ordered live.
- **Dynamic content and search:** "Selected work" cards on the home page; search, category filter and sort on the services page.
- **Forms:** `enquiry.html` validates input and returns a cost and availability response; `contact.html` validates input and compiles an email to the recipient set in `js/main.js`.
- **Validation:** HTML5 attributes plus JavaScript rules (name letters only, email format, South African phone format, date not in the past, message length 20 to 1000, consent checkbox), inline error messages and a live character counter.
- **AJAX submission:** `fetch()` posts the form in the background to the form `action` (Netlify Forms) without a page reload.
- **SEO:** keyword-focused titles and meta descriptions, one `h1` and ordered headings per page, canonical, Open Graph and Twitter tags, JSON-LD (`ProfessionalService`), descriptive image names and alt text, image dimensions and lazy loading, internal links, `robots.txt`, `sitemap.xml`, custom `404.html`.
- **Performance and security:** deferred scripts, cache headers, small images in two sizes, security headers and a Content Security Policy in `_headers`.
- **Accessibility:** skip link, `aria-current`, `aria-live` status messages, labelled form controls, keyboard-operable dialogs, tabs and accordion.

## Keyword Research
Target keywords: *creative agency South Africa*, *creative agency Johannesburg*, *creative agency Cape Town*, *brand identity design*, *web design Johannesburg*, *creative direction*, *photography and videography*. The primary keyword is used in the home page title and `h1` region, and secondary keywords are used in page titles, descriptions, headings and body copy. Off-page plan: Instagram and LinkedIn profiles linking to the site, listing in South African creative directories, a Google Business Profile for local SEO (Johannesburg and Cape Town) and backlinks from collaborating artists.

## Deployment
Deployed on Netlify (free plan). Live URL: **[INSERT LIVE URL]**. After deploying, replace `https://ohpiis-creative-agency.netlify.app` in `sitemap.xml`, `robots.txt` and the canonical/Open Graph tags with the real URL. GitHub repository: **[INSERT REPOSITORY LINK]**.

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
```text
OHPiiS-Creative-Agency/
|-- index.html
|-- about.html
|-- services.html
|-- enquiry.html
|-- contact.html
|-- 404.html
|-- robots.txt
|-- sitemap.xml
|-- _headers
|-- netlify.toml
|-- css/
|   `-- style.css
|-- js/
|   |-- data.js
|   `-- main.js
|-- images/
|   |-- ohpiis-mark.svg
|   |-- studio-640.jpg
|   |-- studio-1280.jpg
|   |-- studio-portrait.jpg
|   `-- gallery/
|-- docs/
|   `-- wireframes/
|-- research/
|-- screenshots/
|-- archive/        (read-only copies of the Part 1 and Part 2 hand-ins)
|-- fonts/
|-- README.md
`-- OHPiiS_Creative_Agency_Part1_Website_Proposal.docx
```

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

### v2.1 — Corrections to Part 2 (feedback edits)
- Added `width` and `height` attributes to content images to stop layout shift and improve Core Web Vitals.
- Added a "Skip to main content" link and `id="main"` on `<main>` so keyboard users can bypass the navigation.
- Added `aria-current="page"` and an active style to the navigation so users can see which page they are on.
- Replaced the "Google Maps integration will be added in Part 3" placeholder text on the contact page with a working map.
- Replaced the "validation will be added in Part 3" wording on the enquiry page with the real instructions.
- Gave every form control a unique `id`, a `for` label, `autocomplete` values and an error element linked with `aria-describedby`.
- Made the contact email address a real `mailto:` link and linked the footer location line to the contact page (internal linking).
- Rewrote page titles and meta descriptions to include location and service keywords and removed the Part 2 placeholder wording.
- Removed the Part 3 scope note and updated the sitemap, file structure and references.

### v3.0 — Part 3 functionality and SEO
- Added `js/main.js` and `js/data.js` (loaded with `defer`).
- Added accordion (services FAQ), tabs (about process), modal dialogs and a keyboard-accessible lightbox gallery.
- Added six original gallery images in two sizes (`images/gallery/`) and a filterable "Selected work" grid created from data with DOM manipulation.
- Added search, category filter and sort for services.
- Added scroll-reveal and hero entrance animations with reduced-motion support.
- Added the Leaflet and OpenStreetMap interactive map with Johannesburg and Cape Town markers and fly-to buttons.
- Rebuilt the enquiry form with new fields (phone, start date, consent), JavaScript validation, error messages, a character counter and a processed cost and availability response.
- Rebuilt the contact form with a message-type field, validation and an email compiled for the stated recipient.
- Added AJAX (`fetch`) submission with Netlify Forms attributes.
- Added canonical, Open Graph, Twitter and JSON-LD metadata, `robots.txt`, `sitemap.xml` and `404.html`.
- Added `_headers` (security headers, Content Security Policy, caching) and `netlify.toml`.
- Added the archive folder with the Part 1 and Part 2 hand-ins for comparison.
- Updated the README, changelog and references.


## References
GitHub (n.d.) *Quickstart for repositories*. Available at: https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *Flexbox*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 25 September 2026).

W3C (n.d.) *Accessibility standards overview*. Available at: https://www.w3.org/WAI/standards-guidelines/ (Accessed: 25 September 2026).

MDN Web Docs (n.d.) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 2 November 2026).

MDN Web Docs (n.d.) *The HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog (Accessed: 2 November 2026).

MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 2 November 2026).

MDN Web Docs (n.d.) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 2 November 2026).

Leaflet (n.d.) *Leaflet quick start guide*. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 2 November 2026).

OpenStreetMap Foundation (n.d.) *Tile usage policy*. Available at: https://operations.osmfoundation.org/policies/tiles/ (Accessed: 2 November 2026).

Google (n.d.) *SEO starter guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 2 November 2026).

Netlify (n.d.) *Forms setup*. Available at: https://docs.netlify.com/manage/forms/setup/ (Accessed: 2 November 2026).

W3C (n.d.) *ARIA Authoring Practices Guide*. Available at: https://www.w3.org/WAI/ARIA/apg/ (Accessed: 2 November 2026).
