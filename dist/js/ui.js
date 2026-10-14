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
    <a class="brand" href="/" aria-label="ÚIR Consulting home">
      <img class="brand-logo" src="assets/uir-logo.svg?v=geometry-20261014" alt="" aria-hidden="true">
      <span class="brand-copy"><strong>ÚIR</strong><small>CONSULTING</small></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
      <span class="nav-toggle-label">Menu</span><span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
    </button>
    <nav class="primary-navigation" id="primary-navigation" aria-label="Primary navigation">
      <a href="/"${activePage === "home" ? ' aria-current="page"' : ""}>Overview</a>${links}
      <a class="nav-contact" href="/#our-work">Our work <span aria-hidden="true">↗</span></a>
    </nav>
  </header>`;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="footer-base"><span>© ${year} ÚIR Consulting Ltd.</span><a href="pattern-library.html">Pattern library</a><span>Rooted in County Armagh, Northern Ireland</span></div>
  </footer>`;
}
