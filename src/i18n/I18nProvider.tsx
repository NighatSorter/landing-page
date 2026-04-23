import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const messages = {
  ar: {
    dir: "rtl",
    brand: "نقاة",
    nav: {
      home: "الرئيسية",
      about: "عن نقاة",
      services: "الخدمات",
      machine: "آلة الفرز",
      projects: "مشاريعنا",
      contact: "تواصل",
      contactCta: "تواصل معنا",
      ariaLabel: "شريط تنقّل",
      switchTo: {
        ar: "التبديل إلى العربية",
        en: "التحويل إلى الإنجليزية",
      },
      menuLabel: "القائمة",
    },

    hero: {
      ariaLabel: "القسم التعريفي الرئيسي",
      eyebrow: "رؤية حاسوبية • تحليلات متقدمة",
      titleTop: "تحويل البيانات المرئية",
      titleBottom: "إلى قرارات فعّالة",
      subtitle:
        "حلول رؤية حاسوبية وذكاء اصطناعي صُنعت في السعودية لتمكين المصانع والجهات من العمل بذكاء أعلى.",
      ctaPrimary: "تواصل معنا",
      ctaSecondary: "مشاريعنا",
      stats: [
        { value: "+12", label: "خط إنتاج مراقب" },
        { value: "99.2%", label: "دقة في الفرز" },
        { value: "24/7", label: "دعم تشغيلي" },
      ],
    },

    about: {
      title: "عن  نقاة",
      body: `نقاة شركة سعودية متخصّصة في الرؤية الحاسوبية والذكاء الاصطناعي، نبتكر حلولًا متقدمة تمكّن الجهات في المملكة من فهم بيئتها والتفاعل معها بذكاء ودقّة. نعمل على تحويل البيانات البصرية إلى قيمة حقيقية تساعد المؤسسات على رفع كفاءتها واتخاذ قرارات أسرع وأكثر فاعلية.

نحن اليوم نمر بمرحلة نمو متسارعة داخل السوق السعودي، نتوسّع من خلالها في تطوير تقنيات تحليل الصور والفيديو، ونقدّم حلول رؤية حاسوبية تدعم توجهات التحوّل الرقمي وتلبي احتياجات القطاعات المختلفة في المملكة.`,
      mouseAlt: "ماوس تفاعلي",
    },

    services: {
      ariaLabel: "قسم الخدمات",
      badge: "حلول رؤية حاسوبية متكاملة",
      heading: "خدماتنا الذكية",
      subtitle:
        "من تحليل الصور بالذكاء الاصطناعي إلى الربط بخطوط الإنتاج والمنشآت الحيوية، نقدّم حلول رؤية حاسوبية قابلة للتوسّع وموثوقة على مستوى المؤسسات.",

      categories: {
        sorting: {
          heading: "الفرز والتصنيف",
          items: [
            {
              title: "تصنيف التمور",
              desc: "تطبيق ذكي يتعرّف على أنواع التمور من صورة واحدة، ويمنح المستخدم معلومات دقيقة تساعده على التمييز بين الأصناف بسهولة وسرعة.",
            },
            {
              title: "تصنيف النخيل",
              desc: "تقنيات تعلّم عميق للتعرّف على أصناف النخيل تلقائيًا، وتزويد المزارعين والمهتمين بمعلومات موثوقة وفورية.",
            },
            {
              title: "مراقبة الجودة",
              desc: "حلول رؤية حاسوبية تنفّذ فحوصات آلية دقيقة لضمان جودة المنتجات واتساقها، وتقديم تقارير تدعم اتخاذ القرار.",
            },
          ],
        },

        inspection: {
          heading: "ضبط الجودة",
          items: [
            {
              title: "كشف العيوب",
              desc: "فحص بصري ذكي لاكتشاف العيوب بدقّة وسرعة، والمساعدة في رفع جودة المنتجات قبل وصولها للعميل.",
            },
            {
              title: "المسح الآلي",
              desc: "تحليل بصري عالي السرعة يلتقط أدق التفاصيل ويوفّر رؤية فورية لجودة المنتج.",
            },
            {
              title: "التحقق من المطابقة",
              desc: "أنظمة آلية للتأكد من التزام المنتجات بالمعايير والمواصفات المطلوبة لضمان جودة ثابتة وموثوقة.",
            },
          ],
        },

        security: {
          heading: "المراقبة والتحليلات الأمنية",
          items: [
            {
              title: "رصد الحشود",
              desc: "حلول ذكية لمتابعة حركة الأشخاص ومستويات الكثافة لحظيًا، لدعم إدارة المواقع وتعزيز السلامة.",
            },
            {
              title: "تحليل الحركة",
              desc: "خرائط حرارية تُبرز أنماط الحركة والتجمّعات وتوفر رؤى دقيقة لتحسين توزيع المساحات وإدارة الزحام.",
            },
            {
              title: "تحليلات المدن الذكية",
              desc: "قدرات متقدمة في تحليل الفيديو والذكاء الاصطناعي لخدمة المطارات والمجمّعات والمنشآت الكبرى بحلول أمنية وتحليلية فعّالة.",
            },
          ],
        },
      },
    },

    machine: {
      title: "اكتشف مستقبل فرز التمور مع نقاة S8",
      body:
        "آلة ذكية لفرز التمور بدقّة عالية عبر خطوط مؤتمتة، تضمن سرعة أكبر وجودة ثابتة وتخفّض التكاليف التشغيلية عبر تقليل الاعتماد على الأيدي العاملة.",
      detailCta: "تعرّف أكثر",
      tryCta: "اطلب تجربة",
      imageAlt: "آلة نقاة S8 لفرز التمور",
    },

    projects: {
      title: "مشاريعنا",
      description: "تطبيقات عملية للرؤية الحاسوبية في تصنيف التمور وتحليل جذوع النخل.",
      carouselAria: "مشاريع نقاة",
      slideLabel: "شريحة {current} من {total}",
      dotLabel: "الانتقال إلى الشريحة {index}",
      navPrev: "رجوع للمشروع السابق",
      navNext: "انتقال للمشروع التالي",
      openCta: "تفاصيل المشروع",

      items: {
        "auto-service": {
          title: "Auto-Service — إدارة خدمات السيارات",
          description:
            "نظام رقمي متكامل بالذكاء الاصطناعي يساعد المنشآت على تطوير أرباحهم ومراقبة أعمالهم.",
          imageAlt: "معاينة تطبيق Auto-Service",
        },
        "date-ai": {
          title: "تطبيق ويب لتصنيف التمور بالذكاء الاصطناعي",
          description:
            "أداة مبتكرة تحدّد نوع التمر فورًا من صورة واحدة، وتمنح المستخدم تجربة سريعة وموثوقة للتعرّف على الأصناف بسهولة.",
          imageAlt: "معاينة تطبيق تصنيف التمور",
        },
        "machine-ai": {
          title: "لوحة تحكم آلة نقاة S8",
          description: "واجهة تشغيل ذكية تراقب خطوط الفرز وتعرض مؤشرات الأداء لحظيًا.",
          imageAlt: "شاشة تعرض لوحة تحكم آلة نقاة S8",
        },
        "palm-ai": {
          title: "تطبيق ويب لتصنيف جذوع النخل",
          description:
            "حل متقدم يعتمد على الرؤية الحاسوبية لتصنيف جذوع النخل بدقّة تتجاوز 95٪، ويوفّر نتائج فورية وموثوقة تسهّل التعرّف على الفئات.",
          imageAlt: "معاينة تطبيق تصنيف جذوع النخل",
        },
      },
    },

    impact: {
      title: "تأثير أرقامنا",
      description:
        "حلول الرؤية الحاسوبية من نقاة ترفع الكفاءة التشغيلية، تقلل الهدر، وتحسّن مراقبة الجودة بأرقام ملموسة وقابلة للقياس.",
      stats: [
        {
          value: "%70",
          title: "تقليل في تكاليف العمالة اليدوية",
          desc: "أتمتة عمليات الفرز والفحص واستبدال الإجراءات اليدوية بأنظمة رؤية ذكية.",
        },
        {
          value: "%90",
          title: "تسريع دورات مراقبة الجودة",
          desc: "اكتشاف فوري للأخطاء وتحليل مستمر للبيانات يقلّص وقت الفحص ويرفع كفاءة القرار.",
        },
        {
          value: "%98",
          title: "دقة في تصنيف المنتجات",
          desc: "نماذج رؤية حاسوبية مدرّبة على بيانات صناعية حقيقية لضمان أعلى درجات الدقة.",
        },
        {
          value: "%60",
          title: "تحسين في الكفاءة التشغيلية",
          desc: "دمج تحليلات الذكاء الاصطناعي في العمليات اليومية يقلل الهدر ويرفع الإنتاجية.",
        },
        {
          value: "24/7",
          title: "تشغيل مستمر بلا توقف",
          desc: "أنظمة تعمل ذاتيًا على مدار الساعة بأخطاء أقل وتعب أقل على فرق التشغيل.",
        },
      ],
      footnote: "الأرقام تقريبية وتعتمد على نتائج مشاريع حقيقية وتقديرات تشغيلية.",
    },

    contact: {
      title: "تواصل معنا",
      description:
        "نساعدك على بناء حلول ذكاء اصطناعي متقدمة ومخصّصة لاحتياجاتك، من مرحلة الفكرة وحتى الإطلاق والتشغيل الفعلي.",
      buttonLabel: "انتقل إلى صفحة التواصل",
      buttonAria: "انتقل إلى صفحة التواصل",
      note: "نرحّب بتواصلك دائمًا.",
    },

    footer: {
      ariaLabel: "تذييل الصفحة",
      quickLinksLabel: "روابط سريعة",
      navAria: "روابط التنقل",
      tagline: "نحوّل البيانات المرئية إلى حلول عملية تُحدث فرقًا حقيقيًا.",
      followLabel: "تابعنا",
      quickLinks: [
        { href: "#top", label: "الرئيسية" },
        { href: "#services", label: "الخدمات" },
        { href: "#projects", label: "المشاريع" },
        { href: "#contact", label: "تواصل" },
        { href: "#privacy", label: "سياسة الخصوصية" },
        { href: "#terms", label: "الشروط والأحكام" },
      ],
      social: {
        linkedin: "لينكد إن",
        twitter: "تويتر",
        github: "جيت هاب",
      },
      brandAlt: "شعار نقاة",
      rights: "جميع الحقوق محفوظة",
      compliance: {
        heading: "مسجّل ومتوافق",
        companyName: "شركة نقاة المحدودة",
        crLabel: "السجل التجاري",
        unifiedLabel: "الرقم الموحد",
        crNumber: "1010983081",
        unifiedNumber: "7038320771",
        address:
          "٤٣٠٩ طريق الملك عبدالله بن عبدالعزيز سعود الفرعي، حي الرائد ٨٧٧٨، الرياض ١٢٣٥٤، المملكة العربية السعودية",
        logos: {
          ndgp: "منصة حوكمة البيانات الوطنية",
          sdaia: "الهيئة السعودية للبيانات والذكاء الاصطناعي",
          zatca: "هيئة الزكاة والضريبة والجمارك",
          sbc: "المركز السعودي للأعمال",
        },
      },
    },

    partners: {
      title: "موثوق من قبل شركات وجهات رائدة",
      ariaLabel: "شركاؤنا",
    },

    langToggle: "EN",
  },

  en: {
    dir: "ltr",
    brand: "Naqa",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      machine: "Machine",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Get in touch",
      ariaLabel: "Navigation",
      switchTo: {
        ar: "Switch to Arabic",
        en: "Switch to English",
      },
      menuLabel: "Menu",
    },
    hero: {
      ariaLabel: "Hero section",
      eyebrow: "Computer vision • Advanced analytics",
      titleTop: "Transforming vision",
      titleBottom: "data into action",
      subtitle: "Built in Saudi Arabia to power enterprise computer-vision AI.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View our projects",
      stats: [
        { value: "+12", label: "Instrumented lines" },
        { value: "99.2%", label: "Sorting accuracy" },
        { value: "24/7", label: "Ops support" },
      ],
    },
    about: {
      title: "About Naqa",
      body:
        "Naqa is a Saudi computer-vision company building production-ready AI that understands the palm and dates ecosystem.",
      mouseAlt: "Interactive mouse",
    },
    services: {
      ariaLabel: "Services section",
      badge: "Computer-vision solutions",
      heading: "Smart services",
      subtitle:
        "From data advisory to factory deployment, we deliver scalable and dependable AI for critical operations.",
      categories: {
        sorting: {
          heading: "Sorting & grading",
          items: [
            { title: "Date grading", desc: "AI system that scores dates by type and quality." },
            { title: "Palm type detection", desc: "Automatic variety recognition using deep learning." },
            { title: "Quality monitoring", desc: "Automated checks that keep quality consistent." },
          ],
        },
        inspection: {
          heading: "Inspection & QA",
          items: [
            { title: "Defect detection", desc: "Vision-based inspection for product quality." },
            { title: "Automated scanning", desc: "High-speed imaging for precise analysis." },
            { title: "Compliance verification", desc: "Ensure every batch meets the right standards." },
          ],
        },
        security: {
          heading: "Security analytics",
          items: [
            { title: "Crowd analytics", desc: "Live tracking of movement and density." },
            { title: "Heatmaps", desc: "Visual insights that improve flow and layouts." },
            { title: "Smart city integration", desc: "AI monitoring for airports, hubs, and campuses." },
          ],
        },
      },
    },
    machine: {
      title: "Discover the Naqa S8 date sorter",
      body: "An intelligent sorter with precise grading, automated lanes, and faster throughput.",
      detailCta: "See details",
      tryCta: "Request a trial",
      imageAlt: "Naqa S8 date sorting machine",
    },
    projects: {
      title: "Projects",
      description: "Operational playbooks for dates and palm analysis.",
      carouselAria: "Naqa projects",
      slideLabel: "Slide {current} of {total}",
      dotLabel: "Go to slide {index}",
      navPrev: "Back to previous project",
      navNext: "Go to next project",
      openCta: "Open project",
      items: {
        "auto-service": {
          title: "Auto-Service — Car Service Management",
          description:
            "A fully integrated AI-powered digital system that helps businesses grow their profits and monitor their operations.",
          imageAlt: "Preview of the Auto-Service app",
        },
        "date-ai": {
          title: "AI web app for date classification",
          description: "Instantly recognizes date varieties from any snapshot.",
          imageAlt: "Preview of the date classifier app",
        },
        "machine-ai": {
          title: "Naqa S8 machine console",
          description: "Supervises every sorting lane with live KPIs and diagnostics.",
          imageAlt: "Screen showing the Naqa S8 machine console",
        },
        "palm-ai": {
          title: "Palm trunk web classifier",
          description: "Identifies trunk categories with over 90% confidence.",
          imageAlt: "Preview of the palm trunk classifier",
        },
      },
    },
    impact: {
      title: "Our impact in numbers",
      description: "Naqa’s computer-vision systems boost efficiency, cut waste, and sharpen quality control with measurable gains.",
      stats: [
        {
          value: "70%",
          title: "Reduction in manual labor",
          desc: "Automated inspection replaces repetitive tasks with smart vision.",
        },
        {
          value: "90%",
          title: "Faster QA cycles",
          desc: "Instant anomaly detection keeps quality loops short and reliable.",
        },
        {
          value: "98%",
          title: "Sorting accuracy",
          desc: "Models trained on industrial data keep every batch precise.",
        },
        {
          value: "60%",
          title: "Operational efficiency",
          desc: "AI-driven insights trim waste and raise throughput.",
        },
        {
          value: "24/7",
          title: "Always-on runtime",
          desc: "Autonomous systems stay online with minimal operator fatigue.",
        },
      ],
      footnote: "Figures are indicative and based on real-world project outcomes and estimates.",
    },
    contact: {
      title: "Contact us",
      description: "We help you scope, build, and deploy AI solutions from concept to production.",
      buttonLabel: "Go to contact page",
      buttonAria: "Navigate to the contact page",
      note: "We’re always happy to connect.",
    },
    footer: {
      ariaLabel: "Footer",
      quickLinksLabel: "Quick Links",
      navAria: "Footer navigation",
      tagline: "We turn visual data into practical solutions that make a real impact.",
      followLabel: "Follow us",
      quickLinks: [
        { href: "#top", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
        { href: "#privacy", label: "Privacy" },
        { href: "#terms", label: "Terms" },
      ],
      social: {
        linkedin: "LinkedIn",
        twitter: "Twitter",
        github: "GitHub",
      },
      brandAlt: "نقاة",
      rights: "All rights reserved",
      compliance: {
        heading: "REGISTERED & COMPLIANT",
        companyName: "Nighat Limited Company",
        crLabel: "CR",
        unifiedLabel: "Unified No.",
        crNumber: "1010983081",
        unifiedNumber: "7038320771",
        address:
          "4309 King Abdullah Ibn Abdulaziz Saud Branch, Al Raed Dist. 8778, Riyadh 12354, Kingdom of Saudi Arabia",
        logos: {
          ndgp: "National Data Governance Platform",
          sdaia: "SDAIA",
          zatca: "Zakat, Tax and Customs Authority",
          sbc: "Saudi Business Center",
        },
      },
    },
    partners: {
      title: "Trusted by leading companies & organizations",
      ariaLabel: "Our partners",
    },
    langToggle: "AR",
  },
} as const;

type Lang = keyof typeof messages;
type Messages = (typeof messages)[Lang];

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Messages } | null>(null);

export function useI18n() {
  const value = useContext(I18nCtx);
  if (!value) throw new Error("useI18n must be used within I18nProvider");
  return value;
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("naqa-lang") : null;
    return saved === "en" ? "en" : "ar";
  });

  const t = useMemo(() => messages[lang], [lang]);

  const setLang = (value: Lang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("naqa-lang", value);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("dir", t.dir);
    root.lang = lang;

    const description =
      lang === "ar"
        ? "حلول رؤية حاسوبية وفرز ذكي وتمكين تشغيلي لسلسلة قيمة النخيل والتمور."
        : "Computer vision, smart grading, and real-time ops for the palm & dates value chain.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.append(meta);
    }
    meta.content = description;
  }, [lang, t.dir]);


  const ctxValue = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nCtx.Provider value={ctxValue}>{children}</I18nCtx.Provider>;
}
