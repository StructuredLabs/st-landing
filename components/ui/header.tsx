'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { TbLogs } from "react-icons/tb"
import { MdOutlinePodcasts } from "react-icons/md"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: 'https://docs.structuredlabs.com' },
]

const products = [
  {
    name: 'Blog',
    description: 'Check out our blog for cool articles, fresh ideas, and the latest news.',
    href: 'https://structuredlabs.substack.com/',
    icon: TbLogs
  },
  {
    name: 'Podcasts',
    description: 'Tune into our podcasts for fun chats, expert interviews, and deep dives into various topics.',
    href: '/podcast',
    icon: MdOutlinePodcasts
  }
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Banner at the top of the page */}
      <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          <a href="https://techcrunch.com/startup-battlefield/company/structured/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            {/* TechCrunch Logo */}
            <img
              src="/images/investors/tc.png" // Use your preferred TechCrunch logo URL
              alt="TechCrunch Logo"
              className="h-4 w-6 mr-2" // Adjust size and spacing as needed
            />
            <strong className="font-semibold">Structured chosen as one of TechCrunch Disrupt 2024's top 200 startups.</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            See More&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            {/* <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" /> */}
          </button>
        </div>
      </div>


      {/* Header section */}
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1 p-1.5">
              <span className="sr-only">Structured</span>
              <img
                alt=""
                src="https://cdn.prod.website-files.com/65d4d703fd133afa1bee8167/65d4da523a7af018c0b99c71_TransparentLogo.png"
                className="h-9 w-auto"
              />
            </a>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 focus:outline-none">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} 
                  target={item.name === 'Docs' ? '_blank' : '_self'} 
                  rel={item.name === 'Docs' ? 'noopener noreferrer' : undefined} 
              className="text-md  leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
            <Popover className="relative focus:outline-none">
              <PopoverButton className="flex items-center gap-x-1 text-md  leading-6 text-gray-900 focus:outline-none">
                Resources
                <ChevronDownIcon aria-hidden="true" className="h-3 w-3 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div className="flex-auto">
                        <a
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        href={item.href} className="block  text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a href="https://app.structuredlabs.com/" className="hidden lg:block lg:text-md lg: lg:leading-6 lg:text-gray-900">
              Log in
            </a>
            <a
              href="https://cal.com/structured/30min"
              target='_blank'
              className="rounded-md bg-slate-900 px-3 py-2 text-md  text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Book a Demo
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-6">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://cdn.prod.website-files.com/65d4d703fd133afa1bee8167/65d4da523a7af018c0b99c71_TransparentLogo.png"
                  className="h-8 w-auto"
                />
              </a>
              <a
                href="https://cal.com/structured/30min"
                target='_blank'
                className="ml-auto rounded-md bg-blue-600 px-3 py-2 text-md  text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book a Demo
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <Disclosure as="div" className="-mx-3 border-none">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-gray-900 hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-md  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <div className="py-6 border-none">
                  <a
                    href="https://app.structuredlabs.com/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}