// src/pages/AutoService.tsx

import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import NavbarAurora from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, Sparkles, Wifi } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import autoServiceImg from "@/assets/Auto-Sarvice.png";
import carWashesImg from "@/assets/Car_Washes.png";
import tireChangeImg from "@/assets/Tire_Change_Shops.png";
import oilChangeImg from "@/assets/Oil_Change_Centers.png";
import carAccessoriesImg from "@/assets/Car_Accessories_Center.png";
import gasStationImg from "@/assets/gas-station.png";
import restaurantCafeImg from "@/assets/Coffe.png";

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
            <ReadyToUseSection />
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

/* ---------------------- Ready-to-use Section ---------------------- */

function ReadyToUseSection() {
    const { lang } = useI18n();
    const isArabic = lang === "ar";

    const features = isArabic
        ? [
            {
                icon: Camera,
                title: "لا أجهزة جديدة",
                desc: "يعمل مع كاميراتك الحالية دون شراء أي معدات إضافية.",
            },
            {
                icon: Sparkles,
                title: "لا تعقيد",
                desc: "تشغيل بسيط وفوري، بدون إعدادات معقدة أو فرق تقنية.",
            },
            {
                icon: Wifi,
                title: "استهلاك بيانات منخفض",
                desc: "نظام ذكي يقلل استهلاك الإنترنت بنسبة تصل إلى 98٪.",
            },
        ]
        : [
            {
                icon: Camera,
                title: "No new hardware",
                desc: "Runs on your existing cameras — no extra equipment to buy.",
            },
            {
                icon: Sparkles,
                title: "Zero complexity",
                desc: "Plug-and-play setup with no complex configuration or IT team.",
            },
            {
                icon: Wifi,
                title: "Ultra-low data usage",
                desc: "A smart pipeline that cuts internet consumption by up to 98%.",
            },
        ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbf7ff] to-white py-20 md:py-28">
            {/* Aurora glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#7A1CD1,transparent)] opacity-20 blur-3xl" />
                <div className="absolute -bottom-24 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-[radial-gradient(circle,#2F7FF7,transparent)] opacity-20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10 text-center">
                {/* Eyebrow */}
                <motion.span
                    {...fadeInUp(0.04)}
                    className="
                        inline-flex items-center gap-2
                        rounded-full border border-[#EFE4FF]
                        bg-white/70 backdrop-blur-md
                        px-5 py-2
                        text-xs sm:text-sm font-semibold text-[#7A1CD1]
                        shadow-[0_18px_45px_-28px_rgba(56,16,95,0.6)]
                    "
                >
                    <Sparkles className="h-4 w-4" />
                    {isArabic ? "جاهز للتشغيل فورًا" : "Ready out of the box"}
                </motion.span>

                {/* Headline */}
                <motion.h2
                    {...fadeInUp(0.1)}
                    className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                >
                    <span className="bg-gradient-to-r from-[#7A1CD1] via-[#5b1a9d] to-[#38105F] bg-clip-text text-transparent">
                        {isArabic
                            ? "كل اللي تحتاجه عندك بالفعل"
                            : "Everything you need is already there"}
                    </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    {...fadeInUp(0.16)}
                    className="mt-5 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed"
                >
                    {isArabic
                        ? "لا أجهزة. لا تعقيد. فقط نظام ذكي يعمل على كاميراتك ويقلل استهلاك البيانات بـ 98٪."
                        : "No devices. No complexity. Just a smart system that works on your cameras and cuts data usage by 98%."}
                </motion.p>

                {/* 98% spotlight */}
                <motion.div
                    {...fadeInUp(0.22)}
                    className="mt-12 flex justify-center"
                >
                    <div className="relative">
                        <div
                            aria-hidden
                            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-[#7A1CD1]/30 via-[#9B4EE8]/25 to-[#2F7FF7]/30 blur-2xl"
                        />
                        <div
                            className="
                                relative inline-flex items-center gap-5
                                rounded-[2rem] border border-white/70
                                bg-white/85 backdrop-blur-xl
                                px-7 py-5 sm:px-9 sm:py-6
                                shadow-[0_30px_80px_-40px_rgba(56,16,95,0.7)]
                            "
                        >
                            <span
                                className="
                                    text-6xl sm:text-7xl md:text-8xl font-black leading-none
                                    bg-gradient-to-br from-[#7A1CD1] to-[#38105F]
                                    bg-clip-text text-transparent
                                "
                            >
                                98٪
                            </span>
                            <span className="text-start text-sm sm:text-base font-semibold text-[#38105F] leading-tight">
                                {isArabic ? (
                                    <>
                                        أقل في
                                        <br />
                                        استهلاك
                                        <br />
                                        البيانات
                                    </>
                                ) : (
                                    <>
                                        less
                                        <br />
                                        data
                                        <br />
                                        usage
                                    </>
                                )}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Feature pills */}
                <div className="mt-14 grid gap-5 sm:grid-cols-3">
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            {...fadeInUp(0.1 + i * 0.08)}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="
                                group relative
                                rounded-3xl border border-[#EFE4FF]
                                bg-white/85 backdrop-blur-md
                                px-5 py-7 text-center
                                shadow-[0_18px_55px_-35px_rgba(56,16,95,0.45)]
                                hover:shadow-[0_28px_70px_-30px_rgba(122,28,209,0.45)]
                                transition-shadow
                            "
                        >
                            <div
                                className="
                                    mx-auto grid place-items-center
                                    h-14 w-14 rounded-2xl
                                    bg-gradient-to-br from-[#7A1CD1] to-[#38105F]
                                    text-white
                                    shadow-[0_18px_40px_-18px_rgba(122,28,209,0.7)]
                                    group-hover:scale-110 transition-transform
                                "
                            >
                                <feat.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mt-4 text-base sm:text-lg font-bold text-[#38105F]">
                                {feat.title}
                            </h3>
                            <p className="mt-2 text-xs sm:text-sm text-black/70 leading-relaxed">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
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
            { icon: gasStationImg, title: "محطات الوقود" },
            { icon: restaurantCafeImg, title: "خدمات السيارات للمطاعم والمقاهي" },
        ]
        : [
            { icon: carWashesImg, title: "Car Washes" },
            { icon: tireChangeImg, title: "Tire Change Shops" },
            { icon: oilChangeImg, title: "Oil Change Centers" },
            { icon: carAccessoriesImg, title: "Car Accessories Center" },
            { icon: gasStationImg, title: "Gas Stations" },
            { icon: restaurantCafeImg, title: "Drive-through Services for Restaurants & Cafés" },
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
