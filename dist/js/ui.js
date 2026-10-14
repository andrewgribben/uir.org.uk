const navigation = [
  { id: "access", label: "Access", href: "access.html" },
  { id: "form", label: "Form", href: "form.html" },
  { id: "studio", label: "Studio", href: "studio.html" },
];

export function renderHeader(activePage = "home") {
  const links = navigation.map(({ id, label, href }) => {
    const current = activePage === id ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  return `<header class="site-header">
    <a class="brand" href="index.html" aria-label="ÚIR Consulting home">
      <span class="brand-mark" aria-hidden="true">Ú</span>
      <span class="brand-copy"><strong>ÚIR</strong><small>CONSULTING</small></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
      <span class="nav-toggle-label">Menu</span><span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
    </button>
    <nav class="primary-navigation" id="primary-navigation" aria-label="Primary navigation">
      <a href="index.html"${activePage === "home" ? ' aria-current="page"' : ""}>Overview</a>${links}
      <a class="nav-contact" href="index.html#our-work">Our work <span aria-hidden="true">↗</span></a>
    </nav>
  </header>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="footer-main">
      <a class="brand brand-footer" href="index.html" aria-label="ÚIR Consulting home">
        <span class="brand-mark" aria-hidden="true">Ú</span>
        <span class="brand-copy"><strong>ÚIR</strong><small>CONSULTING</small></span>
      </a>
      <p>Rooted in County Armagh.<br>Making digital work better from the ground up.</p>
      <nav class="footer-services" aria-label="Service areas">${navigation.map(({ label, href }) => `<a href="${href}">UIR ${label}</a>`).join("")}</nav>
    </div>
    <div class="footer-base"><span>© ${year} ÚIR Consulting Ltd.</span><a href="pattern-library.html">Pattern library</a><span>County Armagh, Northern Ireland</span></div>
  </footer>`;
}
