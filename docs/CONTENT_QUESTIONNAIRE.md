# Content questionnaire

Purpose: every page on uir.org.uk currently carries placeholder copy, generic claims or missing facts. This lists each gap as a short question you can answer in a line or two. Current text is quoted so you know what it replaces. No page content has been changed; this is a read-only audit.

Each item is marked:
- [Required] needed before the site can honestly go live.
- [Nice to have] can wait, won't block launch.

Decisions already made (included here for context, not asked again):
- TapTags sits directly under UIR Studio.
- Earworm, Yellowbook, Singularity and Flatland-Z go in a "Geiger Games" sub-section of Studio, once each product is released. Separate Geiger branding comes later.
- Products appear on the site only once released.

---

## 1. Home - src/index.md (3 items)

1. [Required] Current copy: "Úir is an Old Irish word for earth, soil and fresh ground... Here in County Armagh, where our business is rooted in a former orchard, the name brings our place and our purpose together." Is this origin story accurate and approved to publish as written?
2. [Nice to have] Meta description reads "ÚIR Consulting brings digital accessibility, thoughtful design and practical technology together, from the ground up." Keep this wording for search results and social previews, or revise it?
3. [Nice to have] Hero heading "Accessibility starts from the ground up." puts accessibility first. Is that still the lead message you want on the homepage, ahead of Form and Studio?

## 2. UIR Access - src/access.md (3 items)

4. [Required] Offer note: "Specific services, methods and project examples can be added as the UIR Access portfolio is gathered." What specific services, methods (for example WCAG audit, VPAT/ACR authoring, training) should be listed on this page now?
5. [Required] Only one portfolio entry exists (CIVIC UK, see item 19). Are there other accessibility clients or engagements, approved for public naming, to add alongside it?
6. [Nice to have] Is "UIR Access" the final public-facing name for this service, or a working title?

## 3. UIR Form - src/form.md (3 items)

7. [Required] Offer note: "Equipment, materials, supported formats and project examples can be added as the UIR Form portfolio is gathered." What 3D printing/modelling equipment, materials and file formats do you actually support and want published?
8. [Required] Only one portfolio entry exists (Mind Mesh Learning System, see item 20). Any other 3D modelling or print management work, approved for public naming, to add?
9. [Nice to have] Is "UIR Form" the final public-facing name for this service, or a working title?

## 4. UIR Studio - src/studio.md (3 items)

10. [Required] Offer note: "Project types, technologies and case studies can be added as the UIR Studio portfolio is gathered." Which technologies/platforms (for example iOS/Swift, Android/Kotlin, static web) and project types should be listed?
11. [Required] Portfolio is empty ("Studio examples will appear here as they're prepared for sharing."). Which of your own products are released and ready to publish now? For each one, confirm: name, one-line description, public link (app store or website), and whether it's TapTags (direct under Studio) or a Geiger Games title (Earworm, Yellowbook, Singularity, Flatland-Z).
12. [Nice to have] Studio's portfolio folder (src/projects/studio/) doesn't exist yet and has no entries. Once item 11 is answered, should entries be added one at a time as each product ships, or batched together at next launch?

## 5. Contact - src/contact.md and src/_includes/layouts/contact.njk (2 items)

13. [Required] The Contact page currently has no actual way to get in touch: no email address, phone number, postal address or contact form, only the hero text "We'd be glad to hear what you're working on." What is the public contact method: email address, a contact form, phone, or a combination?
14. [Required] If an email address is published, which one? If a contact form is wanted instead, note that it needs a Privacy Policy page for any data collected (see item 17).

## 6. Pattern library - src/pattern-library.md (1 item)

15. [Nice to have] This is an internal design-system reference, currently published at the live /pattern-library.html URL. Should it stay publicly linked, or be removed from navigation/search once the site is live?

## 7. Footer and site-wide data - src/_includes/partials/footer.njk, src/_data/site.js, src/_includes/layouts/base.njk (5 items)

16. [Required] Footer reads "© {year} ÚIR Consulting Ltd." Is "ÚIR Consulting Ltd" the exact registered company name?
17. [Required] No Companies House registration number, registered address or Privacy Policy/Terms page appears anywhere on the site. Do you want the company number and registered address shown (common practice for a UK limited company), and do you need a Privacy Policy page, especially if a contact form is added?
18. [Nice to have] Footer reads "Rooted in County Armagh, Northern Ireland." with no fuller address. Keep this as the only location disclosure, or add more detail?
19. [Nice to have] Main navigation (src/_data/site.js) currently lists only Access, Form and Studio. Do you want any other top-level links added now, for example a Geiger Games or product-specific link, or social/professional profile links?
20. [Nice to have] Each page's meta description is a short marketing sentence (for example form.md: "UIR Form brings 3D modelling and print management together under one thoughtful approach."). Approve these as final, or would you like to review and adjust the wording for search results?

## 8. Images (1 item)

21. [Required] The hero photograph (src/assets/hero-stone*.jpg) and logo marks are already in use across every page. Do you hold full rights/licence to the hero photograph for public commercial use, and is it approved as the permanent hero image?

## 9. Existing project examples (2 items)

22. [Required] src/projects/access/civic-uk.md reads: "Accessibility leadership, training and auditing, alongside VPAT / Accessibility Conformance Report and accessibility statement authoring." Is CIVIC UK still a client you're approved to name publicly, and is this description current and accurate?
23. [Required] src/projects/form/mind-mesh-learning-system.md reads: "3D modelling, plans and high-resolution renders for the Mind Mesh Learning System, used by the company in its patent filings." Is Mind Mesh Learning System still approved to name publicly, and is the patent-filing claim still accurate?

---

## Summary

- 23 questions total, grouped across all 6 pages in src/*.md plus both existing project files in src/projects/.
- 15 marked Required for launch, 8 marked Nice to have.
- No page content was changed to produce this list; see `git diff main --stat` for confirmation.
