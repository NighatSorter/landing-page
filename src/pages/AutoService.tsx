// src/pages/AutoService.tsx

import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import NavbarAurora from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import autoServiceImg from "@/assets/Auto-Sarvice.png";
import carWashesImg from "@/assets/Car_Washes.png";
import tireChangeImg from "@/assets/Tire_Change_Shops.png";
import oilChangeImg from "@/assets/Oil_Change_Centers.png";
import carAccessoriesImg from "@/assets/Car_Accessories_Center.png";

export default function AutoServicePage() {
    const { lang } = useI18n();
    const dir = lang === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.title =
            lang === "ar"
                ? "نقاة | Auto-Service"
                : "Nighat | Auto-Service";
    }, [lang]);

    return (
        <main id="top" dir={dir} lang={lang}>
            <NavbarAurora />
            <HeroAutoService />
            <AboutSection />
            <WhoIsItForSection />
            <FeaturesSection />
            <ImpactSection />
            <Footer />
        </main>
    );
}

/* ---------------------- Hero Section ---------------------- */

function HeroAutoService() {
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
                        gap-6 md:gap-8 lg:gap-10
                        ${isArabic
                            ? "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                            : "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
                        }
                    `}
                >
                    {/* Phone image */}
                    <motion.div
                        {...fadeInUp(0.12)}
                        className="order-2 md:order-1 flex justify-center"
                    >
                        <div className="relative">
                            <img
                                src={autoServiceImg}
                                alt={
                                    isArabic
                                        ? "لقطة شاشة لتطبيق Auto-Service"
                                        : "Screenshot of the Auto-Service app"
                                }
                                className="
                                    block h-auto
                                    w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]
                                    max-w-full rounded-[3rem]
                                "
                                draggable={false}
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <div className="order-1 space-y-5 md:order-2 text-center md:text-start">
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
                            {isArabic ? "تطبيق إدارة خدمات السيارات" : "Car Service Management App"}
                        </span>

                        <h1
                            className="
                                text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem]
                                font-extrabold leading-tight tracking-tight text-[#38105F]
                            "
                        >
                            {isArabic
                                ? "راقب آداء منشأتك وزد كفائتك خلال ثواني"
                                : "Monitor your facility's preformance and increase your efficincy in seconds"}
                        </h1>

                        <p className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                            {isArabic
                                ? "نظام رقمي ذكي متكامل يمنح أصحاب المنشآت الرؤية الكاملة على عملياتهم ومتابعة الاداء - كل ذلك من لوحة تحكم واحدة"
                                : "A fully integrated smart digital system that gives business owners complete visibility into their operations and performance tracking – all from one dashboard."}
                        </p>

                        <div className="pt-3">
                            <motion.a
                                href="#"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    bg-gradient-to-r from-[#7A1CD1] to-[#38105F]
                                    px-10 py-3.5
                                    text-sm sm:text-base font-semibold text-white
                                    shadow-[0_22px_60px_-32px_rgba(56,16,95,0.9)]
                                    backdrop-blur transition
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-[#7A1CD1]
                                "
                            >
                                {isArabic ? "جرب التطبيق" : "Try the app"}
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"
            />
        </section>
    );
}

/* ---------------------- About Section ---------------------- */

function AboutSection() {
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
                        {isArabic ? "عن Auto-Service" : "About Auto-Service"}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/75">
                        {isArabic
                            ? "يواجه الملاك صعوبة في تتبع أداء منشأتهم بدونها، مما يجعل من الصعب معرفة عدد السيارات التي خُدمت، الوقت الذي استغرقته، أو ساعات العمل الفعلية."
                            : "Business owners struggle to track their operations without proper tools, making it difficult to know how many vehicles were served, how long each service took, or actual working hours."}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
                        {isArabic
                            ? "طوّرنا Auto-Service لمنح أصحاب المنشآت لوحة تحكم ذكية تجمع كل هذه البيانات في مكان واحد، مما سيساعدهم على اتخاذ قرارات أسرع، تحسين جودة الخدمة، وزيادة الأرباح."
                            : "We developed Auto-Service to give business owners a smart dashboard that brings all this data together in one place, helping them make faster decisions, improve service quality, and increase profits."}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------------- Who Is It For Section ---------------------- */

function WhoIsItForSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const items = isArabic
        ? [
            { icon: carWashesImg, title: "مغاسل السيارات" },
            { icon: tireChangeImg, title: "ورش تغيير الإطارات" },
            { icon: oilChangeImg, title: "مراكز تغيير الزيت" },
            { icon: carAccessoriesImg, title: "مراكز زينة السيارات" },
        ]
        : [
            { icon: carWashesImg, title: "Car Washes" },
            { icon: tireChangeImg, title: "Tire Change Shops" },
            { icon: oilChangeImg, title: "Oil Change Centers" },
            { icon: carAccessoriesImg, title: "Car Accessories Center" },
        ];

    return (
        <section className="relative bg-gradient-to-b from-white to-[#f7f2ff] py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "لمن هذا التطبيق؟" : "Who is this for?"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "نظام Auto-Service مصمم لخدمة كل منشأة تعتمد على سرعة الخدمة وتتبع المركبات."
                            : "Auto-Service is designed for every business that relies on fast service and vehicle tracking."}
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            {...fadeInUp(0.12)}
                            className="
                                rounded-3xl border border-[#EFE4FF]
                                bg-white/90 backdrop-blur
                                px-6 py-5
                                shadow-[0_18px_55px_-35px_rgba(56,16,95,0.45)]
                                flex items-center gap-4
                            "
                        >
                            <span className="grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-[#7A1CD1]/10 overflow-hidden">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-10 w-10 object-contain"
                                    loading="lazy"
                                />
                            </span>
                            <h3 className="text-base sm:text-lg font-semibold text-[#38105F]">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"
            />
        </section>
    );
}

/* ---------------------- Features Section ---------------------- */

function FeaturesSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const items = isArabic
        ? [
            {
                title: "عداد السيارات",
                text: "تتبع عدد السيارات التي خُدمت يوميًا وأسبوعيًا وشهريًا، مع إمكانية مقارنة الأداء عبر الفترات الزمنية.",
            },
            {
                title: "لوحة التحكم الشاملة",
                text: "واجهة مراقبة مركزية تعرض جميع البيانات والمؤشرات الحيوية لحظيًا لمتابعة أداء المنشأة في أي وقت.",
            },
            {
                title: "متوسط وقت الخدمة",
                text: "احسب تلقائيًا متوسط وقت الخدمة لكل سيارة من لحظة الدخول حتى الخروج لتقييم كفاءة الفريق.",
            },
            {
                title: "مراقبة ساعات العمل",
                text: "راقب ساعات العمل الفعلية لكل وردية وتأكد من كفاءة التشغيل طوال اليوم.",
            },
            {
                title: "الحصول على تقارير يوميًا",
                text: "معرفة أطول مدة خدمة، معرفة أوقات الذروة، مقارنات بين التقارير اليومي، أسبوعي و شهري.",
            },
            {
                title: "تتبع كل سيارة",
                text: "سجل الوقت الدقيق لكل سيارة على حدة من بداية الخدمة حتى التسليم، لتحديد الاختناقات وتحسين الجدولة.",
            },
            {
                title: "تصنيف المركبة وعلامتها التجارية",
                text: "تحديد نوع المركبة: سيارة دفع رباعي، سيدان، أو بيكاب. والتعرف على العلامة التجارية: تويوتا، كامري، هيونداي، أكسنت.",
            },
            {
                title: "أنتاجية اعلى بأقل التكاليف",
                text: "تطبيق يعمل على أغلب الكاميرات وبدون الحاجة لشراء كاميرات أو حاسوب مخصص له ولا يستنزل باقة الانترنت.",
            },
        ]
        : [
            {
                title: "Vehicle Counter",
                text: "Track the number of vehicles served daily, weekly, and monthly with the ability to compare performance across time periods.",
            },
            {
                title: "Comprehensive Dashboard",
                text: "A centralized monitoring interface displaying all live data and key metrics to track business performance at any time.",
            },
            {
                title: "Average Service Time",
                text: "Automatically calculate the average service time per vehicle from entry to exit to evaluate team efficiency.",
            },
            {
                title: "Working Hours Monitoring",
                text: "Monitor actual working hours per shift and ensure operational efficiency throughout the day.",
            },
            {
                title: "Daily Reports",
                text: "Know the longest service duration, identify peak hours, and compare daily, weekly, and monthly reports.",
            },
            {
                title: "Track Every Vehicle",
                text: "Log the exact time for each individual vehicle from service start to delivery to identify bottlenecks and improve scheduling.",
            },
            {
                title: "Vehicle & Brand Classification",
                text: "Identify vehicle type: SUV, sedan, or pickup. Recognize brand: Toyota, Camry, Hyundai, Accent.",
            },
            {
                title: "Higher Productivity at Lower Cost",
                text: "Works with most cameras — no need to purchase dedicated cameras or a computer, and won't drain your internet plan.",
            },
        ];

    return (
        <section className="relative bg-white py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "ما الذي يقدمه التطبيق؟" : "What does the app offer?"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "عدة أدوات ذكية مدمجة في تطبيق واحد لمنحك السيطرة الكاملة على أداء منشأتك."
                            : "Multiple smart tools integrated in one app to give you full control over your business performance."}
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            {...fadeInUp(0.12)}
                            className="
                                rounded-3xl border border-[#EFE4FF]
                                bg-white/90 backdrop-blur
                                px-5 py-6 text-center
                                shadow-[0_18px_55px_-35px_rgba(56,16,95,0.45)]i claude i wanna edit on this ui 
i wanna add a new page i will swnd you a photo for it 
this page whanges but in the other laptop as local i wanna rewrite it here 
this is will be the way to edite 
in home page i wanna make Auto-Sarvice the first page that will be in website 
also i wanna add two button for forword and backword also cheack if forword slaid to right not in the opisite direction 
in the page i wanna start as you show in photos 
at the first of the page the phone photo with the same sentences 
after that the about section 
who will ues this and the feture
also don't worry i added the pohto in folder with name Auto-Sarvice.png
and check the rest of pages to know the way to make sure
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
        </section>
    );
}

/* ---------------------- Impact Section ---------------------- */

function ImpactSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const items = isArabic
        ? [
            "رؤية فورية على أداء المنشآت دون الحاجة لتتبع يدوي.",
            "قرارات أسرع مبنية على بيانات حقيقية وليس تخمين.",
            "تحديد نقاط الضعف في وقت الخدمة لتحسين كفاءة الفريق.",
            "نمو الأرباح من خلال تحسن معدل خدمة السيارات.",
        ]
        : [
            "Instant visibility into business performance without manual tracking.",
            "Faster decisions based on real data, not guesswork.",
            "Identify service time weaknesses to improve team efficiency.",
            "Profit growth through improved vehicle service rates.",
        ];

    return (
        <section className="relative bg-gradient-to-b from-[#f7f2ff] to-white py-20 md:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10">
                <motion.div
                    {...fadeInUp(0.08)}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#38105F]">
                        {isArabic ? "أثر التطبيق على عملك" : "Impact of the app on your business"}
                    </h2>
                    <p className="text-sm sm:text-base text-black/70">
                        {isArabic
                            ? "منصة تساعد أصحاب المنشآت على اتخاذ قرارات أذكى وتطوير أدائهم باستمرار."
                            : "A platform that helps business owners make smarter decisions and continuously improve their performance."}
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
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7A1CD1]" />
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
