'use client';

import { useState } from 'react';
import {
  Radio,
  RadioGroup,
} from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

export const pricingPageTitle = "Pricing That Scales with You";
export const pricingPageSubtitle = "Get started for free and upgrade as your data needs grow. No credit card required.";

export const pricing = {
  frequencies: [
    { value: "monthly" as const, label: "Monthly", priceSuffix: "/user/month" },
    { value: "annually" as const, label: "Annually", priceSuffix: "/user/year" },
  ],
  tiers: [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "https://github.com/StructuredLabs/preswald/",
      price: { monthly: "Free", annually: "Free" },
      description: "Perfect for individuals or small non-commercial projects.",
      audience: "For personal or hobby use.",
      features: [
        "GitHub Login",
        "Standard components",
        "Structured domain support",
        "Connect PostgreSQL, CSV",
        "Deploy to Structured Cloud",
        "1 seat included",
        "5 GB data volume per app/month",
        "Custom branding",
        "Unlimited apps",
        "Community Slack support",
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
      audience: "For small to medium-sized teams and businesses.",
      features: [
        "GitHub Login",
        "Advanced components",
        "Custom domain support",
        "Connect to data warehouses",
        "Deploy to major cloud providers",
        "+$20/user for additional seats",
        "100 GB data volume per app/month",
        "Custom branding",
        "Unlimited apps",
        "Dedicated Slack Connect",
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
      audience: "For large organizations with complex needs.",
      features: [
        "Custom SSO/SAML Providers",
        "Custom components",
        "Custom domain support",
        "Connect to custom data sources",
        "On-premises deployment",
        "Unlimited seats",
        "Support for high data volumes",
        "Custom branding",
        "Unlimited apps",
        "Priority support with SLA",
      ],
      mostPopular: false,
      buttonText: "Contact us",
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [frequency, setFrequency] = useState<{ value: 'monthly' | 'annually'; label: string; priceSuffix: string }>(pricing.frequencies[0]);

  return (
    <div className="bg-white">
      <main className="bg-white">
        {/* Pricing section */}
        <div className="relative isolate bg-white">
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {pricingPageTitle}
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              {pricingPageSubtitle}
            </p>
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <RadioGroup
                  value={frequency}
                  onChange={setFrequency}
                  className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                >
                  {pricing.frequencies.map((option) => (
                    <Radio
                      key={option.value}
                      value={option}
                      className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-slate-600 data-[checked]:text-white"
                    >
                      {option.label}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="isolate mx-auto mt-10 grid max-w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0">
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'ring-2 ring-slate-600' : 'ring-1 ring-gray-200',
                    'rounded-3xl p-8 flex flex-col h-full',
                  )}
                >
                  <h2
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-slate-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8',
                    )}
                  >
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-4 text-sm leading-6 text-gray-600 font-bold">{tier.audience}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price[frequency.value]}
                    </span>
                    {(tier.name === 'Pro') && (
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        {frequency.priceSuffix}
                      </span>
                    )}
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-slate-600 text-white shadow-sm hover:bg-slate-500'
                        : 'text-slate-600 ring-1 ring-inset ring-slate-200 hover:ring-slate-300',
                      'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600',
                    )}
                  >
                    {tier.buttonText}
                  </a>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-slate-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.name === 'Pro' && (
                    <p className="mt-auto pt-6 text-sm font-semibold leading-6 text-slate-600 text-center">
                      Our most popular plan!
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
