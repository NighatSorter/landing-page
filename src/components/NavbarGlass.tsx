import { useState, type MouseEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { ContactButton } from "@/components/ContactButton";

export default function NavbarAurora() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const nav = t.nav;

  // Simple anchor links for each home page section
  const links = [
    { href: "#about", label: nav.about },
    { href: "#services", label: nav.services },
    { href: "#machine", label: nav.machine },
    { href: "#projects", label: nav.projects },
  ];

  const [open, setOpen] = useState(false);

  // Shared CTA navigation handler
  const goToContactPage = () => {
    navigate("/contact");
  };

  // Scroll within the page when already on "/", otherwise navigate first
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-x-0 top-3 z-50 pointer-events-none">
      <div className="container">
        <nav
          className="
            relative mx-auto flex w-full max-w-4xl items-center justify-between
            rounded-full border border-black/10
            bg-white/10 backdrop-blur-2xl
            px-4 py-2 shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_8px_30px_rgba(0,0,0,0.06)]
            pointer-events-auto
          "
          aria-label={nav.ariaLabel}
        >
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2"
          >
            <img
              src="/NighatLogo.svg"
              alt="Nighat Logo"
              className="h-12 w-auto opacity-95"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className="
                  rounded-full px-3 py-2 text-[15px] text-black/85
                  hover:text-black hover:bg-black/5 transition
                "
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:inline-flex">
              <ContactButton
                label={nav.contactCta}
                onClick={goToContactPage}
              />
            </div>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-full px-3 py-2 text-black/85 hover:bg-black/5"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="text-xl">
                {open ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </nav>

        {open && (
          <div
            className="
              mt-2 md:hidden rounded-2xl border border-black/10
              bg-white/12 backdrop-blur-2xl p-3 shadow
              pointer-events-auto
            "
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    handleLinkClick(e, l.href);
                    setOpen(false);
                  }}
                  className="rounded-xl px-3 py-2 text-[15px] text-black/85 hover:bg-black/5"
                >
                  {l.label}
                </a>
              ))}

              <ContactButton
                label={nav.contactCta}
                onClick={() => {
                  goToContactPage();
                  setOpen(false);
                }}
                className="mt-2 w-full justify-center"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
