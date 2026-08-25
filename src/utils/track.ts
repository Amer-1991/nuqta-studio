// تتبّع نقرات واتساب لإعلانات Google.
// وسم gtag نفسه محمّل في index.html بمعرّف الحساب.
// وسم التحويل (send_to) يأتي من متغير البيئة وقت البناء:
//   .env → VITE_GADS_SEND_TO=AW-XXXXXXXXXXX/AbCdEfGhIj
// يُنشأ من Google Ads: الأهداف ← التحويلات ← إجراء تحويل جديد
// (نقرة واتساب) ثم انسخ ما بعد send_to من كود الحدث.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// وسم إجراء التحويل "نقرة واتساب" من حساب Google Ads (قيمة عامة تظهر
// في مصدر أي صفحة تستخدمها، وليست سراً). متغير البيئة يتقدم عليها إن ضُبط.
const DEFAULT_SEND_TO = "AW-18084109324/6gF9CN7bxeccEIy4lq9D";
const SEND_TO = (import.meta.env.VITE_GADS_SEND_TO as string | undefined) || DEFAULT_SEND_TO;

export function trackWhatsAppClick(source: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
  if (SEND_TO) {
    window.gtag("event", "conversion", { send_to: SEND_TO });
  }
}
