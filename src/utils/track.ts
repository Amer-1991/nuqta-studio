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

const SEND_TO = import.meta.env.VITE_GADS_SEND_TO as string | undefined;

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
