const langSelector = document.getElementById('langSelector');

const i18nMap = {
  meet: {
    en: "Meet Bharti Sharma", ar: "تعرف على بهارتي شارما", fr: "Rencontrez Bharti Sharma", ru: "Познакомьтесь с Бхарти Шармой", zh: "认识 Bharti Sharma"
  },
  featured: {
    en: "Featured Properties", ar: "عقارات مميزة", fr: "Propriétés en vedette", ru: "Избранная недвижимость", zh: "精选房产"
  },
  why: {
    en: "Why Choose Me?", ar: "لماذا تختارني؟", fr: "Pourquoi me choisir ?", ru: "Почему выбрать меня?", zh: "为什么选择我？"
  },
  testimonials: {
    en: "What My Clients Say", ar: "ماذا يقول عملائي", fr: "Ce que disent mes clients", ru: "Отзывы клиентов", zh: "客户评价"
  },
  blog: {
    en: "Latest Blog Posts", ar: "أحدث المقالات", fr: "Derniers articles", ru: "Последние статьи", zh: "最新博客"
  },
  contact: {
    en: "Let's Talk", ar: "دعنا نتحدث", fr: "Parlons-en", ru: "Давайте обсудим", zh: "让我们交流"
  }
};

langSelector?.addEventListener('change', () => {
  const lang = langSelector.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nMap[key] && i18nMap[key][lang]) {
      el.textContent = i18nMap[key][lang];
    }
  });
});
