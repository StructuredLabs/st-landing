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
import { pricingFaqs, pricingPageSubtitle, pricingPageTitle, pricing } from '../pageContent';

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
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-blue-600 data-[checked]:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:mx-0">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-blue-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8 flex flex-col h-full',
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
                  {(tier.name === 'Pro' || tier.name === 'Growth') && (
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
                {tier.name === 'Growth' && (
                  <p className="mt-auto pt-6 text-sm font-semibold leading-6 text-blue-600 text-center">
                    Our most popular plan!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {pricingFaqs.map((faq) => (
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
