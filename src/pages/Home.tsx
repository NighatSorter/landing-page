import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, SquareStack } from "lucide-react";

import { useI18n } from "@/i18n/I18nProvider";
import { useToast } from "@/components/ui/ToastProvider";
import NavbarAurora from "@/components/NavbarGlass";
import Footer from "@/components/Footer";
import StarBorder from "@/components/StarBorder";
import FancyHeading from "@/components/FancyHeading";
import Container from "@/components/Container";
import { ContactButton } from "@/components/ContactButton";
import ServiceCard from "@/components/services/ServiceCard";
import { fadeIn, fadeInUp, blurFadeIn, slideIn, scaleIn } from "@/lib/animations";
import { fadeUp, hoverLift } from "@/lib/motion";
import { dirSign } from "@/lib/dir";
import machineIllustration from "@/assets/machine.svg";
import decoLeft from "@/assets/deco-left.svg";
import decoRight from "@/assets/deco-right.svg";
import customMouse from "@/assets/custom-mouse.svg";
import "@/styles/GlassIcons.css";
import { SERVICE_CATEGORIES, type CategoryId } from "@/sections/services.data";
import { PROJECTS_META } from "@/sections/projects.data";

export default function HomePage() {
  const { lang } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const hasShownContactSuccessToast = useRef(false);

  useEffect(() => {
    document.title = lang === "ar" ? "ŸÜŸÇÿßÿ© | ÿßŸÑÿµŸÅÿ≠ÿ© ÿßŸÑÿ±ÿ¶Ÿäÿ≥Ÿäÿ© " : "Nighat | Home";
  }, [lang]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("contact") !== "success") {
      return;
    }

    if (hasShownContactSuccessToast.current) {
      return;
    }
    hasShownContactSuccessToast.current = true;
    showToast({
      title:
        lang === "ar"
          ? "‘ﬂ—« · Ê«’·ﬂ „⁄‰« ?"
          : "Your message was sent successfully ?",
      description:
        lang === "ar"
          ? "«” ·„‰« —”«· ﬂ° Ê›—Ìﬁ‰« Ì—«Ã⁄Â« «·¬‰ Ê”Ì⁄«Êœ «·« ’«· »ﬂ ﬁ—Ì»«."
          : "We're happy you reached out and will get back to you soon.",
      durationMs: 3500,
    });

    params.delete("contact");
    const search = params.toString();
    navigate(
      {
        pathname: location.pathname || "/",
        search: search ? `?${search}` : "",
      },
      { replace: true }
    );
  }, [lang, location.pathname, location.search, navigate, showToast]);

  return (
    <main id="top" dir={dir} lang={lang}>
      <NavbarAurora />

      <Hero />

      <AboutSection />

      <ServicesSection />

      <MachineSection />

      <ProjectsSection />

      <ImpactSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  const isAr = lang === "ar";
  const hero = t.hero;
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const alignClass = isAr ? "text-center md:text-right" : "text-center md:text-left";
  const arrow = isAr ? "‚Üê" : "‚Üí";

  return (
    <section
      id="hero"
      dir={isAr ? "rtl" : "ltr"}
      className="relative flex min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat pt-32 pb-20 md:pt-40"
      aria-label={hero.ariaLabel}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/5" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-white/95 via-white/60 to-transparent backdrop-blur-[8px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl lg:max-w-7xl items-center px-4 sm:px-8 lg:px-10">
        <motion.div
          {...scaleIn(0.05)}
          className="
                        grid w-full items-center gap-10
                        lg:gap-16
                        md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
                    "
        >
          <div className="w-full md:col-span-2">
            <motion.div
              {...fadeInUp(0.08)}
              className={`inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-1 text-[11px] md:text-xs text-[#3b3350]/80 shadow-sm backdrop-blur ${alignClass}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0F1A40]" />
              <span>{hero.eyebrow}</span>
            </motion.div>

            <motion.h1
              {...fadeInUp(0.12)}
              className={`${alignClass} mt-4 font-black tracking-tight leading-[1.05] text-[40px] sm:text-[56px] md:text-[68px] text-[#2b0d35]`}
            >
              {hero.titleTop}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#AD1FEA] via-[#7F1CD1] to-[#0F1A40] bg-clip-text text-transparent">
                {hero.titleBottom}
              </span>
            </motion.h1>

            <motion.p
              {...fadeInUp(0.16)}
              className={`${alignClass} mt-4 text-[15px] md:text-base text-[#3b3350]/80 max-w-2xl mx-auto md:mx-0`}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              {...fadeInUp(0.2)}
              className={`
                                mt-8 flex flex-wrap items-center gap-4
                                ${isAr ? "justify-end" : "justify-start"}
                                md:${isAr ? "justify-end" : "justify-start"}
                            `}
            >
              <motion.button
                type="button"
                onClick={() => navigate("/contact")}
                {...hoverLift}
                className="
                                    group inline-flex items-center rounded-full
                                    px-7 py-2
                                    text-sm font-medium text-white
                                    bg-gradient-to-r from-[#7F1CD1] via-[#5b3fd9] to-[#0F1A40]
                                    border border-white/20
                                    shadow-[0_6px_18px_rgba(15,23,42,0.18)]
                                    hover:shadow-[0_8px_22px_rgba(15,23,42,0.22)]
                                    transition-all duration-300 gap-2
                                "
              >
                <span
                  className="
                                        transition-all duration-300
                                        group-hover:tracking-wide
                                        "
                >
                  {hero.ctaPrimary}
                </span>

                <span
                  className={`
                                    text-lg transition-transform duration-300
                                    ${isAr ? "group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5"}
                                    `}
                >
                  {arrow}
                </span>
              </motion.button>

              <motion.div {...fadeInUp(0.24)} {...hoverLift} className="inline-flex">
                <StarBorder
                  as="button"
                  onClick={() => scrollTo("projects")}
                  color="#0F1A40"
                  speed="5s"
                  thickness={2}
                  className="cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-[#0F1A40] bg-white/70 backdrop-blur-md rounded-full">
                    {hero.ctaSecondary}
                  </span>
                </StarBorder>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection({ id = "about" }: { id?: string }) {
  const { t, lang } = useI18n();
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const reduce = useReducedMotion();
  const alignText = isRTL ? "text-right" : "text-left";
  const panelSpacing = isRTL ? "md:pl-24" : "md:pr-24";
  const mousePosition = isRTL ? "right-4 md:right-6" : "left-4 md:left-6";

  return (
    <section
      id={id}
      dir={dir}
      role="region"
      aria-labelledby={`${id}-title`}
      className="
        relative isolate w-full
        px-4 sm:px-6 lg:px-8
        mt-24 md:mt-32 pb-28 md:pb-36
        overflow-x-clip
      "
    >
      <motion.img
        src={decoRight}
        alt=""
        aria-hidden="true"
        className="
    pointer-events-none select-none absolute -z-10 drop-shadow-2xl
    w-24 sm:w-[280px]

    right-4 top-10
    sm:right-8 sm:top-6

    /* ŸÅŸÇÿ∑ ÿßŸÑÿ¥ÿßÿ¥ÿßÿ™ ÿßŸÑŸÉÿ®Ÿäÿ±ÿ© */
    lg:right-12 lg:top-4
    xl:right-16
    2xl:right-20
  "
        style={{ opacity: 0.9 }}
        {...slideIn("right", 0.05, 48, 0.2)}
        whileInView={{ opacity: 0.9, x: 0 }}
      />


      <motion.img
        src={decoLeft}
        alt=""
        aria-hidden="true"
        className="
    pointer-events-none select-none absolute -z-10 drop-shadow-2xl
    w-20 sm:w-[260px]

    left-3 bottom-12
    sm:left-8 sm:bottom-10

    /* ŸÅŸÇÿ∑ ÿßŸÑÿ¥ÿßÿ¥ÿßÿ™ ÿßŸÑŸÉÿ®Ÿäÿ±ÿ© */
    lg:left-12
    xl:left-16
    2xl:left-20
  "
        style={{ opacity: 0.88 }}
        {...slideIn("left", 0.05, 48, 0.2)}
        whileInView={{ opacity: 0.88, x: 0 }}
      />



      {/* --- ÿßŸÑŸÖÿ≠ÿ™ŸàŸâ ÿßŸÑÿØÿßÿÆŸÑŸä ÿØÿßÿÆŸÑ container --- */}
      <div className="container mx-auto">
        <motion.h2
          id={`${id}-title`}
          {...fadeInUp(0.08)}
          className="
            font-extrabold tracking-wide
            text-4xl md:text-5xl text-[#38105F]
            text-center mb-8
          "
        >
          {t.about.title}
        </motion.h2>

        <motion.div
          {...scaleIn(0.12)}
          className={`relative mx-auto max-w-5xl px-2 sm:px-4 ${panelSpacing}`}
        >
          <motion.div
            {...fadeIn(0.16)}
            className={[
              "relative rounded-[28px] overflow-hidden",
              "backdrop-blur-xl bg-white/20 border border-white/30",
              "shadow-[0_4px_14px_-6px_rgba(30,27,75,0.06)]",
              "px-6 sm:px-10 md:px-14 py-8 md:py-12 text-[#1C214A]",
              alignText,
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0"
              style={{
                width: "26%",
                background:
                  "radial-gradient(120% 120% at 100% 50%, rgba(122,28,209,0.06) 0%, rgba(122,28,209,0.02) 45%, rgba(122,28,209,0) 80%)",
              }}
            />
            <motion.p
              {...fadeInUp(0.2)}
              className={`
                text-base sm:text-lg md:text-2xl leading-relaxed sm:leading-9
                font-semibold whitespace-pre-line ${alignText}
              `}
            >
              {t.about.body}
            </motion.p>
          </motion.div>

          {/* --- ÿµŸàÿ±ÿ© ÿßŸÑŸÖÿßŸàÿ≥ (ÿßŸÑÿ≥ŸÉ‡•ç‡§∞‡•ã‡§≤) --- */}
          <motion.img
            src={customMouse}
            alt={t.about.mouseAlt}
            className={`
              hidden sm:block absolute
              top-[100%]
              -translate-y-1/2
              ${mousePosition}
              w-10 sm:w-12 md:w-14
              pointer-events-none
              opacity-95
            `}
            animate={
              reduce
                ? {}
                : { y: [0, -4, 4, 0], rotate: [0, 2, -2, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}


function ServicesSection() {
  const { t, lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";

  const categories = useMemo(() => {
    return SERVICE_CATEGORIES.map((category) => {
      const copy = t.services.categories[category.id];
      return {
        id: category.id,
        heading: copy.heading,
        items: category.items.map((itemMeta, idx) => {
          const content = copy.items[idx];
          return {
            icon: itemMeta.icon,
            title: content?.title ?? "",
            desc: content?.desc ?? "",
          };
        }),
      };
    });
  }, [t, lang]);

  const [active, setActive] = useState<CategoryId>("sorting");
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <motion.section
      id="services"
      dir={dir}
      lang={lang}
      aria-labelledby="services-heading"
      className="
        relative isolate
        mt-20 md:mt-28 lg:mt-36
        py-16 sm:py-20 md:py-28 lg:py-32
        min-h-[70vh] md:min-h-[80vh]
        [--p1:#38105F] [--p2:#7A1CD1]
      "
      {...fadeIn(0.05)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >

        <div
          className="
            absolute
            -top-24 right-[-56px]
            h-48 w-48
            sm:right-10 sm:h-[360px] sm:w-[360px]
            rounded-full
            bg-[radial-gradient(closest-side,#7A1CD1,transparent)]
            opacity-20 blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-60px] left-[-80px]
            h-52 w-52
            sm:bottom-[-80px] sm:left-0 sm:h-[380px] sm:w-[380px]
            rounded-full
            bg-[radial-gradient(closest-side,#1A0A2E,transparent)]
            opacity-20 blur-3xl
          "
        />

        <div
          className="
            absolute
            top-1/3 left-[5%]
            h-40 w-40
            sm:left-[10%] sm:h-[320px] sm:w-[320px]
            rounded-full
            bg-[radial-gradient(closest-side,#167BFF,transparent)]
            opacity-16 blur-3xl
          "
        />

        <div
          className="
            absolute
            top-1/2 right-[4%]
            h-40 w-40
            sm:right-[12%] sm:h-[320px] sm:w-[320px]
            rounded-full
            bg-[radial-gradient(closest-side,#3A3F7A,transparent)]
            opacity-16 blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0 left-1/3
            h-40 w-40 translate-y-1/3
            sm:h-[320px] sm:w-[320px]
            rounded-full
            bg-[radial-gradient(closest-side,#38105F,transparent)]
            opacity-18 blur-3xl
          "
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,white,rgba(255,255,255,0))]" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,white,rgba(255,255,255,0))]" />

      </div>


      <div className="mx-auto max-w-6xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto max-w-5xl
            rounded-[24px]
            border-none
            bg-white/80 backdrop-blur-2xl
            shadow-[0_16px_40px_-30px_rgba(56,16,95,0.4)]
            px-4 py-5
            sm:px-6 sm:py-7
            md:px-8 md:py-8
            lg:py-7
          "
        >
          <motion.div {...fadeInUp(0.08)} className="mb-8 sm:mb-10 text-center">

            <span className="inline-flex items-center rounded-full border border-white/70 bg-white px-5 py-1.5 text-xs md:text-sm font-medium text-[#38105F] shadow-sm backdrop-blur">
              {t.services.badge}
            </span>


            <h2
              id="services-heading"
              className="
                mt-5
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-extrabold tracking-tight
                text-[#38105F]
              "
            >
              {t.services.heading}
            </h2>


            <p className="mx-auto mt-4 max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg text-black/65 leading-relaxed">
              {t.services.subtitle}
            </p>

          </motion.div>
          <motion.div
            {...fadeInUp(0.12)}
            className="mb-8 sm:mb-10 flex justify-center px-1"
            role="tablist"
            aria-orientation="horizontal"
          >

            <div className="w-full max-w-3xl">
              <div className="flex flex-col gap-2 sm:hidden">
                {categories.map((cat) => {
                  const isActive = cat.id === active;
                  return (
                    <button
                      key={`mobile-${cat.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${cat.id}-panel`}
                      onClick={() => setActive(cat.id)}
                      className={`
                        w-full rounded-2xl px-4 py-2.5
                        text-xs font-semibold
                        text-center
                        transition-all
                        ${isActive
                          ? "bg-gradient-to-r from-[#7A1CD1] to-[#38105F] text-white shadow-md"
                          : "bg-white/70 text-[#38105F]/85 border border-[#E5DEFF] hover:bg-white"
                        }
                      `}
                    >
                      {cat.heading}
                    </button>
                  );
                })}
              </div>
              <div className="hidden sm:flex justify-center overflow-x-auto scrollbar-none">

                <div className="inline-flex flex-nowrap items-center justify-center gap-2.5 rounded-full bg-white/85 border border-white/70 p-3 shadow-[0_10px_30px_-24px_rgba(56,16,95,0.35)] backdrop-blur-xl">
                  {categories.map((cat) => {
                    const isActive = cat.id === active;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`${cat.id}-panel`}
                        onClick={() => setActive(cat.id)}
                        className={`
                          rounded-full px-4 sm:px-5 py-2.5
                          text-xs sm:text-sm md:text-[0.98rem]
                          font-semibold tracking-tight
                          transition-all whitespace-nowrap
                          ${isActive
                            ? "bg-gradient-to-r from-[#7A1CD1] to-[#38105F] text-white shadow-md hover:brightness-110 border border-transparent"
                            : "text-[#38105F]/80 hover:bg-black/5 border border-transparent"
                          }
                        `}
                      >
                        {cat.heading}
                      </button>
                    );
                  })}
                </div>

              </div>

            </div>

          </motion.div>
          <motion.div
            {...scaleIn(0.16)}
            id={`${current.id}-panel`}
            role="tabpanel"
            aria-labelledby={current.id}
            className="min-h-[30vh] md:min-h-[40vh] lg:min-h-[36vh]"
          >

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {current?.items.map((service, idx) => {
                const isFirstTab = current.id === "sorting";
                const isFirstTwo = idx < 2;

                const ctaHref =
                  isFirstTab && isFirstTwo
                    ? idx === 0
                      ? "/date-classification"
                      : "/palm-classification"
                    : undefined;

                return (
                  <div
                    key={`${current.id}-${service.title || idx}`}
                    className="
                      text-[0.9rem] md:text-[0.92rem]
                      scale-[0.9] sm:scale-[0.97] lg:scale-[0.9]
                    "
                  >

                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.desc}
                      delay={0.04 * idx}
                      ctaHref={ctaHref}
                      ctaLabel="ÿ≤Ÿäÿßÿ±ÿ©"
                    />

                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}

const wordLikeAnim = (delay = 0) => ({
  initial: { opacity: 0.1, y: 10, filter: "blur(6px)" },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay,
    },
  },
  viewport: { once: true, amount: 0.4 },
});

function MachineSection() {
  const { t, lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const copy = t.machine;

  return (
    <section
      id="machine"
      dir={dir}
      className="bg-white py-16 md:py-24"
    >

      <div className="mx-auto w-full max-w-[1400px] px-4 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          {...fadeUp(0.1)}
          className="md:w-5/12 text-right order-2 md:order-1"
        >

          <FancyHeading className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#38105F] leading-tight">
            {copy.title}
          </FancyHeading>


          <motion.p
            {...fadeUp(0.15)}
            className="mt-4 text-lg text-[#38105F]/80 leading-relaxed max-w-xl"
          >
            {copy.body}
          </motion.p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4">
            <motion.a
              href="/machine"
              {...wordLikeAnim(0.2)}
              className="inline-flex items-center justify-center rounded-full border border-[#7A1CD1] px-8 py-3 text-sm font-medium text-[#38105F] hover:bg-[#7A1CD1]/5 transition-colors"
            >

              <SquareStack className="size-4 ml-2" />
              {copy.detailCta}
            </motion.a>
            <motion.a
              href="/contact"
              {...wordLikeAnim(0.32)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7A1CD1] to-[#38105F] px-8 py-3 text-sm font-medium text-white shadow-md hover:brightness-110 transition-all"
            >

              <GitBranch className="size-4 ml-2" />
              {copy.tryCta}
            </motion.a>


          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="md:w-7/12 flex justify-center md:justify-start order-1 md:order-2"
        >

          <img
            src={machineIllustration}
            alt={copy.imageAlt}
            loading="lazy"
            className="w-full max-w-[1100px] lg:max-w-[1300px] h-auto"
          />

        </motion.div>


      </div>

    </section>
  );
}

type ProjectView = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

function ProjectsSection(): JSX.Element {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { t, lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";

  const projects: ProjectView[] = useMemo(() => {
    return PROJECTS_META.map((meta) => {
      const copy = t.projects.items[meta.id];
      return {
        id: meta.id,
        href: meta.href,
        imageSrc: meta.imageSrc,
        title: copy.title,
        description: copy.description,
        imageAlt: copy.imageAlt,
      };
    });
  }, [t]);

  const total = projects.length;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      setIndex(Math.round(el.scrollLeft / el.clientWidth));
    };

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (i: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const clamped = ((i % total) + total) % total;
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  };

  const isLast = index === total - 1;
  const centerBtnArrow: "left" | "right" = isLast ? "right" : "left";

  const formatLabel = (template: string, values: Record<string, number>) => {
    return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
  };

  const textAlign = dir === "rtl" ? "text-right" : "text-left";

  return (
    <Container
      id="projects"
      className="!border-0 py-16 sm:py-20 md:py-24 lg:py-28"
    >

      <motion.div {...fadeInUp(0.08)} className="mb-10 text-center">

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--fg)]">
          {t.projects.title}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
          {t.projects.description}
        </p>

      </motion.div>


      <div className="relative">

        <div className="flex justify-center">

          <div
            ref={viewportRef}
            dir="ltr"
            className="
              snap-x snap-mandatory overflow-x-auto
              w-full max-w-[1100px]
              pb-4
              scroll-smooth
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
            aria-roledescription="carousel"
            aria-label={t.projects.carouselAria}
          >

            <div className="flex w-full">
              {projects.map((project, i) => {
                const isActive = index === i;
                const slideLabel = formatLabel(t.projects.slideLabel, {
                  current: i + 1,
                  total,
                });

                const navLabel = isLast
                  ? t.projects.navPrev
                  : t.projects.navNext;

                return (
                  <section
                    key={project.id}
                    className="snap-start w-full shrink-0"
                    aria-roledescription="slide"
                    aria-label={slideLabel}
                  >

                    <div
                      dir={dir}
                      className="
                        relative grid items-center
                        gap-6 sm:gap-8 lg:gap-10
                        p-6 sm:p-8 md:p-9 lg:p-10
                        md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
                      "
                    >
                      <div className={`order-2 md:order-1 ${textAlign}`}>

                        <div
                          className={`
                            relative rounded-3xl
                            border border-[var(--border)]
                            px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8
                            backdrop-blur-md bg-white/80
                            shadow-[0_10px_25px_rgba(122,28,209,0.05)]
                            sm:shadow-[0_20px_60px_rgba(122,28,209,0.08)]
                            overflow-visible
                            ${isActive ? "card-in" : "card-idle"}
                          `}
                        >

                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--fg)]">
                            {project.title}
                          </h3>


                          <p className="mt-3 text-sm sm:text-[0.95rem] md:text-base leading-relaxed text-[var(--muted)]">
                            {project.description}
                          </p>


                          <motion.div
                            {...blurFadeIn(0.05)}
                            {...hoverLift}
                            className="mt-6 flex justify-start"
                          >

                            <Link
                              to={project.href}
                              className="
                                inline-flex items-center gap-2
                                rounded-xl bg-[var(--accent)]
                                px-5 py-3
                                text-sm font-medium text-white
                                shadow-md transition hover:opacity-90
                              "
                            >
                              {t.projects.openCta}
                              <ArrowIcon
                                dir={dir === "rtl" ? "left" : "right"}
                                aria-hidden="true"
                              />

                            </Link>

                          </motion.div>
                          <motion.button
                            type="button"
                            onClick={() =>
                              isLast ? goTo(index - 1) : goTo(index + 1)
                            }
                            {...hoverLift}
                            animate={{
                              scale: isActive ? 1 : 0.9,
                              opacity: isActive ? 1 : 0.75,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 18,
                            }}
                            className="
                              absolute top-1/2 -translate-y-1/2 -end-3 z-10
                              grid place-items-center
                              h-9 w-9 sm:h-12 sm:w-12
                              rounded-full
                              bg-[var(--accent)] text-white
                              shadow-xl ring-2 sm:ring-4 ring-[var(--accent)]/15
                            "

                            aria-label={navLabel}
                          >

                            <ArrowIcon dir={centerBtnArrow} aria-hidden="true" />

                          </motion.button>

                        </div>

                      </div>
                      <div className="order-1 flex justify-center md:order-2">

                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          loading="lazy"
                          className={`
                            block rounded-[2rem]
                            transition-all duration-300
                            ${isActive ? "img-in" : "img-idle"}
                            w-[230px]
                            sm:w=[250px]
                            md:w-[300px]
                            lg:w-[340px]
                            xl:w-[360px]
                          `}
                        />

                      </div>

                    </div>

                  </section>
                );
              })}
            </div>

          </div>

        </div>
        <div className="mt-1 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              {...hoverLift}
              aria-label={formatLabel(t.projects.dotLabel, { index: i + 1 })}
              aria-current={index === i}
              className={
                index === i
                  ? "h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent)]/15 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  : "h-2.5 w-2.5 rounded-full bg-[var(--border)] transition hover:bg-[var(--accent)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              }
            />
          ))}
        </div>

      </div>


      <style>{`
        .img-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .img-idle {
          opacity: .85;
          transform: translateY(10px) scale(.97);
        }

        @media (prefers-reduced-motion: reduce) {
          .img-in,
          .img-idle {
            transition: none !important;
          }
        }
      `}</style>

    </Container>
  );
}

type ArrowIconProps = {
  dir?: "left" | "right";
};

function ArrowIcon({ dir = "right" }: ArrowIconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      {dir === "right" ? (
        <path
          d="M8 5l7 7-7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M16 5l-7 7 7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ImpactSection() {
  const { t, lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const impact = t.impact;

  const statAlignment = "text-right";



  return (
    <section
      id="impact"
      dir={dir}
      className="relative py-12 sm:py-16 md:py-20"
    >

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">

          <FancyHeading className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg)]">
            {impact.title}
          </FancyHeading>


          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-4 text-[var(--muted)] text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {impact.description}
          </motion.p>

        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-8 lg:gap-x-12">
          {impact.stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className={`flex flex-col items-center text-center ${statAlignment}`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7E16A4]">
                {stat.value}
              </div>
              <h3 className="mt-2 text-base sm:text-lg md:text-2xl font-semibold text-[var(--fg)]">
                {stat.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-[var(--muted)] leading-relaxed max-w-xs sm:max-w-none">
                {stat.desc}
              </p>

            </motion.div>
          ))}
        </div>
        <p className="mt-10 sm:mt-12 text-[10px] sm:text-xs text-[var(--muted)] text-center">
          {impact.footnote}
        </p>

      </div>

    </section>
  );
}

const logos = [
  { src: "/partners/KACST.svg", alt: "KACST logo", width: 140 },
  { src: "/partners/MOIMR.svg", alt: "MOIMR logo", width: 140 },
  { src: "/partners/NTDP.svg", alt: "NTDP logo", width: 140 },
  { src: "/partners/SaudiAgriFoodTechAliance.svg", alt: "Saudi Agri Food Tech Alliance logo", width: 220 },
  { src: "/partners/NVIDIA.svg", alt: "NVIDIA logo", width: 140 },
  { src: "/partners/Roboflow.svg", alt: "Roboflow logo", width: 160 },
  { src: "/partners/Basler.svg", alt: "Basler logo", width: 140 },
  { src: "/partners/AbduGroup.svg", alt: "Abdu Group logo", width: 180 },
  { src: "/partners/ALkhamash.svg", alt: "Alkhamash logo", width: 170 },
];

function PartnersSection() {
  const { t, lang } = useI18n();
  const isRTL = lang === "ar";
  const reduce = useReducedMotion();

  const duplicatedLogos = [...logos, ...logos, ...logos];

  const sign = dirSign();
  const LOGO_GAP = 0;

  const marqueeAnimation = useMemo(() => {
    if (reduce) {
      return {
        animate: { x: 0 },
        transition: { duration: 0 },
      };
    }

    const start = 0;
    const end = sign === 1 ? "-50%" : "50%";

    return {
      animate: { x: [start, end] },
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 48,
          ease: "linear",
        },
      },
    };
  }, [reduce, sign]);

  return (
    <motion.section
      id="partners"
      aria-labelledby="partners-title"
      className="bg-white mt-10 md:mt-14 py-6 sm:py-8 md:py-10"

      dir={isRTL ? "rtl" : "ltr"}
      {...fadeUp(0.1)}
    >
      <div className="container px-4 sm:px-6">
        <motion.h2
          id="partners-title"
          {...fadeUp(0.2)}
          className="text-center text-lg md:text-xl font-semibold tracking-tight text-[#2A004E]"
        >
          {t.partners.title}
        </motion.h2>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-6 md:mt-8 overflow-hidden"
          aria-label={t.partners.ariaLabel}
        >
          <motion.div
            className="flex items-center whitespace-nowrap will-change-transform"
            style={{ width: "max-content", gap: `${LOGO_GAP}px` }}
            animate={marqueeAnimation.animate}
            transition={marqueeAnimation.transition}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className="shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="
                                        block select-none [-webkit-user-drag:none]
                                        h-auto max-h-12 sm:max-h-16 md:max-h-20
                                        w-auto object-contain
                                    "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ContactSection(): JSX.Element {
  const { t, lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const copy = t.contact;

  return (
    <section
      id="contact"
      dir={dir}
      className="
               mt-8 sm:mt-10 md:mt-12 lg:mt-14
                mb-4 sm:mb-6 md:mb-10
                relative overflow-hidden
            "
    >
      <div
        aria-hidden
        className="
                    pointer-events-none absolute inset-0 -z-10
                    opacity-[0.08]
                    bg-[linear-gradient(90deg,#1d2a3f1a_1px,transparent_1px),linear-gradient(#1d2a3f1a_1px,transparent_1px)]
                    bg-[size:42px_42px]
                "
      />


      <Container className="!border-0">

        <motion.div
          {...scaleIn(0.08)}
          className="
                        relative overflow-hidden
                        rounded-3xl
                        bg-gradient-to-r from-[#f7f3ff] via-white to-[#eef4ff]
                        px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12
                        flex flex-col lg:flex-row
                        items-center lg:items-start
                        justify-between
                        gap-8 lg:gap-10
                        shadow-[0_10px_28px_rgba(15,23,42,0.10)]
                    "
        >
          <span
            aria-hidden
            className="
                            pointer-events-none absolute 
                            -top-16 -right-10 
                            w-40 h-40 rounded-full
                            bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.20),transparent_65%)]
                            opacity-70
                        "
          />

          <span
            aria-hidden
            className="
                            pointer-events-none absolute 
                            -bottom-20 -left-10 w-52 h-52 
                            rounded-full
                            bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]
                            opacity-70
                        "
          />
          <div className="relative z-[1] text-center lg:text-right max-w-xl">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#2A004E] leading-tight">
              {copy.title}
            </h2>


            <div
              className="
                                mt-3 h-[3px] 
                                w-24 sm:w-28
                                rounded-full
                                mx-auto lg:mx-0
                            "
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), #b06cff, #4f46e5)",
              }}
            />


            <p className="mt-4 text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed">
              {copy.description}
            </p>

          </div>
          <motion.div
            {...fadeInUp(0.12)}
            className="
                            relative z-[1] 
                            flex flex-col 
                            items-center
                            self-center lg:self-start
                            gap-2 
                            text-center
                        "
          >

            <ContactButton
              label={copy.buttonLabel}
              aria-label={copy.buttonAria}
              className="px-8 py-3.5 text-base sm:text-lg"
            />


            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-xs">
              {copy.note}
            </p>

          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}

