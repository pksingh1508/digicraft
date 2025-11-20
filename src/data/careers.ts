export type Career = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  salary: string;
  intro: string;
  responsibilities: string[];
  mustHave: string[];
  niceToHave: string[];
};

export const careers: Career[] = [
  {
    slug: "web-developer",
    title: "Senior Web Developer",
    team: "Engineering · Web Experience",
    location: "Off-site with client visits",
    type: "Full-time · Off-site",
    salary: "₹50,000–₹1,00,000 per month",
    intro:
      "Own high-performance marketing sites and web apps for our clients. You’ll pair with design and growth to ship fast, accessible, and SEO-friendly experiences.",
    responsibilities: [
      "Build performant, secure, accessible web apps with Next.js/React.",
      "Partner with design to implement component systems that scale.",
      "Instrument analytics, SEO, and A/B tests to improve conversion.",
      "Ship in sprints with code reviews, CI, and observability basics baked in.",
    ],
    mustHave: [
      "4+ years with modern React/TypeScript and component-driven UIs.",
      "Strong grasp of performance, accessibility, and SEO foundations.",
      "Comfort working across API integration, data fetching, and auth.",
    ],
    niceToHave: [
      "Experience with edge runtimes/CDN optimization.",
      "Familiarity with CMS or headless commerce stacks.",
    ],
  },
  {
    slug: "software-engineer",
    title: "Software Engineer (Platform)",
    team: "Engineering · Platform",
    location: "Off-site with on-site syncs",
    type: "Full-time · Off-site",
    salary: "₹50,000–₹1,00,000 per month",
    intro:
      "Design and deliver backend services our products rely on. You’ll architect APIs, data models, and reliability practices that keep client launches humming.",
    responsibilities: [
      "Design and build resilient services (Node/Express/Nest or similar).",
      "Model data for durability and query performance; design migrations safely.",
      "Add observability (logs, metrics, traces) and incident runbooks.",
      "Collaborate with web/mobile teams to unblock product delivery.",
    ],
    mustHave: [
      "3+ years building and deploying production services.",
      "Solid understanding of HTTP APIs, queues, caching, and security basics.",
      "Experience with relational databases (Postgres/MySQL).",
    ],
    niceToHave: [
      "Infra-as-code experience (Terraform/Pulumi).",
      "Background with event-driven architectures and streaming.",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design · Product & Brand",
    location: "Off-site with client workshops",
    type: "Full-time · Off-site",
    salary: "₹50,000–₹1,00,000 per month",
    intro:
      "Shape digital experiences end-to-end—from research to polished UI. You’ll work with engineers and PMs to bring product flows and marketing visuals to life.",
    responsibilities: [
      "Translate insights into flows, wireframes, and high-fidelity UI.",
      "Maintain and evolve multi-brand design systems with tokens/components.",
      "Prototype interactions and collaborate closely with engineering on handoff.",
      "Champion accessibility and inclusive design practices.",
    ],
    mustHave: [
      "Portfolio with shipped product work (web or mobile).",
      "Familiarity with Figma, tokens, and component libraries.",
      "Comfort facilitating critique and stakeholder reviews.",
    ],
    niceToHave: [
      "Motion/interaction prototyping experience.",
      "Exposure to design for performance and localization.",
    ],
  },
  {
    slug: "mobile-engineer",
    title: "Mobile App Developer",
    team: "Engineering · Mobile",
    location: "Off-site with release war-rooms",
    type: "Full-time · Off-site",
    salary: "₹50,000–₹1,00,000 per month",
    intro:
      "Ship reliable cross-platform mobile apps with thoughtful UX. You’ll partner with product and backend to build features that feel native and stay stable in the wild.",
    responsibilities: [
      "Develop and maintain React Native or Flutter apps with clean architecture.",
      "Own release pipelines, crash monitoring, and rollout strategies.",
      "Optimize performance and offline/low-connectivity scenarios.",
      "Collaborate with design to achieve pixel-accurate, accessible UI.",
    ],
    mustHave: [
      "3+ years building and shipping mobile apps (RN/Flutter/Native).",
      "Experience with app store processes, OTA updates, and analytics.",
      "Solid debugging skills across devices and environments.",
    ],
    niceToHave: [
      "Background in native modules or platform-specific integrations.",
      "Experience with feature flagging and experiment frameworks.",
    ],
  },
  {
    slug: "game-developer",
    title: "Game Developer",
    team: "Engineering · Emerging Experiences",
    location: "Off-site with demo days",
    type: "Contract-to-hire · Off-site",
    salary: "₹50,000–₹1,00,000 per month",
    intro:
      "Prototype playful, performant interactive experiences. You’ll build demos and lightweight games for campaigns, learning products, and partner experiments.",
    responsibilities: [
      "Build interactive experiences with Unity/Unreal or WebGL frameworks.",
      "Optimize assets and rendering pipelines for smooth performance.",
      "Collaborate with designers and storytellers to align mechanics and narrative.",
      "Ship playable builds and instrument analytics for engagement insights.",
    ],
    mustHave: [
      "Hands-on experience shipping games or interactive 3D experiences.",
      "Strong understanding of performance, physics, and input systems.",
      "Ability to rapidly prototype and iterate with cross-functional teams.",
    ],
    niceToHave: [
      "Experience with multiplayer or networking stacks.",
      "Interest in educational or marketing-focused games.",
    ],
  },
];

export function getCareer(slug: string) {
  return careers.find((role) => role.slug === slug);
}
