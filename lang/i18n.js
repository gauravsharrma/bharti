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
      en: "Zero Commission. Trusted Guidance. No Hassles. Just Smart Property Moves.",
      ar: "بدون عمولة. إرشاد موثوق. بدون متاعب. فقط خطوات عقارية ذكية.",
      fr: "Zéro commission. Conseils fiables. Sans tracas. Juste des choix malins.",
      ru: "Без комиссии. Надежное руководство. Никаких хлопот. Только умные сделки.",
      zh: "零佣金。值得信赖的指导。无烦恼。尽享智能置业。",
    },
    heroSubheading: {
      en: "Work directly with Bharti Sharma – Your trusted Reportage Properties partner in Dubai",
      ar: "تواصل مباشرة مع بهارتي شارما – شريكتك الموثوقة من ريبورتاج العقارية في دبي",
      fr: "Travaillez directement avec Bharti Sharma – Votre partenaire Reportage Properties de confiance à Dubaï",
      ru: "Работайте напрямую с Бхарти Шармой – вашим надежным партнёром от Reportage Properties в Дубае",
      zh: "直接与 Bharti Sharma 合作 —— 您在迪拜值得信赖的 Reportage Properties 合作伙伴",
    },
    callNow: {
      en: "📞 Call Now", ar: "📞 اتصل الآن", fr: "📞 Appeler maintenant", ru: "📞 Позвонить", zh: "📞 立即致电"
    },
    whatsapp: {
      en: "💬 WhatsApp", ar: "💬 واتساب", fr: "💬 WhatsApp", ru: "💬 WhatsApp", zh: "💬 WhatsApp"
    },
    getDirections: {
      en: "📍 Get Directions", ar: "📍 احصل على الاتجاهات", fr: "📍 Itinéraire", ru: "📍 Проложить маршрут", zh: "📍 获取路线"
    },
    aboutHeading: {
      en: "Meet Bharti Sharma",
      ar: "تعرف على بهارتي شارما",
      fr: "Rencontrez Bharti Sharma",
      ru: "Познакомьтесь с Бхарти Шармой",
      zh: "认识 Bharti Sharma",
    },
    aboutContent: {
      en: "Helping homebuyers and investors discover premium Dubai properties with transparency, zero commission, and unmatched local insights.",
      ar: "مساعدة المشترين والمستثمرين في العثور على عقارات فاخرة في دبي بشفافية وبدون عمولة وبخبرة محلية لا مثيل لها.",
      fr: "Aide les acheteurs et investisseurs à découvrir des biens immobiliers haut de gamme à Dubaï avec transparence, sans commission et avec une expertise locale inégalée.",
      ru: "Помогает покупателям и инвесторам находить элитную недвижимость в Дубае с прозрачностью, без комиссии и с непревзойденным знанием местного рынка.",
      zh: "协助购房者和投资者以透明、公正、零佣金的方式发现迪拜优质房产，具备无与伦比的本地见解。",
    },
    featuredHeading: {
      en: "Featured Properties",
      ar: "عقارات مميزة",
      fr: "Propriétés en vedette",
      ru: "Избранные объекты",
      zh: "精选房源",
    },
    property1: {
      en: "Verdana 1 bed starting price 930,000 AED",
      ar: "شقة بغرفة نوم واحدة في فيردانا بسعر يبدأ من 930,000 درهم",
      fr: "Verdana 1 chambre à partir de 930 000 AED",
      ru: "Verdana, 1 спальня — от 930 000 AED",
      zh: "Verdana 一居室起价 930,000 迪拉姆",
    },
    property2: {
      en: "Reportage Hills 3, 4 & 5 Bed Townhouses. Starting price – 2.6M",
      ar: "تاون هاوس 3، 4 و5 غرف في ريبورتاج هيلز. السعر يبدأ من 2.6 مليون",
      fr: "Maisons de ville Reportage Hills 3, 4 et 5 chambres. Prix à partir de 2.6M",
      ru: "Таунхаусы Reportage Hills 3, 4 и 5 спален. От 2.6 млн AED",
      zh: "Reportage Hills 联排别墅（3/4/5居）起价 2.6M",
    },
    property3: {
      en: "Taormina Village 3, 4, 5 Bed Townhouses. Starting price – 3.2M",
      ar: "تاون هاوس 3، 4 و5 غرف في قرية تاورمينا. السعر يبدأ من 3.2 مليون",
      fr: "Maisons de ville Taormina Village 3, 4, 5 chambres. Prix à partir de 3.2M",
      ru: "Таунхаусы Taormina Village 3, 4 и 5 спален. От 3.2 млн AED",
      zh: "Taormina Village 联排别墅（3/4/5居）起价 3.2M",
    },
    // Why Section
    whyHeading: {
      en: "Why Choose Bharti Sharma?",
      ar: "لماذا تختار بهارتي شارما؟",
      fr: "Pourquoi choisir Bharti Sharma ?",
      ru: "Почему выбирают Бхарти Шарму?",
      zh: "为什么选择 Bharti Sharma？",
    },
    whyPoint1: {
      en: "Zero commission on all Reportage Properties",
      ar: "بدون عمولة على جميع عقارات ريبورتاج",
      fr: "Zéro commission sur toutes les propriétés Reportage",
      ru: "Без комиссии на все объекты Reportage",
      zh: "所有 Reportage 房产零佣金",
    },
    whyPoint2: {
      en: "Trusted guidance throughout your property journey",
      ar: "إرشاد موثوق طوال رحلتك العقارية",
      fr: "Conseils fiables tout au long de votre parcours immobilier",
      ru: "Надежное сопровождение на каждом этапе покупки",
      zh: "购房旅程全程值得信赖的指导",
    },
    whyPoint3: {
      en: "Access to exclusive investment-ready listings",
      ar: "الوصول إلى قوائم استثمارية حصرية جاهزة",
      fr: "Accès à des biens d'investissement exclusifs",
      ru: "Доступ к эксклюзивным инвестиционным объектам",
      zh: "专属投资房源随时可入手",
    },
    
    // Testimonials Section
    testimonialsHeading: {
      en: "What Our Clients Say",
      ar: "ماذا يقول عملاؤنا؟",
      fr: "Ce que disent nos clients",
      ru: "Что говорят наши клиенты",
      zh: "客户怎么说",
    },
    
    testimonial1: {
      en: "Bharti made the entire process seamless and stress-free!",
      ar: "بهارتي جعلت العملية برمتها سهلة وخالية من التوتر!",
      fr: "Bharti a rendu tout le processus fluide et sans stress !",
      ru: "Бхарти сделала весь процесс простым и без стресса!",
      zh: "Bharti 让整个过程顺畅而无忧！",
    },
    
    testimonial2: {
      en: "Truly the best property advisor in Dubai.",
      ar: "بالفعل أفضل مستشارة عقارية في دبي.",
      fr: "Véritablement la meilleure conseillère immobilière à Dubaï.",
      ru: "Действительно лучший консультант по недвижимости в Дубае.",
      zh: "确实是迪拜最好的房地产顾问。",
    },
    
    testimonial3: {
      en: "Professional, responsive, and helped us find the perfect family home.",
      ar: "محترفة، ومتجاوبة، وساعدتنا في العثور على منزل عائلي مثالي.",
      fr: "Professionnelle, réactive, et nous a aidés à trouver la maison idéale.",
      ru: "Профессионально, оперативно, помогла найти идеальный дом для семьи.",
      zh: "专业、响应迅速，帮我们找到了理想的家庭住宅。",
    },

    
    // Map Section (optional)
    mapHeading: {
      en: "Visit Our Office",
      ar: "زر مكتبنا",
      fr: "Visitez notre bureau",
      ru: "Посетите наш офис",
      zh: "欢迎光临我们的办公室",
    },
    
    // Blog Section
    blogHeading: {
      en: "Latest Blog Posts",
      ar: "أحدث المقالات",
      fr: "Derniers articles de blog",
      ru: "Последние записи в блоге",
      zh: "最新博客文章",
    },
    blogCTA: {
      en: "Read More",
      ar: "اقرأ المزيد",
      fr: "Lire la suite",
      ru: "Читать далее",
      zh: "阅读更多",
    },
    
    // Contact Section
    contactHeading: {
      en: "Get In Touch",
      ar: "تواصل معنا",
      fr: "Contactez-nous",
      ru: "Свяжитесь с нами",
      zh: "联系我们",
    },
    contactPhone: {
      en: "Call Now",
      ar: "اتصل الآن",
      fr: "Appelez maintenant",
      ru: "Позвонить сейчас",
      zh: "立即致电",
    },
    contactWhatsApp: {
      en: "Chat on WhatsApp",
      ar: "الدردشة على واتساب",
      fr: "Discuter sur WhatsApp",
      ru: "Написать в WhatsApp",
      zh: "WhatsApp 聊天",
    },
    contactDirections: {
      en: "Get Directions",
      ar: "الحصول على الاتجاهات",
      fr: "Obtenir l'itinéraire",
      ru: "Проложить маршрут",
      zh: "获取路线",
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
        if (to.value !== from.value) {
          to.value = from.value; // only update if values differ
        }
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
