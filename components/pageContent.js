import {
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
export const heroPageTitle = "One  ";
export const heroPageEmphasis = "metrics ";
export const heroPageEnd = "layer to govern them all";

export const heroPageSubtitle =
  "Structured helps teams find, fix, and unify fragmented data models across messy datasets. Speed up reporting and trust your metrics with data governance that works.";

export const heroPageImageUrl = "images/glossary.png";
export const featuresHomePageTitle = "The Smarter Way to Manage Data Models";
export const featuresHomePageSubtitle =
  "Structured's AI builds and governs your semantic layer, eliminating bad metrics and drift.";

export const featuresHomePage = [
  {
    name: "1-click Data Connections",
    description:
      "Connecting your data should be the easy part. Plug in your sources without the usual hassle, and get going in minutes.",
    href: "https://docs.structuredlabs.com/",
    icon: BookOpenIcon,
  },
  {
    name: "Adaptive Data Modeling",
    description:
      "Your data changes, and our models automatically keep up. No manual updates, no headaches. Your models stay current, always.",
    href: "https://docs.structuredlabs.com/",
    icon: BellAlertIcon,
  },
  {
    name: "Metrics You Can Count On",
    description:
      "Dashboards that don’t break. Numbers that are always right. We make sure your metrics stay reliable, so your decisions can too.",
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
// Features Page
// ---------------

export const featuresPageSubtitle =
  "Set up in minutes. Define metrics that everyone trusts, eliminate inconsistencies, and speed up data-driven decisions without the headaches.";
export const featuresPageSection1ImgUrl = "images/datasources.png";
export const featuresPageSectionTag = "Effortless Onboarding";
export const featuresPageSectionTitle = "Streamlined Workflow";
export const featuresPageSectionSubtitle =
  "With Structured, unify your metric definitions, automate governance, and empower your teams to make smarter, faster decisions with confidence.";

export const featuresPageSection1 = [
  {
    name: "Real-Time Data Sync",
    description:
      "Keep your metrics fresh. Automatically sync data from all your sources in real-time, so you're never working with outdated numbers.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Automated Documentation",
    description:
      "Stop writing documentation manually. Structured auto-generates it for you, keeping everything transparent and easy to understand.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Secure & Compliant",
    description:
      "Your data is safe with us. We use advanced security protocols to protect your information and keep you compliant with industry regulations.",
    icon: LockClosedIcon,
  },
];

export const featuresPageSection2Tag = "Designed for Clarity";
export const featuresPageSection2Title = "Eliminate Data Discrepancies";
export const featuresPageSection2Subtitle =
  "No more conflicting reports. With Structured, everyone works from the same consistent metrics, ensuring your teams are aligned and confident in the data.";
export const featuresPageSection2ImgUrl = "images/entity_snowflake.png";

export const featuresPageSection2 = [
  {
    name: "Instant Anomaly Alerts",
    description:
      "Get notified immediately when something doesn’t look right. Structured flags unusual metric changes so you can fix issues fast.",
    href: "https://docs.structuredlabs.com/",
    icon: ClockIcon,
  },
  {
    name: "Efficient Data Requests",
    description:
      "Need data from another team? Use our integrated ticketing system to handle requests smoothly without chasing people down.",
    href: "https://docs.structuredlabs.com/",
    icon: TicketIcon,
  },
  {
    name: "Comprehensive Audit Logs",
    description:
      "Track every change with full audit logs, ensuring transparency and accountability in how metrics are created and adjusted.",
    href: "https://docs.structuredlabs.com/",
    icon: ArrowPathIcon,
  },
];

export const integrations = [
  { alt: "BigQuery", src: "images/bigquery.svg" },
  { alt: "Snowflake", src: "images/snowflake.svg" },
  { alt: "Postgres", src: "images/postgres.svg" },
];

export const featuresPageSection3ImgUrl = "images/glossary.png";
export const featuresPageSection3Title = "Transform Data into Trusted Insights";
export const featuresPageSection3Subtitle =
  "Structured bridges the gaps in your data flow, ensuring every stakeholder has access to accurate, reliable metrics they can trust.";

export const featuresPageSection3 = [
  {
    name: "Dynamic Data Exploration",
    icon: Cog6ToothIcon,
    description:
      "Explore your data intuitively. Slice and dice your metrics to uncover the insights that matter most for your business.",
  },
  {
    name: "Resolve Queries Swiftly",
    icon: CheckCircleIcon,
    description:
      "Answer ad-hoc data questions quickly, without the need to navigate through multiple teams and tools.",
  },
  {
    name: "Comprehensive Data Glossary",
    icon: ArrowsRightLeftIcon,
    description:
      "Keep everyone on the same page with a unified glossary of metric definitions, ensuring clarity and consistency across your organization.",
  },
];

// ---------------
// Bot Page
// ---------------

export const botPageSubtitle =
  "Get up and running in minutes. Automate your dbt workflows, ensure consistent model definitions, and streamline your data pipeline directly within GitHub.";
export const botPageSection1ImgUrl = "images/dbt_copilot.png";
export const botPageSectionTag = "Fast and Simple Setup";
export const botPageSectionTitle = "Automate Your dbt Workflow";
export const botPageSectionSubtitle =
  "With the dbt Copilot, you can automate your dbt project tasks, catch issues early, and collaborate seamlessly within GitHub.";

export const botPageSection1 = [
  {
    name: "Real-Time Model Sync",
    description:
      "Sync your dbt models and dependencies in real time across your GitHub repository. Keep your project up-to-date without manual syncing.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Automated PR Checks",
    description:
      "Ensure that every pull request in your dbt project passes automated checks for model consistency, freshness, and structure. Catch issues before they hit production.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Secure & Compliant Workflows",
    description:
      "Your dbt models are safe. Our GitHub app adheres to best-in-class security practices to protect your data and keep your workflows compliant with industry standards.",
    icon: LockClosedIcon,
  },
];

export const botPageSection2Tag = "Designed for Clarity";
export const botPageSection2Title = "Keep Your Models Consistent";
export const botPageSection2Subtitle =
  "Stop worrying about inconsistent models or failed builds. The dbt Copilot helps ensure every change is governed, documented, and aligned with best practices.";
export const botPageSection2ImgUrl = "images/dbt_model_check.png";

export const botPageSection2 = [
  {
    name: "Instant Model Validation",
    description:
      "Get instant feedback on model issues right in GitHub. The dbt Copilot flags schema discrepancies, performance bottlenecks, and validation errors before they go live.",
    href: "https://docs.dbtcopilot.com/",
    icon: ClockIcon,
  },
  {
    name: "Streamlined Data Requests",
    description:
      "Automate and track data requests between teams, keeping communication and collaboration smooth with integrated GitHub issues and pull requests.",
    href: "https://docs.dbtcopilot.com/",
    icon: TicketIcon,
  },
  {
    name: "Detailed Audit Logs",
    description:
      "Track every change to your dbt models with comprehensive audit logs, making it easy to understand who made what change and why.",
    href: "https://docs.dbtcopilot.com/",
    icon: ArrowPathIcon,
  },
];

export const botPageSection3ImgUrl = "images/dbt_insights.png";
export const botPageSection3Title = "Transform Models into Actionable Insights";
export const botPageSection3Subtitle =
  "With dbt Copilot, bridge the gap between your dbt models and stakeholders, ensuring everyone is aligned with accurate, real-time insights.";

export const botPageSection3 = [
  {
    name: "Interactive Model Exploration",
    icon: Cog6ToothIcon,
    description:
      "Dive deep into your dbt models directly from GitHub, and explore their dependencies, freshness, and performance in real time.",
  },
  {
    name: "Resolve Data Issues Quickly",
    icon: CheckCircleIcon,
    description:
      "Handle ad-hoc data issues quickly, leveraging GitHub issues and pull requests to keep your models consistent and error-free.",
  },
  {
    name: "Centralized Model Documentation",
    icon: ArrowsRightLeftIcon,
    description:
      "Maintain a unified, auto-generated glossary of your dbt models and metrics, ensuring that everyone in your organization has a clear understanding of what each model does.",
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
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Starter",
      id: "tier-starter",
      href: "https://app.structuredlabs.com/",
      price: { monthly: "$0", annually: "$0" },
      description: "The essentials to get your metrics under control.",
      audience: "Great for small teams starting with data governance.",
      features: [
        "Connect to 1 Data Warehouse",
        "Up to 5 Users",
        "Basic Metrics Library",
        "Community Support",
      ],
      mostPopular: false,
      buttonText: "Get Started Free",
    },
    {
      name: "Professional",
      id: "tier-professional",
      href: "https://app.structuredlabs.com/settings/account",
      price: { monthly: "$544", annually: "$6400" },
      description: "More power and flexibility as your data needs grow.",
      audience: "Perfect for mid-size companies needing customization.",
      features: [
        "Connect to 3 Data Warehouses",
        "Up to 25 Users",
        "Custom Metric Definitions",
        "Integrated Ticketing System",
        "Email Support",
      ],
      mostPopular: true,
      buttonText: "Choose Professional",
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "https://cal.com/structured/30min",
      price: { monthly: "Custom", annually: "Custom" },
      description: "Custom solutions built for large-scale organizations.",
      audience: "For enterprises that need unlimited access and control.",
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
    question: "How does Structured connect with my data warehouse?",
    answer:
      "Structured integrates with popular data warehouses like BigQuery and Snowflake in a few clicks. It’s built to make setup painless.",
  },
  {
    question: "Can I customize metrics?",
    answer:
      "Yes, you can fully customize metric definitions to fit your specific business goals, making sure everyone’s on the same page.",
  },
  {
    question: "What support can I expect?",
    answer:
      "Our Starter plan offers community support. Professional gets you email support, and Enterprise gives you priority access with a dedicated account manager.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Structured uses advanced encryption and follows industry standards to keep your data safe.",
  },
];
