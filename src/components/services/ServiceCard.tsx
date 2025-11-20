// src/components/services/ServiceCard.tsx
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { fadeInUp } from "@/lib/animations";
import { hoverLift } from "@/lib/motion";
import { useI18n } from "@/i18n/I18nProvider";

type ServiceCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay,
  ctaHref,
  ctaLabel,
}: ServiceCardProps) {
  const { lang } = useI18n();


  const fallbackText = lang === "ar" ? "اعرف أكثر" : "Learn more";


  return (
    <motion.article
      {...fadeInUp(delay)}
      {...hoverLift}
      className="group rounded-3xl border border-white/80 bg-white p-6 md:p-7 shadow-[0_10px_28px_-20px_rgba(56,16,95,0.28)] backdrop-blur-sm transition-all hover:border-[#4A0F85]/60 hover:shadow-[0_16px_40px_-24px_rgba(56,16,95,0.35)]"
    >
      <div className="flex items-center gap-6">
        <div className="glassy-icon" aria-hidden="true">
          <span className="glassy-icon__back" />
          <span className="glassy-icon__front">
            <span className="glassy-icon__icon">
              <Icon />
            </span>
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-black group-hover:text-[#38105F]">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-base md:text-lg leading-8 text-black/70">
        {description}
      </p>

      {ctaHref && (
        <div className="mt-5">
          <a
            href={ctaHref}
            className="inline-block rounded-md bg-white text-[#38105F] border border-[#38105F]/30 text-xs px-3 py-1 hover:bg-[#38105F]/10 transition"
          >
            {ctaLabel ?? fallbackText}
          </a>
        </div>
      )}
    </motion.article>
  );
}
