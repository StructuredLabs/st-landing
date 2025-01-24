import {
  TicketIcon,
  BellAlertIcon,
  ClockIcon,
  BookOpenIcon,
  ArrowPathRoundedSquareIcon,
  ShieldCheckIcon,
  MagnifyingGlassCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

// ---------------
// Home Page
// ---------------

// pageContent.js
export const heroPageTitle = "Build analytics ";
export const heroPageEmphasis = "data apps ";
export const heroPageEnd = "at the speed of thought";

export const heroPageSubtitle =
  "Ingest, transform, and visualize your data in minutes. No heavy infrastructure. No steep learning curve.";

export const featuresHomePageTitle =
  "Structured is the fastest way to manage your data models, metrics, and dashboards.";
export const heroPageImageUrl = "/images/glossary.png";
export const featuresHomePageSubtitle =
  "Skip the modern data stack bloat and get straight to building something that works.";

export const featuresHomePage = [
  {
    name: "1-click Data Connections",
    description:
      "Connecting your data should be the easy part. Plug in your sources without the usual hassle, and get going in minutes.",
    href: "https://docs.structuredlabs.com/",
    icon: BookOpenIcon,
  },
  {
    name: "Built-in everything",
    description:
      "Forget duct-taping tools together. Ingest, clean, and transform your data right here. One tool, end-to-end.",
    href: "https://docs.structuredlabs.com/",
    icon: BellAlertIcon,
  },
  {
    name: "Production-ready apps",
    description:
      "Build real apps, not throwaway dashboards. Deploy with a single command, integrate anywhere, and scale when you’re ready.",
    href: "https://docs.structuredlabs.com/",
    icon: TicketIcon,
  },
];

export const features2SectionTag = "Metrics That Actually Work";
export const features2SectionTitle = "Get Control of Your Metrics, Finally";
export const features2SectionSubtitle =
  "Centralize, govern, and trust your metrics. Stop worrying about inconsistent numbers and start using data you can depend on.";
export const features2SectionImageUrl = "images/metrics.png";
export const features2 = [
  {
    name: "Unified Metrics Definitions",
    description:
      "A single source of truth for your metrics. Define KPIs like 'revenue' or 'active users' once, and trust they’re used consistently across teams and systems.",
    icon: BookOpenIcon,
  },
  {
    name: "Metric Lineage and Traceability",
    description:
      "See the full journey of every metric. Know exactly where your numbers come from, how they’re calculated, and how they’ve evolved over time.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "Version Control for Metrics",
    description:
      "Never lose track of metric changes. With full version history, you can revert back to previous definitions whenever needed, ensuring nothing gets lost in translation.",
    icon: ClockIcon,
  },
  {
    name: "Governance and Access Control",
    description:
      "Keep the right people in charge. Set up role-based permissions and approval workflows to make sure only authorized users can modify critical metrics.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Metric Catalog and Discovery",
    description:
      "A searchable library of all your metrics. Teams can easily find, understand, and reuse validated metrics, cutting down on duplication and confusion.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Automated Reporting and Documentation",
    description:
      "Stop writing manual reports. We automatically generate documentation on how your metrics are calculated and used, keeping everyone on the same page.",
    icon: DocumentDuplicateIcon,
  },
];

// ---------------
// Pricing Page
// ---------------

export const pricingPageTitle = "Pricing That Scales with You";
export const pricingPageSubtitle =
  "Get your metrics right from day one, eliminate discrepancies, and make better decisions with plans that grow with your business.";

export const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/user/month" },
    { value: "annually", label: "Annually", priceSuffix: "/user/year" },
  ],
  tiers: [
    {
      name: "Open Source",
      id: "tier-free",
      href: "https://github.com/StructuredLabs/preswald/",
      price: { monthly: "Free", annually: "Free" },
      description: "The essentials to get your metrics under control.",
      audience: "",
      features: [
        "Interactive components",
        "Custom branding",
        "Local deployment (self-hosting)",
        "Connect PostgreSQL/CSV",
      ],
      mostPopular: false,
      buttonText: "Free Forever",
    },
    {
      name: "Pro",
      id: "tier-pro",
      href: "https://console.structuredlabs.com/",
      price: { monthly: "$29", annually: "$299" },
      description: "More power and flexibility as your data needs grow.",
      audience: "",
      features: [
        "Basic authentication setup",
        "Advanced components",
        "Connect to data warehouses",
        "Deploy to major cloud providers",
      ],
      mostPopular: true,
      buttonText: "Buy Plan",
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "https://cal.com/structured/30min",
      price: { monthly: "Custom", annually: "Custom" },
      description: "Custom solutions built for large-scale organizations.",
      audience: "",
      features: [
        "Single Sign-On (SSO)",
        "On-premises deployment",
        "Custom components",
        "Support for high data volumes",
      ],
      mostPopular: false,
      buttonText: "Contact us",
    },
  ],
};
