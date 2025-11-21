// src/pages/PalmClassification.tsx

import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";

import NavbarAurora from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import palmAppImg from "@/assets/palm-app.png";

export default function PalmClassificationPage() {
    const { lang } = useI18n();
    const dir = lang === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.title =
            lang === "ar"
                ? "نقاة | منصة تصنيف النخيل"
                : "Nighat | Palm Classification";
    }, [lang]);

    return (
        <main id="top" dir={dir} lang={lang}>
            <NavbarAurora />
            <HeroPalmClassification />
            <ProjectOverviewSection />
            <ProjectTechSection />
            <ProjectImpactSection />
            <Footer />
        </main>
    );
}

/* ---------------------- Hero Section ---------------------- */

function HeroPalmClassification() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";
    const palmAppUrl ="https://size-based-dates-web-app.vercel.app/";

    return (
        <section
            className="
                relative overflow-hidden
                bg-gradient-to-b from-[#fdfbff] via-[#f5eeff] to-[#eef2ff]
                min-h-screen
                flex items-center
                pt-24 pb-16 sm:pt-32 sm:pb-20
            "
        >
            {/* خلفيات الأورورا العامة للسكشن */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
            >
                <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#7A1CD1,transparent)] opacity-45 blur-3xl" />
                <div className="absolute top-0 right-[5%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,#38105F,transparent)] opacity-25 blur-3xl" />
                <div className="absolute bottom-[-10rem] left-[2%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,#2F7FF7,transparent)] opacity-30 blur-3xl" />
            </div>

            <div className="mx-auto flex w-full max-w-6xl lg:max-w-7xl items-center px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className={`
                        grid w-full items-center
                        gap-6
                        md:gap-8
                        lg:gap-10
                        ${isArabic
                            ? "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                            : "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
                        }
  `}
                >
                    {/* صورة التطبيق — عدّلي المسار حسب اسم الصورة الحقيقية عندك */}
                    <motion.div
                        {...fadeInUp(0.12)}
                        className="order-2 md:order-1 flex space-y15 justify-center  "

                    >
                        <div className="relative">
                            <img
                                src={palmAppImg}
                                alt={
                                    isArabic
                                        ? "لقطة شاشة لمنصة تصنيف النخيل"
                                        : "Screenshot of the Palm Classification web app"
                                }
                                className="
                                    block
                                    h-auto
                                    w-[220px]
                                    sm:w-[240px]
                                    md:w-[260px]
                                    lg:w-[280px]
                                    xl:w-[300px]
                                    max-w-full
                                    rounded-[3rem]
                                "
                                draggable={false}
                            />
                        </div>
                    </motion.div>

                    {/* النص */}
                    <div className="order-1 space-y-5 md:order-2 text-center md:text-start">
                        {/* البِل الزجاجية */}
                        <span
                            className="
                                inline-flex items-center gap-2
                                rounded-full border border-white/70
                                bg-white/35
                                px-6 py-2
                                text-xs sm:text-sm font-semibold text-[#38105F]
                                shadow-[0_18px_45px_-28px_rgba(56,16,95,0.8)]
                                backdrop-blur-xl
                            "
                        >
                            {isArabic
                                ? "منصة ويب لتصنيف النخيل بالذكاء الاصطناعي"
                                : "AI web app for palm classification"}
                        </span>

                        <h1
                            className="
                                text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem]
                                font-extrabold leading-tight tracking-tight text-[#38105F]
                            "
                        >
                            {isArabic
                                ? "تعرّف على فئة النخلة من صورة واحدة."
                                : "Know your palm category from a single snapshot."}
                        </h1>

                        <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                            {isArabic
                                ? "تطبيق ويب يساعد ملاك ومزارعي النخيل على تصنيف فئات النخيل بدقّة عالية، حتى خارج موسم الحصاد أو في المراحل المبكرة من النمو."
                                : "A web application that helps farmers and palm owners classify palm categories with high accuracy, even outside harvest season or at early growth stages."}
                        </p>

                        <div className="pt-3">
                            <motion.a
                                href={palmAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    bg-gradient-to-r from-[#7A1CD1] to-[#38105F]
                                    px-10 py-3.5
                                    text-sm sm:text-base font-semibold text-white
                                    shadow-[0_22px_60px_-32px_rgba(56,16,95,0.9)]
                                    backdrop-blur
                                    transition
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-[#7A1CD1]
                                "
                            >
                                {isArabic ? "جرب الأن" : "Talk to us for access"}
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* الغبار / الفيدر الأبيض بين الهيرو والسكشن اللي بعده */}
            <div
                aria-hidden
                className="
                    pointer-events-none
                    absolute bottom-0 left-0 w-full h-24
                    bg-gradient-to-b from-transparent to-white
                "
            />
        </section>
    );
}

/* ---------------------- Overview Section ---------------------- */

function ProjectOverviewSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="space-y-4 text-center md:text-start"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic
                            ? "عن منصة تصنيف النخيل"
                            : "About the AI Palm Classifier"}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                        {isArabic
                            ? "غالبًا ما يواجه المزارعون صعوبة في تمييز فئات النخيل خارج موسم الحصاد أو عندما تكون الأشجار صغيرة، مما ينعكس على دقة التخطيط، استقرار الجودة، وربحية المزرعة."
                            : "Farmers often struggle to recognize palm categories outside harvest season or when trees are still young, which affects planning, quality consistency, and farm profitability."}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/75">
                        {isArabic
                            ? "لذلك تطوّر نقاة أول تطبيق ويب من نوعه لتصنيف النخيل بالذكاء الاصطناعي؛ أداة ذكية تساعد المزارعين وملاك النخيل على تحديد نوع نخيلهم فورًا عبر واجهة بسيطة وسهلة."
                            : "Nighat is developing a first-of-its-kind AI-powered Palm Classifier web application — a smart tool that helps farmers and palm owners instantly identify the category of their palm trees through a simple, accessible interface."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------------- Tech Section ---------------------- */

function ProjectTechSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const items = isArabic
        ? [
            {
                title: "تدريب على بيانات حقلية",
                text: "النموذج مدرّب على آلاف الصور المعلّمة لأشجار النخيل عبر ست فئات ومراحل نمو مختلفة.",
            },
            {
                title: "جاهز لبيئات المزارع",
                text: "أُخذت الصور تحت ظروف إضاءة وخلفيات متعددة، مما يجعل النموذج أكثر ثباتًا في الواقع.",
            },
            {
                title: "تصنيف بدقة تتجاوز 90٪",
                text: "المستخدم يرفع صورة للنخلة، ويتلقى تصنيفًا فوريًا مع دقة تزيد عن 90٪ للاستخدام في التخطيط والإدارة.",
            },
        ]
        : [
            {
                title: "Field-grade training data",
                text: "The model is trained on thousands of labeled palm images across six categories and multiple growth stages.",
            },
            {
                title: "Robust to farm conditions",
                text: "Images collected under varied lighting and backgrounds make the classifier reliable in real-world environments.",
            },
            {
                title: "90%+ classification accuracy",
                text: "Users upload a palm image and receive instant, high-confidence classification — supporting planning and farm management.",
            },
        ];

    return (
        <section className="relative bg-gradient-to-b from-white to-[#f7f2ff] py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "كيف تعمل؟" : "How does it work?"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "واجهة استخدام بسيطة فوق نموذج رؤية حاسوبية متخصّص في النخيل؛ ما عليك إلا رفع صورة واحدة لتحصل على تصنيف فوري قابل للاعتماد."
                            : "A simple interface on top of a palm-specialized computer vision model — upload a single image to receive instant, reliable classification."}
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            {...fadeInUp(0.12)}
                            className="
                                rounded-3xl border border-[#EFE4FF]
                                bg-white/90 backdrop-blur
                                px-5 py-6 text-center
                                shadow-[0_18px_55px_-35px_rgba(56,16,95,0.45)]
                            "
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-[#38105F]">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-xs sm:text-sm text-black/70 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* الغبار الأبيض أسفل السكشن */}
            <div
                aria-hidden
                className="
                    pointer-events-none
                    absolute bottom-0 left-0 w-full h-24
                    bg-gradient-to-b from-transparent to-white
                "
            />
        </section>
    );
}

/* ---------------------- Impact Section ---------------------- */

function ProjectImpactSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const items = isArabic
        ? [
            "تمكين المزارعين من تخطيط مبكر وإدارة أفضل للمزارع.",
            "رفع ثقة السوق في المنتج وزيادة قيمة النخلة والثمار.",
            "دعم التحوّل الرقمي الزراعي تماشيًا مع رؤية السعودية 2030.",
            "منصة متاحة للمنتجين الكبار وصغار المزارعين على حد سواء.",
        ]
        : [
            "Empowers farmers with early planning and better farm management.",
            "Enhances market confidence and increases product and tree value.",
            "Supports Vision 2030 by accelerating agricultural digital transformation.",
            "Accessible to everyone — from large producers to small farms.",
        ];

    return (
        <section className="relative bg-white py-20 md:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "أثر منصة تصنيف النخيل" : "Impact of the Palm Classifier"}
                    </h2>
                    <p className="text-sm sm:text-base textブラック/70">
                        {isArabic
                            ? "منصة تساعد في بناء قرارات أوضح حول غرس النخيل، إدارة الأصول، وتسويق المنتجات بثقة أعلى."
                            : "A platform that supports clearer decisions around planting, asset management, and confident market positioning."}
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInUp(0.12)}
                    className="mt-10 grid gap-5 sm:grid-cols-2"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item}
                            className="
                                rounded-3xl border border-[#F0E9FF]
                                bg-white/90 backdrop-blur
                                px-5 py-4
                                shadow-[0_14px_40px_-26px_rgba(56,16,95,0.45)]
                                flex items-start gap-3
                            "
                        >
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7A1CD1]" />
                            <p className="text-sm sm:text-base text-[#38105F] leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
