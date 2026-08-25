import type { TNavLink, TService, TTechnology, TProject } from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  workHalaai,
  workHalafit,
  workBal,
  workNafis,
  workHalaflow,
  workHalasites,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "services", title: "الخدمات" },
  { id: "work", title: "أعمالنا" },
  { id: "about", title: "عنّا" },
  { id: "faq", title: "الأسئلة" },
  { id: "contact", title: "تواصل" },
];

const services: TService[] = [
  { title: "مواقع وتطبيقات ويب", icon: web },
  { title: "تطبيقات الجوال", icon: mobile },
  { title: "تجارب AR / VR و 3D", icon: creator },
  { title: "ألعاب Unreal Engine", icon: backend },
];

const technologies: TTechnology[] = [
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: redux },
  { name: "Node.js", icon: nodejs },
  { name: "Tailwind", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "MongoDB", icon: mongodb },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

// منتجات حقيقية من الاستوديو، بلقطات فعلية من كل منصة.
const projects: TProject[] = [
  {
    name: "هلا AI",
    description:
      "مساعد ذكي يدير محادثات عملائك على واتساب على مدار الساعة: يرد، يبيع، ويتكامل مع منصات التجارة مثل سلة وزد.",
    tags: [
      { name: "AI", color: "text-purple-700" },
      { name: "WhatsApp", color: "text-purple-600" },
      { name: "FastAPI", color: "text-purple-500" },
    ],
    image: workHalaai,
    sourceCodeLink: "https://nuqta-studio.com/#contact",
  },
  {
    name: "هلا سايتس",
    description:
      "منصة مواقع جاهزة للأعمال السعودية: موقع احترافي متعدد اللغات بلوحة تحكم عربية، يُسلَّم خلال أيام لا أسابيع.",
    tags: [
      { name: "Next.js", color: "text-purple-700" },
      { name: "CMS", color: "text-purple-600" },
      { name: "SEO", color: "text-purple-500" },
    ],
    image: workHalasites,
    sourceCodeLink: "https://site.halaai.sa",
  },
  {
    name: "هلا فلو",
    description:
      "منصة العمل المحوكم: الطلب يعرف طريقه بنفسه. مسارات اعتماد ومصفوفة صلاحيات بلا برمجة، لضبط العمليات الداخلية.",
    tags: [
      { name: "Next.js", color: "text-purple-700" },
      { name: "Workflow", color: "text-purple-600" },
    ],
    image: workHalaflow,
    sourceCodeLink: "https://nuqta-studio.com/#contact",
  },
  {
    name: "هلا نافِس",
    description:
      "منصة ذكاء المنافسات والمزادات: راقب الفرص الحكومية، طابقها مع نشاطك، واربح قبل منافسيك بتنبيهات فورية.",
    tags: [
      { name: "AI", color: "text-purple-700" },
      { name: "Data", color: "text-purple-600" },
    ],
    image: workNafis,
    sourceCodeLink: "https://nuqta-studio.com/#contact",
  },
  {
    name: "هلا فِت",
    description:
      "مدرّبك الشخصي بالذكاء الاصطناعي في كل عدّة: تطبيق جوال يتابع تمارينك ويتكلم معك ويعدّل خطتك لحظة بلحظة.",
    tags: [
      { name: "React Native", color: "text-purple-700" },
      { name: "AI", color: "text-purple-600" },
    ],
    image: workHalafit,
    sourceCodeLink: "https://nuqta-studio.com/#contact",
  },
  {
    name: "بال",
    description:
      "رفيق تعليمي ذكي للأطفال: طفلك يتعلّم ويتكلّم مع بال بمحادثات صوتية آمنة تناسب عمره وتنمّي لغته.",
    tags: [
      { name: "React Native", color: "text-purple-700" },
      { name: "Voice AI", color: "text-purple-600" },
    ],
    image: workBal,
    sourceCodeLink: "https://nuqta-studio.com/#contact",
  },
];

export { services, technologies, projects };
