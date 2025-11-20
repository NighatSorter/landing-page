"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavbarGlass";
import { useI18n } from "@/i18n/I18nProvider";
import { useToast } from "@/components/ui/ToastProvider";

export default function ContactPage() {
  const { lang } = useI18n();
  const dir = lang === "ar" ? "rtl" : "ltr";
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title =
      lang === "ar" ? "نقاة | تواصل معنا" : "Nighat | Contact Us";
  }, [lang]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // نقرأ القيم فقط لأجل التحقق البسيط
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // مجرد تحقق بسيط — بحيث ما تكون فاضية
    if (!name || !email || !message) {
      showToast({
        title: lang === "ar" ? "خطأ" : "Error",
        description:
          lang === "ar"
            ? "يرجى تعبئة الحقول الأساسية"
            : "Please fill in all required fields.",
        durationMs: 4000,
      });
      setIsSubmitting(false);
      return;
    }

    // إعداد البيانات للإرسال
    const contactData = {
      name,
      email,
      phone: phone || null,
      message,
      timestamp: new Date().toISOString(),
      language: lang,
    };

    try {
      // إرسال البيانات إلى API (relative URL for reverse proxy)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("API Response:", result);

      // تحويل المستخدم للصفحة الرئيسية
      navigate("/");

      // رسالة نجاح
      showToast({
        title:
          lang === "ar"
            ? "تم إرسال رسالتك بنجاح"
            : "Your message has been sent successfully",
        description:
          lang === "ar" ? "شكرًا لتواصلك معنا." : "Thank you for reaching out.",
        durationMs: 4000,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      showToast({
        title: lang === "ar" ? "خطأ" : "Error",
        description:
          lang === "ar"
            ? "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
            : "An error occurred while sending your message. Please try again.",
        durationMs: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      id="top"
      dir={dir}
      lang={lang}
      className="
                overflow-x-hidden
                min-h-screen
                bg-[#faf7ff]
                bg-[radial-gradient(circle_at_top_left,#f3e9ff,transparent_60%)]
                flex flex-col
            "
      style={{ fontFamily: "Cairo, system-ui, sans-serif" }}
    >
      <NavBar />

      <section
        className="
                    relative w-full
                    pt-24 sm:pt-28 pb-16 sm:pb-20
                    flex items-center
                "
      >
        {/* خلفية */}
        <div
          aria-hidden
          className="
                        pointer-events-none
                        absolute inset-0 -z-10
                        bg-[radial-gradient(circle,#e8dafe,transparent_70%)]
                        opacity-40
                    "
        />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* هيرو للجوال */}
          <div className="mb-8 text-center space-y-3 sm:hidden">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-[#4a2f86] shadow-[0_10px_30px_-20px_rgba(36,0,77,0.5)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#8B3BFF]" />
              <span>ذكاء اصطناعي · رؤية حاسوبية</span>
            </div>

            <h2 className="text-2xl font-extrabold leading-snug text-[#2b1552]">
              جاهزين نسمع فكرتك،
              <span className="block text-[#5c3fb5] mt-1">
                ونعطيك خطوات عملية وواضحة.
              </span>
            </h2>

            <p className="text-xs text-[#8a80ad] max-w-xs mx-auto">
              اكتب بأسلوبك وببساطة؛ دورنا نفهمك ونحوّل فكرتك إلى خطة واضحة قابلة
              للتنفيذ.
            </p>
          </div>

          {/* تخطيط الديسكتوب */}
          <div
            className="
                        grid items-center
                        gap-10 lg:gap-14
                        lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
                    "
          >
            {/* الفورم */}
            <div
              className="
                                order-2 lg:order-1
                                w-full
                                rounded-[30px] sm:rounded-[38px]
                                bg-white/80 backdrop-blur-2xl
                                border border-white/60
                                px-5 sm:px-7 md:px-8
                                py-7 sm:py-8 md:py-9
                                shadow-[0_28px_90px_-40px_rgba(36,0,77,0.28)]
                            "
            >
              <h1 className="text-xl sm:text-2xl font-semibold text-[#2b1552] mb-5 sm:mb-6 text-right">
                تواصل معنا
              </h1>

              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                {/* الاسم */}
                <div>
                  <label className="text-xs sm:text-sm mb-1 block font-semibold text-[#2b1552]">
                    الاسم الكامل
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="محمد عبدالله"
                    className="
                                            w-full rounded-2xl border border-[#e8e1ff] bg-white/80
                                            px-3.5 sm:px-4 py-2.5 sm:py-3
                                            text-sm text-[#1d1730]
                                            focus:border-[#8B3BFF] outline-none
                                        "
                  />
                </div>

                {/* الإيميل */}
                <div>
                  <label className="text-xs sm:text-sm mb-1 block font-semibold text-[#2b1552]">
                    البريد الإلكتروني
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                                            w-full rounded-2xl border border-[#e8e1ff] bg-white/80
                                            px-3.5 sm:px-4 py-2.5 sm:py-3
                                            text-sm text-[#1d1730]
                                            focus:border-[#8B3BFF] outline-none
                                        "
                  />
                </div>

                {/* الجوال */}
                <div>
                  <label className="text-xs sm:text-sm mb-1 block font-semibold text-[#2b1552]">
                    رقم الجوال (اختياري)
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="966+ 5x xxx xxxx"
                    className="
                                            w-full rounded-2xl border border-[#e8e1ff] bg-white/80
                                            px-3.5 sm:px-4 py-2.5 sm:py-3
                                            text-sm text-[#1d1730]
                                            focus:border-[#8B3BFF] outline-none
                                        "
                  />
                </div>

                {/* الرسالة */}
                <div>
                  <label className="text-xs sm:text-sm mb-1 block font-semibold text-[#2b1552]">
                    نبذة عن المشروع / الفكرة
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="احكِ لنا عن مشروعك أو المشكلة اللي تواجهها…"
                    className="
                                            w-full rounded-2xl border border-[#e8e1ff] bg-white/80
                                            px-3.5 sm:px-4 py-2.5 sm:py-3
                                            text-sm text-[#1d1730]
                                            resize-none
                                            focus:border-[#8B3BFF] outline-none
                                        "
                  />
                </div>

                {/* زر الإرسال */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                                        w-full rounded-full
                                        bg-gradient-to-r from-[#8B3BFF] via-[#7A1CD1] to-[#0F0A34]
                                        text-white font-semibold text-sm sm:text-base
                                        py-2.5 sm:py-3 mt-2
                                        shadow-[0_18px_45px_-22px_rgba(45,0,100,0.75)]
                                        transition-transform hover:scale-[1.03] active:scale-[0.98]
                                        disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100
                                    "
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                </button>

                <p className="text-[10px] sm:text-[11px] text-center text-[#8d84ab] mt-2">
                  معلوماتك تُستخدم للتواصل فقط، ولن نشاركها مع أي طرف ثالث.
                </p>
              </form>
            </div>

            {/* هيرو الديسكتوب */}
            <div className="order-1 lg:order-2 relative text-right hidden sm:block">
              <div
                aria-hidden
                className="
                                    pointer-events-none
                                    absolute
                                    left-[-120px]
                                    top-1/2
                                    -translate-y-1/2
                                    hidden sm:block
                                    opacity-[0.13]
                                "
              >
                <img
                  src="/phone-handset.png"
                  alt=""
                  className="
                                        w-[380px] md:w-[380px] lg:w-[380px]
                                        h-auto
                                        rotate-[-12deg]
                                    "
                />
              </div>

              <div className="relative max-w-xl ml-auto space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-[#4a2f86] shadow-[0_10px_30px_-20px_rgba(36,0,77,0.5)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#8B3BFF]" />
                  <span>ذكاء اصطناعي · رؤية حاسوبية</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold leading-snug text-[#2b1552]">
                  جاهزين نسمع فكرتك،
                  <span className="block text-[#5c3fb5] mt-1">
                    ونعطيك خطوات عملية وواضحة.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#4f4475] leading-relaxed">
                  نشتغل معك على المنتج اللي في بالك خطوة بخطوة...
                </p>

                <ul className="text-sm text-[#6c628f] leading-relaxed space-y-1">
                  <li>• توضّح لنا الفكرة أو التحدّي اللي تواجهه.</li>
                  <li>• نراجع التفاصيل ونبني فهم مشترك للمشكلة.</li>
                  <li>• نرجع لك باقتراح يناسب احتياجك ويكون قابل للتطبيق.</li>
                </ul>

                <p className="text-xs sm:text-sm text-[#8a80ad]">
                  اكتب بأسلوبك وببساطة؛ دورنا نفهمك ونحوّل فكرتك إلى خطة واضحة
                  قابلة للتنفيذ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
