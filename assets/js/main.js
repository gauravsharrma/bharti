const components = [
  "header", "hero", "about", "featured",
  "why", "testimonials", "map", "blog", "contact", "footer"
];

Promise.all(components.map(id =>
  fetch(`components/${id}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
)).then(() => {
  // Call language switcher after components are loaded
  if (typeof initLanguageSwitcher === 'function') {
    initLanguageSwitcher();
  }
});
