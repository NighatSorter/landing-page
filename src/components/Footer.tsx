import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import footerLogo from "@/assets/NighatLogo.svg";
export default function Footer() {
    const { t, lang } = useI18n();
    const isRTL = lang === "ar";
    const footer = t.footer;

    const fadeInUp = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    const socialIcons = [
        { icon: Mail, href: "mailto:info@nighat.net", label: "Email" },
        { icon: Phone, href: "https://wa.me/966538582358", label: "WhatsApp" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    ];

    return (
        <motion.footer
            dir={isRTL ? "rtl" : "ltr"}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-20 md:mt-28 
                 bg-gradient-to-b from-[#050816] via-[#050016] to-[#02010a]
                 text-slate-100
                 border-t border-white/10
                 shadow-[0_-4px_20px_rgba(15,23,42,0.35)]
                 rounded-t-3xl"
            aria-label={footer.ariaLabel}
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14">

                {/* ⭐⭐⭐ ترتيب الأعمدة الجديد ⭐⭐⭐ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-start justify-items-center md:justify-items-start">

                    {/* العمود ١: الشعار + الوصف */}
                    <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={footerLogo}
                                alt={t.brand}
                                className="h-11 w-auto opacity-95"
                            />
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                                {t.brand}
                            </span>
                        </div>

                        <p className="text-sm sm:text-base text-slate-300/85 max-w-xs">
                            {footer.tagline}
                        </p>
                    </motion.div>

                    {/* العمود ٢: روابط سريعة */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            {footer.quickLinksLabel}
                        </h3>

                        <nav>
                            <ul className="space-y-3 text-slate-300/85">
                                {footer.quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="hover:text-violet-300 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>

                    {/* العمود ٣: تابعنا */}
                    <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-lg font-semibold text-white">{footer.followLabel}</h3>

                        <div className="flex gap-4 sm:gap-5">
                            {socialIcons.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.07, y: -2 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full 
                             bg-white/5 border border-white/12 backdrop-blur-md
                             flex items-center justify-center 
                             text-slate-200
                             hover:bg-violet-600/20 hover:border-violet-400 hover:text-violet-100
                             transition-all"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* حقوق النشر */}
                <motion.div variants={fadeInUp} className="pt-6 mt-10 border-t border-white/10 text-center">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} {t.brand}. {footer.rights}
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
