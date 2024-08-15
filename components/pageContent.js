import {
  ServerIcon,
  ChartBarIcon,
  TicketIcon,
  ShareIcon,
  PresentationChartLineIcon,
  BellAlertIcon,
  QuestionMarkCircleIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  ClockIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

// ---------------
// Home Page
// ---------------

export const heroPageTitle = "Semantic layer for reliable business metrics";
export const heroPageSubtitle =
  "Define, manage, and scale your critical metrics seamlessly. Eliminate discrepancies and empower data-driven decisions.";

export const heroPageImageUrl = "images/hero.png";
export const featuresHomePageTitle = "Achieve Metric Consistency Across Teams";
export const featuresHomePageSubtitle =
  "Unify definitions of key metrics like Revenue, CAC, and MRR. Ensure every department speaks the same data language.";

export const featuresHomePage = [
  {
    name: "Single Source of Truth",
    description:
      "Centralize all metric definitions, ensuring every team accesses consistent and accurate data.",
    href: "https://docs.structuredlabs.com/",
    icon: ServerIcon,
  },
  {
    name: "One-Click Integration",
    description:
      "Seamlessly connect Structured to your data warehouse like Google BigQuery with just one click.",
    href: "https://docs.structuredlabs.com/",
    icon: ChartBarIcon,
  },
  {
    name: "Integrated Ticketing System",
    description:
      "Manage data requests and discrepancies efficiently within the platform, streamlining collaboration.",
    href: "https://docs.structuredlabs.com/",
    icon: TicketIcon,
  },
];

export const features2SectionTag = "Comprehensive Tools";
export const features2SectionTitle = "Empower Your Data Teams";
export const features2SectionSubtitle =
  "Leverage our library of pre-built metric templates or craft custom metrics tailored to your business needs.";
export const features2SectionImageUrl = "images/features2.png";
export const features2 = [
  {
    name: "Seamless Connectivity",
    description:
      "Integrate with multiple data sources effortlessly, ensuring all your data is in sync.",
    icon: ShareIcon,
  },
  {
    name: "Robust Metrics Library",
    description:
      "Access a vast collection of pre-built metrics to kickstart your analytics journey.",
    icon: ChartBarIcon,
  },
  {
    name: "Collaborative Dashboards",
    description:
      "Share insights and dashboards across teams to foster a unified understanding.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Proactive Alerts",
    description:
      "Receive instant notifications on metric anomalies to address issues promptly.",
    icon: BellAlertIcon,
  },
  {
    name: "AI-Powered Queries",
    description:
      "Ask questions in plain English and get precise answers, simplifying data exploration.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Guided Onboarding",
    description:
      "Our AI assistant ensures a smooth setup, getting your team up and running in no time.",
    icon: CpuChipIcon,
  },
];

// ---------------
// Features Page
// ---------------

export const featuresPageSubtitle =
  "Set up in minutes. Define consistent metrics, eliminate discrepancies, and accelerate data-driven decisions with ease.";
export const featuresPageSection1ImgUrl = "images/datasources.png";
export const featuresPageSectionTag = "Effortless Onboarding";
export const featuresPageSectionTitle = "Streamlined Workflow";
export const featuresPageSectionSubtitle =
  "With Structured, unify metric definitions, automate governance, and empower your teams to make confident decisions.";

export const featuresPageSection1 = [
  {
    name: "Real-Time Data Sync",
    description:
      "Ensure your metrics are always up-to-date by syncing data from multiple sources in real-time.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Automated Documentation",
    description:
      "Structured automatically generates and updates documentation, fostering transparency and understanding.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Secure & Compliant",
    description:
      "Advanced security measures safeguard your data, ensuring compliance with industry standards.",
    icon: LockClosedIcon,
  },
];

export const featuresPageSection2Tag = "Designed for Clarity";
export const featuresPageSection2Title = "Eliminate Data Discrepancies";
export const featuresPageSection2Subtitle =
  "Bid farewell to conflicting reports. Structured ensures every team accesses and trusts the same metrics.";

export const featuresPageSection2 = [
  {
    name: "Instant Anomaly Alerts",
    description:
      "Get immediate notifications for unusual metric fluctuations, allowing swift action.",
    href: "https://docs.structuredlabs.com/",
    icon: ClockIcon,
  },
  {
    name: "Efficient Data Requests",
    description:
      "Handle data-related inquiries seamlessly with our integrated ticketing system.",
    href: "https://docs.structuredlabs.com/",
    icon: TicketIcon,
  },
  {
    name: "Comprehensive Audit Logs",
    description:
      "Track changes and access histories to maintain transparency and accountability.",
    href: "https://docs.structuredlabs.com/",
    icon: ArrowPathIcon,
  },
];

export const integrationsPageTitle =
  "Seamless Integrations with Your Data Ecosystem";
export const integrationsPageSubtitle =
  "Structured connects effortlessly with your existing data warehouses and tools, ensuring a unified data environment.";

export const integrations = [
  { alt: "BigQuery", src: "images/bigquery.svg" },
  { alt: "Snowflake", src: "images/snowflake.svg" },
];

export const featuresPageSection3ImgUrl = "images/glossary.png";
export const featuresPageSection3Title = "Transform Data into Trusted Insights";
export const featuresPageSection3Subtitle =
  "Structured bridges information gaps, ensuring every stakeholder has access to accurate and consistent metrics.";

export const featuresPageSection3 = [
  {
    name: "Dynamic Data Exploration",
    icon: Cog6ToothIcon,
    description:
      "Dive deep into your metrics, slice and dice data to uncover actionable insights.",
  },
  {
    name: "Resolve Queries Swiftly",
    icon: CheckCircleIcon,
    description:
      "Address one-off data questions promptly without navigating multiple teams.",
  },
  {
    name: "Comprehensive Data Glossary",
    icon: ArrowsRightLeftIcon,
    description:
      "Maintain a unified glossary of metric definitions, fostering clarity across the organization.",
  },
];

// ---------------
// Pricing Page
// ---------------

export const pricingPageTitle = "Flexible Pricing for Teams of All Sizes";
export const pricingPageSubtitle =
  "Standardize your metrics, eliminate discrepancies, and empower confident decision-making.";

export const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Starter",
      id: "tier-starter",
      href: "https://app.structuredlabs.com/",
      price: { monthly: "$0", annually: "$0" },
      description: "Begin your journey towards metric consistency.",
      audience: "For small teams",
      features: [
        "Connect to 1 Data Warehouse",
        "Up to 5 Users",
        "Access to Basic Metrics Library",
        "Community Support",
      ],
      mostPopular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      id: "tier-professional",
      href: "https://app.structuredlabs.com/settings/account",
      price: { monthly: "$500", annually: "$4800" },
      description: "Enhanced features for growing businesses.",
      audience: "For mid-size companies",
      features: [
        "Connect to 3 Data Warehouses",
        "Up to 25 Users",
        "Custom Metric Definitions",
        "Integrated Ticketing System",
        "Email Support",
      ],
      mostPopular: false,
      buttonText: "Buy Plan",
    },
    {
      name: "Growth",
      id: "tier-growth",
      href: "https://app.structuredlabs.com/settings/account",
      price: { monthly: "$800", annually: "$7680" },
      description: "AI-powered tracking and analytics for serious growth",
      audience: "For high-growth businesses",
      features: [
        "20 Data Sources",
        "50 Users",
        "Hourly Data Refresh",
        "24 months of historical data",
        "Team sharing and collaboration features",
        "Basic Monitoring and Alerting",
        "Slack Support",
      ],
      mostPopular: true,
      buttonText: "Buy plan",
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "https://cal.com/structured/30min",
      price: { monthly: "Custom", annually: "Custom" },
      description: "Tailored solutions for large organizations.",
      audience: "For large enterprises",
      features: [
        "Unlimited Data Warehouse Connections",
        "Unlimited Users",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Integrations",
        "Advanced Security Features",
      ],
      mostPopular: false,
      buttonText: "Contact Sales",
    },
  ],
};

export const pricingFaqs = [
  {
    question: "How does Structured integrate with my existing data warehouse?",
    answer:
      "Structured offers one-click integration with popular data warehouses like Google BigQuery, Snowflake, and more. Simply connect your data source, and Structured will sync your data seamlessly.",
  },
  {
    question: "Can I customize metric definitions?",
    answer:
      "Absolutely. While Structured provides a library of pre-built metric templates, you can also create and customize metrics to align perfectly with your business needs.",
  },
  {
    question: "How does the ticketing system work?",
    answer:
      "Our integrated ticketing system allows teams to submit, track, and resolve data-related requests within the platform, ensuring efficient collaboration and resolution.",
  },
  {
    question: "Is my data secure with Structured?",
    answer:
      "Yes. We prioritize data security with advanced encryption, regular audits, and compliance with industry standards to ensure your data remains protected.",
  },
  {
    question: "What kind of support can I expect?",
    answer:
      "Support varies by plan. The Starter plan offers community support, the Professional plan includes email support, and the Enterprise plan provides a dedicated account manager and priority support.",
  },
  {
    question: "Can Structured handle multiple data sources?",
    answer:
      "Yes. Depending on your plan, you can connect multiple data warehouses and sources, ensuring a unified data environment.",
  },
  {
    question: "How does Structured handle version control for metrics?",
    answer:
      "Structured tracks every change made to metric definitions. With version control, you can review changes, revert to previous versions, and maintain a clear history of modifications.",
  },
  {
    question: "Is there a trial period available?",
    answer:
      "You can start with our Starter plan for free to explore Structured's capabilities. For advanced features, consider upgrading to a paid plan.",
  },
  {
    question: "How frequently is data updated in Structured?",
    answer:
      "Data sync frequency depends on your plan and data warehouse capabilities. Structured ensures timely updates to keep your metrics current.",
  },
  {
    question: "Can I get a demo before committing?",
    answer:
      "Certainly! Contact our sales team to schedule a personalized demo and see how Structured can benefit your organization.",
  },
];
