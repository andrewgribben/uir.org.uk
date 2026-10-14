---
layout: patterns.njk
permalink: pattern-library.html
pageId: patterns
title: Pattern library — ÚIR Consulting
description: The ÚIR Consulting design system and reusable website patterns.
intro:
  kicker: Pattern library
  heading: One system.<br><em>Many expressions.</em>
  lead: Reusable patterns keep each ÚIR page consistent while giving UIR Access, UIR Form and UIR Studio room to express their work.
  body: "This page documents shared components, colours, type, spacing and interaction decisions. The home contact invitation links directly to the Contact page. The footer stays compact: copyright, a Pattern library link and “Rooted in County Armagh, Northern Ireland.”"
---

<section class="pattern-section section-wrap" aria-labelledby="pattern-colours">
  <div class="section-kicker"><span>01</span><span>Foundations</span></div>
  <h2 id="pattern-colours">Colour and type</h2>
  <div class="swatch-grid">
    <div class="swatch swatch-forest"><span>Forest</span><code>#21332E</code></div>
    <div class="swatch swatch-clay"><span>Clay</span><code>#80674D</code></div>
    <div class="swatch swatch-paper"><span>Paper</span><code>#F5F0E7</code></div>
    <div class="swatch swatch-moss"><span>Moss</span><code>#78938A</code></div>
    <div class="swatch swatch-sky"><span>Sky accent</span><code>#78A8A0</code></div>
    <div class="swatch swatch-logo-blue"><span>UIR logo blue</span><code>#2093E7</code></div>
  </div>
  <div class="type-sample">
    <p class="eyebrow">DISPLAY / EDITORIAL SERIF</p>
    <h3>From the ground up.</h3>
    <p>Body copy uses a clear system sans with comfortable line length and generous spacing. Hero service labels use Jura. The shared photo hero and circular mark appear across Home, Access, Form, Studio and Contact.</p>
  </div>
</section>

<section class="pattern-section pattern-surface" aria-labelledby="pattern-logo">
  <div class="section-wrap">
    <div class="section-kicker"><span>02</span><span>Identity</span></div>
    <h2 id="pattern-logo">The UIR logo</h2>
    <div class="logo-guide">
      <div class="logo-guide-mark"><img src="assets/uir-logo.svg?v=geometry-20261014" alt="UIR logo with a blue square above the U and a clay square aligned with the lower right of the r"></div>
      <div class="logo-guide-copy">
        <h3>Three forms, one measured mark.</h3>
        <p>The U and lowercase r are each 100 × 100 units. The I is 20 × 200 units, twice their height. All three forms use a 20-unit stroke and the gaps between U–I and I–r are both 10 units. A 20-unit blue square sits at the top centre of the U; a 20-unit clay square aligns to the bottom-right corner of the r. Keep these proportions and alignments when scaling the mark. The circular hero treatment and service name are separate from the logo.</p>
      </div>
    </div>
  </div>
</section>

<section class="pattern-section pattern-surface" aria-labelledby="pattern-components">
  <div class="section-wrap">
    <div class="section-kicker"><span>03</span><span>Components</span></div>
    <h2 id="pattern-components">Reusable building blocks</h2>
    <div class="component-examples">
      <article class="component-sample"><p class="eyebrow">BUTTON / PRIMARY</p><a class="button button-dark" href="#pattern-interaction">Explore a service <span aria-hidden="true">↗</span></a></article>
      <article class="component-sample"><p class="eyebrow">TEXT LINK / INLINE</p><a class="text-link" href="#pattern-interaction">Read the approach <span aria-hidden="true">↗</span></a></article>
      <article class="component-sample">
        <p class="eyebrow">SERVICE CARD</p>
        <div class="service-card-example">
          {% set service = serviceCards[0] %}
          {% include "partials/service-card.njk" %}
        </div>
      </article>
      <article class="component-sample"><p class="eyebrow">SECTION LABEL</p><div class="section-kicker"><span>03</span><span>Selected work</span></div></article>
    </div>
  </div>
</section>

<section class="pattern-section section-wrap" id="pattern-interaction" aria-labelledby="pattern-access">
  <div class="section-kicker"><span>04</span><span>Accessibility by default</span></div>
  <h2 id="pattern-access">Patterns are part of the practice.</h2>
  <div class="accessibility-list">
    <p><strong>Keyboard:</strong> every interactive element has a visible focus treatment, follows a logical tab order and remains operable without a pointer.</p>
    <p><strong>Structure:</strong> pages use landmarks, one main heading, meaningful section headings and accessible names for controls and images.</p>
    <p><strong>Motion:</strong> movement is restrained and reduced when a visitor prefers less motion; content never depends on hover alone.</p>
    <p><strong>Contrast:</strong> text meets 4.5:1 (3:1 for large text); essential control boundaries and focus indicators meet 3:1 on their adjacent colours.</p>
    <p><strong>Targets and reflow:</strong> controls have at least 24 × 24 CSS pixels of target area; content remains available at 320 CSS pixels and with increased text spacing.</p>
    <p><strong>Colour use:</strong> moss, sky and logo blue are accents rather than body-text colours unless a specific text/background pair is checked.</p>
  </div>
</section>

<section class="pattern-section pattern-surface" aria-labelledby="pattern-guidance">
  <div class="section-wrap">
    <div class="section-kicker"><span>05</span><span>Maintaining the system</span></div>
    <h2 id="pattern-guidance">Add with intention.</h2>
    <ol class="guidance-list">
      <li>Start with an existing token or component before introducing another.</li>
      <li>Keep names and code in the shared component module; update the documentation with the code.</li>
      <li>Check the pattern at mobile, tablet and desktop widths.</li>
      <li>Verify keyboard use, reduced motion, readable contrast and heading order whenever a pattern changes.</li>
      <li>Use confirmed project details and approved imagery only. Keep portfolio cards out until the work is ready to share.</li>
    </ol>
  </div>
</section>
