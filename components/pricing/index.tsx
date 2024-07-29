'use client';

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
} from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'Free',
      id: 'tier-free',
      href: 'https://app.structuredlabs.com/',
      price: { monthly: '$0', annually: '$0' },
      description: 'Daily tracking of your most important business metrics',
      audience: 'For individuals and small teams',
      features: [
            '3 Data Sources',
            '5 Users',
            'Daily Data Refresh',
            '12 months of historical data',
            'Team sharing and collaboration features',
            'Community Support',
        ],      
      mostPopular: false,
      buttonText: 'Get started',
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: 'https://app.structuredlabs.com/settings/account',
      price: { monthly: '$800', annually: '$7680' },
      description: 'AI-powered tracking and analytics for managing serious growth',
      audience: 'For high-growth businesses',
      features: [
        '10 Data Sources',
        '50 Users',
        'Hourly Data Refresh',
        '24 months of historical data',
        'Basic Monitoring and Alerting',
        'Slack Support',
      ],      
      mostPopular: true,
      buttonText: 'Buy plan',
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: 'https://cal.com/structured/30min',
      price: { monthly: 'Custom', annually: 'Custom' },
      description: 'A plan that scales with your rapidly growing business.',
      audience: 'For larger companies',
      features: [
        'Unlimited Data Sources',
        'Unlimited Users',
        'Real-time Data Refresh',
        'Unlimited historical data',
        'API Access with SLA',
        'Data Export & Import',
        'Advanced Alerts & Notifications',
        'Custom Integrations',
        'Dedicated 24/7 Support',
      ],
      mostPopular: false,
      buttonText: 'Contact sales',
    },
  ],
}

const faqs = [
  {
    question: "Can I switch between plans easily?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Any changes will take effect immediately, and your billing will be adjusted accordingly."
  },
  {
    question: "Is there a free trial for the paid plans?",
    answer: "While we don't offer a free trial for the paid plans, you can start with the Free plan to get a feel for our platform. When you're ready, upgrading to a paid plan is straightforward and gives you access to more features."
  },
  {
    question: "What happens to my data if I downgrade or cancel my plan?",
    answer: "If you downgrade or cancel, your data remains safe. However, access to certain features and the amount of historical data may be limited based on your new plan. You can always upgrade again to regain full access."
  },
  {
    question: "How does billing work for the paid plans?",
    answer: "Billing is straightforward. You can choose between monthly or annual billing cycles. Annual plans offer a discount compared to monthly payments. You can update your billing preferences at any time."
  },
  {
    question: "What kind of support can I expect?",
    answer: "Support varies by plan. The Free plan offers community support, while the Growth plan includes Slack support for more immediate help. The Enterprise plan provides dedicated 24/7 support for urgent and complex needs."
  },
  {
    question: "Can I customize my plan with add-ons?",
    answer: "Yes, you can enhance your plan with various add-ons like advanced security, custom integrations, and more frequent data syncs. These can be added as needed to better suit your business requirements."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, there are no hidden fees. All costs are transparent and outlined in the pricing details. Any additional services or add-ons will be clearly listed and priced separately."
  },
  {
    question: "How do I contact sales for the Enterprise plan?",
    answer: "You can contact our sales team by clicking the 'Contact sales' button on the Enterprise plan section. They'll assist you in customizing the plan to meet your specific needs and answer any questions you might have."
  },
  {
    question: "What is the impact of using real-time data refresh in the Enterprise plan?",
    answer: "Real-time data refresh ensures that you always have the most up-to-date information, which is crucial for making timely and informed business decisions. This feature can significantly improve your ability to respond to market changes and operational needs."
  },
  {
    question: "How does the Slack support in the Growth plan work?",
    answer: "Slack support allows you to quickly get in touch with our support team directly through Slack. This means faster response times and more efficient resolution of any issues you encounter, keeping your operations running smoothly."
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white">
      <main className="bg-white">
        {/* Pricing section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-blue-600">Pricing</h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Get real-time insights, smart analytics, and instant alerts. Make sharper decisions and watch your business grow.
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
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-blue-600 data-[checked]:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-blue-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8',
                )}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-blue-600' : 'text-gray-900',
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
                  {tier.name === 'Growth' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                  )}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                      : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                  )}
                >
                  {tier.buttonText}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="pt-6">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}
