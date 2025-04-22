const components = [
  "header", "hero", "about", "featured",
  "why", "testimonials", "map", "blog", "contact", "footer"
];

components.forEach(async (id) => {
  const res = await fetch(`components/${id}.html`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
});
