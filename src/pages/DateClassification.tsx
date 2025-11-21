// src/pages/DateClassification.tsx

import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";

import NavbarAurora from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import datesAppImg from "@/assets/dates-app.png";

export default function DateClassificationPage() {
    const { lang } = useI18n();
    const dir = lang === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.title =
            lang === "ar"
                ? "نقاة | منصة تصنيف التمور"
                : "Nighat | Date Classification";
    }, [lang]);

    return (
        <main id="top" dir={dir} lang={lang}>
            <NavbarAurora />
            <HeroDateClassification />
            <ProjectOverviewSection />
            <ProjectTechSection />
            <ProjectImpactSection />
            <Footer />
        </main>
    );
}

/* ---------------------- Hero Section ---------------------- */

function HeroDateClassification() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

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
                    {/* صورة التطبيق — ريسبونسيف أكثر */}
                    <motion.div
                        {...fadeInUp(0.12)}
                        className="order-2 md:order-1 flex space-y15 justify-center  "
                    >
                        <div className="relative">
                            <img
                                src={datesAppImg}
                                alt={
                                    isArabic
                                        ? "لقطة شاشة لمنصة تصنيف التمور"
                                        : "Screenshot of the Date Classification web app"
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
                                ? "منصة ويب لتصنيف التمور بالذكاء الاصطناعي"
                                : "AI web app for date classification"}
                        </span>

                        <h1
                            className="
                                text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem]
                                font-extrabold leading-tight tracking-tight text-[#38105F]
                            "
                        >
                            {isArabic
                                ? "حدّد نوع التمرة خلال ثوانٍ!"
                                : "Identify the date variety in seconds!"}
                        </h1>

                        <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                            {isArabic
                                ? "نموذج رؤية حاسوبية مخصص للتمور السعودية، يتعرّف على الصنف من صورة واحدة فقط، وجاهز للاستخدام."
                                : "A computer vision model tailored for Saudi date varieties that identifies the variety from a single image, ready for use in labs, grading lines, and digital projects."}
                        </p>

                        <div className="pt-3">
                            <motion.a
                                href="http://157.175.31.166/"
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
                                {isArabic ? "جرّب الآن" : "Try it now"  }
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
                            ? "عن منصة تصنيف التمور"
                            : "About the AI Date Classifier"}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/75">
                        {isArabic
                            ? "نقاة تطوّر أول تطبيق ويب بالذكاء الاصطناعي يتيح للمستخدمين التعرف على أي صنف تمر تقريبًا بمجرد التقاط صورة بالجوال. مع وجود أكثر من ٤٠٠ صنف تمر في السعودية، أصبحت دقّة التعرف تحديًا للمزارعين، التجّار، والمستهلكين — هذه المنصة تجعل التصنيف فوريًا وسهل الاستخدام."
                            : "Nighat is building one of the first AI-powered web applications that lets users identify almost any date variety simply by capturing a photo. With over 400 date varieties in Saudi Arabia, accurate identification has long been a challenge for farmers, traders, and consumers — this web app makes it instant and accessible."}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                        {isArabic
                            ? "يعتمد النظام على نماذج رؤية حاسوبية مدرّبة على مئات الآلاف من الصور المعلّمة لأصناف التمور، ليقدّم تصنيفًا جاهزًا في الرحلات الرقمية الحالية."
                            : "The model is trained on hundreds of thousands of labeled date images, providing ready-to-use classifications that can plug directly into existing digital journeys."}
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
                title: "تحليل بصري عميق",
                text: "النظام يلتقط الفروقات الدقيقة في اللون، الشكل، والملمس ليقدّم قراءة أدق لصنف التمر.",
            },
            {
                title: "تحمّل ظروف الإضاءة المختلفة",
                text: "مدرّب على صور ملتقطة في بيئات عمل حقيقية، مما يحسّن الدقّة تحت إضاءات وخلفيات متعددة.",
            },
            {
                title: "نتيجة فورية",
                text: "يعرض الصنف مع الدرجة المتوقعة من بين العديد من الدرجات التي يراها.",
            },
        ]
        : [
            {
                title: "Deep visual understanding",
                text: "The system captures subtle variations in color, shape, and texture to deliver more accurate variety predictions.",
            },
            {
                title: "Robust to real-world lighting",
                text: "Trained on real-world images so it remains reliable across different lighting conditions and backgrounds.",
            },
            {
                title: "Instant, actionable output",
                text: "Returns the predicted variety and confidence, ready to plug into lab systems, QA workflows, or sorting lines.",
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
                        {isArabic ? "كيف يعمل؟" : "How does it work?"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "واجهة بسيطة فوق نموذج رؤية حاسوبية متقدّم، مصممة لتستخدم من مختلف الاعمار بدون الحاجة لخبرة في الذكاء الاصطناعي."
                            : "A simple interface on top of an advanced computer vision model, designed for QA teams, labs, and digital products—without requiring AI expertise."}
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

            {/* الغبار الأبيض بأسفل السكشن */}
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
            "تمكين المزارعين من هوية موثوقة للصنف والجودة.",
            "رفع ثقة المستهلك من خلال شفافية أعلى في الجودة والمصدر.",
            "تحسين كفاءة التجارة وسلاسل الإمداد عبر تصنيف موحّد.",
            "دعم رؤية السعودية 2030 من خلال رقمنة ذكاء القطاع الزراعي.",
        ]
        : [
            "Empowers farmers with trusted variety and quality identification.",
            "Builds consumer confidence through transparency and quality insight.",
            "Enhances trade efficiency and supply-chain traceability.",
            "Supports Saudi Vision 2030 by digitalizing agricultural intelligence.",
        ];

    return (
        <section className="relative bg-white py-20 md:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "أثر منصة تصنيف التمور" : "Impact of the Date Classifier"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "منصة التصنيف لا تقدّم مجرد نتيجة، بل تبني جسراً بين المزرعة، المستخدم، والتجارة الحديثة."
                            : "The classifier doesn’t just return a label; it connects farms, labs, and modern trade in a single, trusted workflow."}
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
