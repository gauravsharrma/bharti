const components = [
  "header", "hero", "about", "featured",
  "why", "testimonials", "map", "blog", "contact", "footer"
];

const basePath = location.pathname.includes("campaigns") ? "../../components/" : "components/";

Promise.all(components.map(id =>
  fetch(`${basePath}${id}.html`)
    .then(res => res.ok ? res.text() : '')
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
)).then(() => {
  if (typeof initLanguageSwitcher === 'function') initLanguageSwitcher();
  if (typeof setupMobileMenu === 'function') setupMobileMenu();
});

// Menu toggling logic for mobile view
function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  toggle?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
  });

  // sync both language selectors
  const desktopLang = document.getElementById("langSelector");
  const mobileLang = document.getElementById("langSelectorMobile");

  if (desktopLang && mobileLang) {
    const syncLang = (source, target) => {
      target.value = source.value;
      source.dispatchEvent(new Event("change"));
    };
    desktopLang.addEventListener("change", () => syncLang(desktopLang, mobileLang));
    mobileLang.addEventListener("change", () => syncLang(mobileLang, desktopLang));
  }
}
