const i18nMap = {"heroHeadline": {"en": "Zero Commission. Trusted Guidance. No Hassles. Just Smart Property Moves.", "ar": "بدون عمولة. إرشادات موثوقة. بدون تعقيدات. فقط خطوات عقارية ذكية.", "fr": "Zéro commission. Conseils de confiance. Sans tracas. Juste des mouvements immobiliers intelligents.", "ru": "Без комиссии. Надёжная поддержка. Никаких хлопот. Только умные сделки с недвижимостью.", "zh": "零佣金。可信赖的指导。无烦恼。只做明智的房地产选择。"}};

const langSelector = document.getElementById('langSelector') || { value: 'en' };
const currentLang = langSelector.value;

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nMap[key] && i18nMap[key][currentLang]) {
      el.textContent = i18nMap[key][currentLang];
    }
  });
}

document.addEventListener('DOMContentLoaded', applyI18n);
if (langSelector.addEventListener) {
  langSelector.addEventListener('change', () => {
    window.location.reload(); // reload to apply language change
  });
}
