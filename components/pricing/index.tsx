'use client';

import { useState } from 'react'
import {
  Radio,
  RadioGroup,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

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


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white">
      <main className="bg-white">
        {/* Pricing section */}
          <div className="relative isolate bg-white">
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base tracking-wide font-semibold leading-7 text-slate-600">Pricing</h1>
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
                  {/* @ts-ignore */}
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                  {(tier.name === 'Pro') && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
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
                {tier.name === 'Professional' && (
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
    
  )
}
