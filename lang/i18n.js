function initLanguageSwitcher() {
  const desktopLang = document.getElementById('langSelector');
  const mobileLang = document.getElementById('langSelectorMobile');

  const i18nMap = {
    home: { en: "Home", ar: "الرئيسية", fr: "Accueil", ru: "Главная", zh: "首页" },
    properties: { en: "Properties", ar: "العقارات", fr: "Propriétés", ru: "Недвижимость", zh: "房产" },
    contact: { en: "Contact", ar: "اتصل", fr: "Contact", ru: "Контакты", zh: "联系" },
    blog: { en: "Blog", ar: "مدونة", fr: "Blog", ru: "Блог", zh: "博客" },
    meet: { en: "Meet Bharti Sharma", ar: "تعرف على بهارتي شارما", fr: "Rencontrez Bharti Sharma", ru: "Познакомьтесь с Бхарти Шармой", zh: "认识 Bharti Sharma" },
    featured: { en: "Featured Properties", ar: "عقارات مميزة", fr: "Propriétés en vedette", ru: "Избранная недвижимость", zh: "精选房产" },
    why: { en: "Why Choose Me?", ar: "لماذا تختارني؟", fr: "Pourquoi me choisir ?", ru: "Почему выбрать меня?", zh: "为什么选择我？" },
    testimonials: { en: "What My Clients Say", ar: "ماذا يقول عملائي", fr: "Ce que disent mes clients", ru: "Отзывы клиентов", zh: "客户评价" },
    blog: { en: "Latest Blog Posts", ar: "أحدث المقالات", fr: "Derniers articles", ru: "Последние статьи", zh: "最新博客" },
    contact: { en: "Let's Talk", ar: "دعنا نتحدث", fr: "Parlons-en", ru: "Давайте обсудим", zh: "让我们交流" },
    heroHeading: {
      en: "Luxury Dubai Properties with Up to 40% Off",
      ar: "عقارات فاخرة في دبي بخصم يصل إلى 40%",
      fr: "Propriétés de luxe à Dubaï avec jusqu'à 40% de réduction",
      ru: "Роскошная недвижимость в Дубае со скидкой до 40%",
      zh: "迪拜豪华房产，最高可享 40% 折扣"
    },
    heroSubheading: {
      en: "Work directly with Bharti Sharma – Your trusted Reportage Properties agent in Dubai",
      ar: "تواصل مباشرة مع بهارتي شارما – وكيلك الموثوق من ريبورتاج العقارية في دبي",
      fr: "Travaillez directement avec Bharti Sharma – Votre agent Reportage Properties de confiance à Dubaï",
      ru: "Работайте напрямую с Бхарти Шармой – вашим надежным агентом Reportage в Дубае",
      zh: "直接联系 Bharti Sharma – 您在迪拜值得信赖的 Reportage 房产代理"
    },
    callNow: {
      en: "📞 Call Now", ar: "📞 اتصل الآن", fr: "📞 Appeler maintenant", ru: "📞 Позвонить", zh: "📞 立即致电"
    },
    whatsapp: {
      en: "💬 WhatsApp", ar: "💬 واتساب", fr: "💬 WhatsApp", ru: "💬 WhatsApp", zh: "💬 WhatsApp"
    },
    getDirections: {
      en: "📍 Get Directions", ar: "📍 احصل على الاتجاهات", fr: "📍 Itinéraire", ru: "📍 Проложить маршрут", zh: "📍 获取路线"
    }
  };

  function applyTranslation(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18nMap[key] && i18nMap[key][lang]) {
        el.textContent = i18nMap[key][lang];
      }
    });
  }

  function syncLangSelect(from, to) {
    if (from && to) {
      from.addEventListener("change", () => {
        to.value = from.value;
        applyTranslation(from.value);
      });
    }
  }

  if (desktopLang && mobileLang) {
    syncLangSelect(desktopLang, mobileLang);
    syncLangSelect(mobileLang, desktopLang);
    applyTranslation(desktopLang.value); // initial run
  } else if (desktopLang) {
    desktopLang.addEventListener("change", () => applyTranslation(desktopLang.value));
    applyTranslation(desktopLang.value);
  }
}
