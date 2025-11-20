"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastOptions = {
  title: string;
  description?: string;
  durationMs?: number;
};

type ToastItem = ToastOptions & { id: number; durationMs: number };

type ToastContextValue = {
  showToast: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
};

let idCounter = 0;

// رسالة النجاح الإنجليزية اللي تبينها
const CONTACT_SUCCESS_MESSAGE =
  "Your message has been received successfully. We will get back to you soon.";

// العنوان القديم (لو كان لسه موجود في أماكن ثانية)
const CONTACT_SUCCESS_LEGACY_TITLE = "Your message was sent successfully ?";

const isContactSuccessToast = (title: string): boolean => {
  const normalized = title.trim().toLowerCase();
  return (
    normalized === CONTACT_SUCCESS_MESSAGE.toLowerCase() ||
    normalized === CONTACT_SUCCESS_LEGACY_TITLE.toLowerCase()
  );
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    ({ title, description, durationMs = 3000 }: ToastOptions) => {
      const contactSuccess = isContactSuccessToast(title);
      const id = ++idCounter;

      const finalDuration = contactSuccess
        ? Math.max(durationMs, 4500)
        : durationMs;

      const toast: ToastItem = {
        id,
        title: contactSuccess ? CONTACT_SUCCESS_MESSAGE : title,
        description,
        durationMs: finalDuration,
      };

      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, finalDuration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOP-LEFT stack */}
      <div className="pointer-events-none fixed left-4 top-4 z-[60] flex flex-col gap-3">
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -10, x: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, x: -5, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`
                pointer-events-auto
                flex w-full max-w-sm items-start gap-3
                rounded-2xl border
                px-4 py-3 sm:px-5 sm:py-3.5
                border-[color:var(--accent)]/15
                bg-white/95
                shadow-[0_12px_28px_rgba(15,23,42,0.08)]
              `}
            >
              {/* icon */}
              <div
                className={`
                  mt-0.5 flex h-7 w-7 items-center justify-center rounded-full
                  bg-[color:var(--accent)]/10 text-[color:var(--accent)]
                `}
              >
                <span className="text-sm">✓</span>
              </div>

              <div className="flex-1">
                <p className="text-sm sm:text-base font-semibold text-[var(--fg)]">
                  {toast.title}
                </p>
                {toast.description && (
                  <p className="mt-1 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {toast.description}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
                className="
                  mt-0.5 flex h-6 w-6 items-center justify-center
                  rounded-md bg-slate-50 text-xs text-[color:var(--accent)]
                  hover:bg-slate-100 transition
                "
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
