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
  // Now run translation after all components are loaded
  initLanguageSwitcher();
});
