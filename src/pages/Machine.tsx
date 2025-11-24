// src/pages/Machine.tsx

"use client";

import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { useI18n } from "@/i18n/I18nProvider";
import NavbarGlass from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/motion";

// صورة الآلة من الأصول
import machineImg from "@/assets/machine.svg";

// صور درجات التمور
import saqiImg from "@/assets/dates/saqi.png";
import khlasImg from "@/assets/dates/khlas.png";
import sukriImg from "@/assets/dates/sukri.png";

// صور خطوات العمل (SVG)
import flowStep1 from "@/assets/flow/step1.svg";
import flowStep2 from "@/assets/flow/step2.svg";
import flowStep3 from "@/assets/flow/step3.svg";

import machineVideo from "@/assets/videos/machine-flow-demo.mp4";


export default function MachinePage() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";
    const dir = isRTL ? "rtl" : "ltr";

    useEffect(() => {
        document.title = isRTL
            ? "نقاة | آلة S8 لفرز التمور"
            : "S8 | AI Date Sorting Machine";
    }, [isRTL]);

    return (
        <main
            id="top"
            dir={dir}
            lang={lang}
            className="
                bg-white
                bg-[radial-gradient(circle_at_top,_rgba(154,80,255,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(42,171,238,0.14),_transparent_55%)]
            "
        >
            <NavbarGlass />

            <MachineHeroSection />
            <MachineVideoSection />
            <MachineGradesSection />
            <MachineBannerSection />
            <MachineFlowSection />
            <MachineInfoSection />
            <MachinePricingSection />

            <Footer />
        </main>
    );
}

/* ---------------- HERO SECTION ---------------- */

function MachineHeroSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const rowDir = isRTL ? "lg:flex-row-reverse" : "lg:flex-row";
    const textAlignDesktop = isRTL ? "lg:text-right" : "lg:text-left";

    return (
        <section
            className="
                relative isolate w-full
                flex items-center
                px-4 sm:px-6 lg:px-10 xl:px-16
                pt-24 sm:pt-28 lg:pt-32
                pb-14 lg:pb-20
                min-h-[calc(100vh-96px)]   /* الهيرو تقريباً كامل الشاشة تحت النـاف */
            "
            aria-labelledby="machine-hero-title"
        >
            {/* هالات خلفية ناعمة للهيرو */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-72 sm:h-80 blur-3xl opacity-80"
                style={{
                    background:
                        "radial-gradient(circle at 20% 0%, rgba(154,80,255,0.40), transparent 65%), radial-gradient(circle at 85% 35%, rgba(60,190,255,0.32), transparent 60%)",
                }}
            />

            <div className="mx-auto w-full max-w-6xl">
                <motion.div
                    {...fadeUp(0.05)}
                    className={`
                        flex flex-col ${rowDir}
                        items-center
                        gap-10 lg:gap-16
                    `}
                >
                    {/* النص + الإحصائيات + الأزرار */}
                    <div
                        className={`
                            flex-1
                            space-y-5
                            text-center
                            ${textAlignDesktop}
                        `}
                    >
                        {/* البيل الزجاجي */}
                        <div
                            className="
                                inline-flex items-center gap-2
                                px-3 py-1.5 rounded-full
                                bg-white/85 backdrop-blur-xl
                                border border-white/70
                                shadow-[0_10px_28px_-20px_rgba(56,16,95,0.28)]
                            "
                        >
                            <p className="text-[9px] sm:text-[11px] font-medium tracking-wide text-[#7A1CD1]">
                                {isRTL ? "مستقبل فرز التمور" : "The future of date sorting"}
                            </p>
                        </div>

                        <h1
                            id="machine-hero-title"
                            className="
                                font-extrabold tracking-tight
                                text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem]
                                text-[#38105F] leading-tight
                            "
                        >
                            {isRTL ? (
                                <>
                                    <span className="text-[#7A1CD1] font-black">S8</span>
                                    <span> ، آلة فرز التمور بالذكاء الاصطناعي</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-[#7A1CD1] font-black">S8</span>
                                    <span>, AI-powered date sorting machine</span>
                                </>
                            )}
                        </h1>

                        <p className="mx-auto text-sm sm:text-base md:text-[15px] text-slate-600 leading-relaxed max-w-xl">
                            {isRTL
                                ? "نحوّل فرز التمور من عمل يدوي مرهق إلى نظام ذكي يفرز حسب الدرجة والجودة تلقائياً، مع دقّة تتجاوز 95% وتسليم نتائج قابلة للقياس."
                                : "We transform manual, exhausting date sorting into an intelligent system that classifies by grade and quality with over 95% accuracy and measurable results."}
                        </p>

                        {/* الإحصائيات */}
                        <div className="mx-auto mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                            <StatPill
                                label={isRTL ? "معدل الإنتاج" : "Throughput"}
                                value={isRTL ? "600 - 1000 كجم/ساعة" : "600 - 1000 Kg/hr"}
                            />
                            <StatPill
                                label={isRTL ? "دقّة الفرز" : "Accuracy"}
                                value="≈ 98%"
                            />
                            <StatPill
                                label={isRTL ? "السعر" : "Price"}
                                value={isRTL ? "0.5 ريال/كجم" : "0.5 SAR/Kg"}
                            />
                        </div>

                        {/* الأزرار */}
                        <div
                            className={`
                                mt-5 flex flex-wrap items-center gap-3
                                justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"}
                            `}
                        >
                            <PrimaryButton href="/contact">
                                {isRTL ? "اطلب الآن" : "Order now"}
                            </PrimaryButton>

                            <a
                                href="#machine-video"
                                className="
                                    inline-flex items-center gap-2
                                    text-xs sm:text-sm font-semibold
                                    text-[#7A1CD1] hover:text-[#38105F]
                                    underline-offset-2 hover:underline
                                "
                            >
                                {isRTL ? "مشاهدة فيديو الآلة" : "Watch the machine video"}
                            </a>
                        </div>
                    </div>

                    {/* صورة الآلة — مكبّرة أكثر */}
                    <motion.div
                        {...fadeUp(0.12)}
                        className="
                            flex-1 w-full lg:flex-[1.1]
                            flex justify-center
                        "
                    >
                        <img
                            src={machineImg}
                            alt={isRTL ? "آلة S8 لفرز التمور" : "S8 date sorting machine"}
                            className="
                                w-full
                                max-w-[340px]
                                sm:max-w-[480px]
                                md:max-w-[600px]
                                lg:max-w-[700px]
                                xl:max-w-[780px]
                                object-contain
                                drop-shadow-[0_24px_70px_rgba(56,16,95,0.35)]
                            "
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------- VIDEO SECTION ---------------- */

function MachineVideoSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const thumbSrc = machineImg; // غيّريها لاحقاً لو عندك thumbnail حقيقي

    const handlePlayClick = () => {
        setIsPlaying(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(() => { });
            }
        }, 0);
    };

    return (
        <section
            id="machine-video"
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                py-16 md:py-20 lg:py-24
            "
            aria-labelledby="machine-video-title"
        >
            <div className="mx-auto w-full max-w-5xl">
                <motion.div {...fadeUp(0.05)} className="mb-4 text-center">
                    <h2
                        id="machine-video-title"
                        className="font-extrabold text-2xl md:text-3xl text-[#38105F] mb-2"
                    >
                        {isRTL ? "شاهد الآلة أثناء العمل" : "See the machine in action"}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {isRTL
                            ? "مقطع يوضّح مسار التمور على السير، طريقة التقاط الصور، وكيف يتم توجيه كل تمرة إلى المخرج الصحيح."
                            : "A short demo showing how dates move on the conveyor, how images are captured, and how each date is sent to the right outlet."}
                    </p>
                </motion.div>

                <motion.div
                    {...fadeUp(0.08)}
                    className="
                        rounded-[28px] overflow-hidden
                        backdrop-blur-xl bg-white/90 border border-white/90
                        shadow-[0_20px_60px_-30px_rgba(56,16,95,0.45)]
                        p-3 sm:p-4
                    "
                >
                    {!isPlaying ? (
                        <button
                            type="button"
                            onClick={handlePlayClick}
                            className="relative w-full aspect-video rounded-[24px] overflow-hidden group"
                        >
                            <img
                                src={thumbSrc}
                                alt={isRTL ? "صورة توضيحية للآلة" : "Machine thumbnail"}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="
                                        w-16 h-16 sm:w-20 sm:h-20 rounded-full
                                        bg-gradient-to-l from-[#7A1CD1] to-[#38105F]
                                        flex items-center justify-center
                                        shadow-[0_14px_30px_-12px_rgba(56,16,95,0.9)]
                                        group-hover:scale-105 transition-transform
                                    "
                                >
                                    <div className="ml-1 border-l-[14px] border-l-white border-y-[9px] border-y-transparent" />
                                </div>
                            </div>
                        </button>
                    ) : (
                        <div className="w-full aspect-video rounded-[24px] overflow-hidden">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-contain bg-black"
                                    src={machineVideo}
                                poster={thumbSrc}
                                controls
                                playsInline
                            />
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------- GRADES SECTION ---------------- */

function MachineGradesSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const grades = [
        { id: "saqi", titleAr: "صقعي", titleEn: "Saqi", image: saqiImg },
        { id: "khlas", titleAr: "خلاص", titleEn: "Khlas", image: khlasImg },
        { id: "sukri", titleAr: "سكري", titleEn: "Sukri", image: sukriImg },
    ];

    return (
        <section
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                py-16 md:py-20 lg:py-24
            "
            aria-labelledby="machine-grades-title"
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div {...fadeUp(0.05)} className="mb-6 text-center">
                    <h2
                        id="machine-grades-title"
                        className="font-extrabold text-2xl md:text-3xl text-[#38105F] mb-2"
                    >
                        {isRTL
                            ? "درجات التمور التي يمكن للآلة تمييزها"
                            : "Date grades the machine can identify"}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {isRTL
                            ? "صور توضح درجات بعض أصناف التمور التي يمكن للآلة التفريق بينها بدقة عالية."
                            : "Sample grade charts for some date varieties that the machine can distinguish with high accuracy."}
                    </p>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-3">
                    {grades.map((g, i) => (
                        <motion.article
                            key={g.id}
                            {...fadeUp(0.08 + i * 0.04)}
                            className="
                                rounded-[24px] overflow-hidden
                                backdrop-blur-xl bg-white/80 border border-white/90
                                shadow-[0_18px_40px_-26px_rgba(56,16,95,0.45)]
                                px-4 sm:px-5 py-6
                            "
                        >
                            <h3 className="text-lg sm:text-xl font-extrabold text-[#6B21A8] mb-4 text-center">
                                {isRTL ? g.titleAr : g.titleEn}
                            </h3>

                            <div className="mb-1 flex items-center justify-center">
                                <img
                                    src={g.image}
                                    alt={
                                        isRTL
                                            ? `درجات تمر ${g.titleAr}`
                                            : `${g.titleEn} date grades`
                                    }
                                    loading="lazy"
                                    className="w-40 sm:w-48 md:w-56 h-auto object-contain"
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div
                    className="
                        mt-10
                        max-w-3xl mx-auto
                        px-4 py-3
                        rounded-xl
                        text-center
                        bg-[#EDE2F7]/60
                        backdrop-blur-sm
                        border border-[#D4C2E9]/70
                        shadow-sm
                    "
                >
                    <p className="text-sm sm:text-base text-[#4B1F75] font-semibold leading-relaxed">
                        {isRTL
                            ? "مكن تدريب النموذج على الدرجات الخاصة بكم بناءً على احتياجاتكم."
                            : "The model can be trained on your factory’s own grading system based on your requirements."}
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ---------------- BANNER SECTION ---------------- */

function MachineBannerSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    return (
        <section
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                py-16 md:py-20
            "
        >
            <div className="mx-auto w-full max-w-5xl">
                <motion.div
                    {...fadeUp(0.05)}
                    className="
                        rounded-[999px]
                        bg-white/90 backdrop-blur-xl
                        border border-[#E4D9F7]
                        shadow-[0_18px_50px_-32px_rgba(56,16,95,0.45)]
                        px-6 sm:px-10 py-5
                        flex flex-col sm:flex-row items-center gap-4
                    "
                >
                    {/* النص */}
                    <div
                        className={`
                            flex-1
                            text-center
                            ${isRTL ? "sm:text-right" : "sm:text-left"}
                        `}
                    >
                        <p className="text-xs sm:text-sm font-medium text-[#7A1CD1] mb-1.5">
                            {isRTL
                                ? "جاهز للانتقال للخطوة التالية؟"
                                : "Ready for the next step?"}
                        </p>

                        <p className="text-base sm:text-lg md:text-xl font-extrabold text-[#4B1F75] leading-snug">
                            {isRTL
                                ? "ودّع الفرز اليدوي وابدأ باستخدام آلة S8 لفرز التمور."
                                : "Say goodbye to manual sorting and start using the S8 date sorting machine."}
                        </p>
                    </div>

                    {/* زر تواصل معنا */}
                    <div
                        className={`
                            shrink-0
                            w-full sm:w-auto
                            flex justify-center
                            ${isRTL ? "sm:justify-start" : "sm:justify-end"}
                        `}
                    >
                        <PrimaryButton href="/contact">
                            {isRTL ? "تواصل معنا" : "Contact us"}
                        </PrimaryButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------- FLOW SECTION ---------------- */

function MachineFlowSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const steps = [
        {
            step: "1",
            titleAr: "تغذية التمور على السير",
            titleEn: "Supply the raw dates",
            bodyAr:
                "توضع التمور على السير الناقل، ويتم تشغيل الآلة من خلال لوحة تحكم بسيطة.",
            bodyEn:
                "Dates are placed on the conveyor line and the machine is operated from a simple control panel.",
            icon: flowStep1,
        },
        {
            step: "2",
            titleAr: "فرز التمور",
            titleEn: "Date sorting",
            bodyAr:
                "الكاميرات تلتقط صورة لكل تمرة وتحدد نوعها ودرجة جودتها ثم توجّهها للمخرج المناسب.",
            bodyEn:
                "High-speed cameras capture each date, identify its type and grade, then send it to the right outlet.",
            icon: flowStep2,
        },
        {
            step: "3",
            titleAr: "إدارة النتائج",
            titleEn: "Management",
            bodyAr:
                "راقب جميع خطوات الفرز ونتائج الخطوط من شاشة واحدة مع إمكانية استخراج تقارير جاهزة.",
            bodyEn:
                "Monitor all sorting steps and line results from a single screen, with exportable reports.",
            icon: flowStep3,
        },
    ];

    return (
        <section
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                py-16 md:py-20 lg:py-24
            "
            aria-labelledby="machine-flow-title"
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div {...fadeUp(0.05)} className="mb-10 text-center">
                    <h2
                        id="machine-flow-title"
                        className="font-extrabold text-2xl md:text-3xl text-[#38105F]"
                    >
                        {isRTL ? "كيف تعمل الآلة؟" : "How does the machine work?"}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((s, i) => (
                        <motion.article
                            key={s.step}
                            {...fadeUp(0.08 + i * 0.05)}
                            className="
                                relative rounded-[28px]
                                bg-white/90 backdrop-blur-xl
                                border border-[#EAD9FF]
                                shadow-[0_20px_50px_-25px_rgba(56,16,95,0.25)]
                                px-6 py-8
                                flex flex-col items-center text-center
                            "
                        >
                            <div
                                className="
                                    absolute -top-5
                                    w-12 h-12 rounded-full
                                    bg-white border border-[#E5D4FF]
                                    flex items-center justify-center
                                    font-semibold text-[#7A1CD1]
                                    text-xl md:text-2xl shadow-md
                                "
                                style={{ [isRTL ? "right" : "left"]: "1.5rem" }}
                            >
                                {s.step}
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-lg sm:text-xl font-extrabold text-[#38105F] mb-3">
                                    {isRTL ? s.titleAr : s.titleEn}
                                </h3>

                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {isRTL ? s.bodyAr : s.bodyEn}
                                </p>
                            </div>

                            <img
                                src={s.icon}
                                alt={isRTL ? s.titleAr : s.titleEn}
                                className="w-32 sm:w-36 md:w-40 h-auto mt-auto"
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- INFO SECTION ---------------- */

function MachineInfoSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const features = [
        {
            titleAr: "تقليل الاعتماد على العمالة",
            titleEn: "Reduce manual labor",
            bodyAr:
                "آلة واحدة يمكن أن تغطي عمل فريق فرز كامل، مع جودة ثابتة طوال اليوم وتقليل الأخطاء البشرية.",
            bodyEn:
                "One machine can replace an entire sorting team, keeping quality consistent throughout the day and reducing human error.",
        },
        {
            titleAr: "جودة فرز مستقرة",
            titleEn: "Consistent quality",
            bodyAr:
                "النظام يعتمد على نموذج رؤية حاسوبية لا يتعب ولا يتأثر بتغيّر المناوبات أو ضغط المواسم.",
            bodyEn:
                "Computer vision models do not get tired and are not affected by shifts or seasonal pressure.",
        },
        {
            titleAr: "تسعير واضح ومباشر",
            titleEn: "Clear, simple pricing",
            bodyAr:
                "تدفع على الكمية التي يتم فرزها فقط، بدون تعقيد في التراخيص أو تكاليف خفية.",
            bodyEn:
                "You pay for the quantity actually processed – no hidden licensing or unexpected add-ons.",
        },
    ];

    return (
        <section
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                pb-16 md:pb-20
            "
            aria-labelledby="machine-info-title"
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div {...fadeUp(0.05)} className="mb-6">
                    <h2
                        id="machine-info-title"
                        className="font-extrabold text-2xl md:text-3xl text-[#38105F] mb-2"
                    >
                        {isRTL ? "لماذا هذه الآلة؟" : "Why this machine?"}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                        {isRTL
                            ? "الآلة مصممة خصيصاً لبيئة مصانع ومزارع التمور؛ من السرعة، إلى الدقّة، إلى نموذج التسعير المبني على الكمية."
                            : "The machine is designed specifically for date factories and farms – from speed and accuracy to a quantity-based pricing model."}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.08 + i * 0.04)}
                            className="
                                rounded-[22px] overflow-hidden
                                backdrop-blur-xl bg-white/80 border border-white/90
                                shadow-[0_10px_28px_-20px_rgba(56,16,95,0.32)]
                                px-5 py-6
                            "
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-[#38105F] mb-2.5">
                                {isRTL ? f.titleAr : f.titleEn}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {isRTL ? f.bodyAr : f.bodyEn}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- DETAILS / CONTACT SECTION ---------------- */

function MachinePricingSection() {
    const { lang } = useI18n();
    const isRTL = lang === "ar";

    const titleAlign = isRTL
        ? "text-center md:text-right"
        : "text-center md:text-left";

    return (
        <section
            className="
                relative isolate w-full
                px-4 sm:px-6 lg:px-10 xl:px-16
                pb-12 md:pb-16
                ios-safe-bottom
            "
            aria-labelledby="machine-details-title"
        >
            <div className="mx-auto w-full max-w-6xl">
                <motion.div
                    {...fadeUp(0.05)}
                    className="
                        rounded-[26px] overflow-hidden
                        backdrop-blur-xl bg-gradient-to-l from-[#7A1CD1]/10 via-white to-[#2AABEE]/10
                        border border-white/80 shadow-[0_14px_40px_-20px_rgba(56,16,95,0.35)]
                        px-6 sm:px-10 py-8 sm:py-10
                        flex flex-col md:flex-row items-center justify-between gap-6
                    "
                >
                    {/* النص */}
                    <div className={`flex-1 ${titleAlign}`}>
                        <h2
                            id="machine-details-title"
                            className="font-extrabold text-2xl md:text-3xl text-[#38105F] mb-2"
                        >
                            {isRTL
                                ? "تحتاج تفاصيل أكثر عن الآلة؟"
                                : "Need more details about the machine?"}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                            {isRTL
                                ? "إذا كنت ترغب بمعرفة طريقة التركيب، المتطلبات التشغيلية، التوافق مع خطوط الفرز الحالية، أو أي تفاصيل فنية إضافية — تواصل معنا وسنوضح لك كل شيء بشكل مختصر وواضح."
                                : "If you want installation requirements, operational details, line compatibility info, or any additional technical specifications — contact us and we’ll walk you through everything clearly."}
                        </p>
                    </div>

                    {/* زر تواصل معنا */}
                    <div
                        className={`
                            w-full md:w-auto
                            flex justify-center
                            ${isRTL ? "md:justify-start md:ml-6" : "md:justify-end md:mr-6"}
                        `}
                    >
                        <PrimaryButton href="/contact">
                            {isRTL ? "تواصل معنا" : "Contact us"}
                        </PrimaryButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


/* ---------------- UI SUB COMPONENTS ---------------- */

function PrimaryButton({
    children,
    href,
}: {
    children: ReactNode;
    href?: string;
}) {
    const baseClasses = [
        "inline-flex items-center justify-center",
        "px-6 sm:px-7 py-2.5 rounded-full",
        "bg-gradient-to-l from-[#7A1CD1] to-[#38105F]",
        "text-white text-xs sm:text-sm font-semibold",
        "shadow-[0_14px_30px_-18px_rgba(56,16,95,0.9)]",
        "hover:shadow-[0_18px_40px_-20px_rgba(56,16,95,0.95)]",
        "transition-shadow",
    ].join(" ");

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClasses}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97, y: 0 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type="button"
            className={baseClasses}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97, y: 0 }}
        >
            {children}
        </motion.button>
    );
}

function StatPill({ label, value }: { label: string; value: string }) {
    return (
        <div
            className="
                flex flex-col items-center justify-center
                rounded-2xl
                bg-white/75 backdrop-blur-xl
                border border-white/90
                shadow-[0_10px_28px_-18px_rgba(56,16,95,0.3)]
                px-4 py-3 sm:px-5 sm:py-4
            "
        >
            <span className="text-[11px] sm:text-sm font-semibold text-slate-700">
                {label}
            </span>
            <span className="text-[15px] sm:text-lg font-bold text-[#38105F] mt-1">
                {value}
            </span>
        </div>
    );
}
