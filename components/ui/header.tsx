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

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: 'https://docs.structuredlabs.com' },
]

const products = [
  {
    name: 'Blog',
    description: 'Check out our blog for cool articles, fresh ideas, and the latest news.',
    href: 'https://structuredlabs.substack.com/',
    icon: TbLogs
  }
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
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
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-slate-600" />
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
            <a href="https://cloud.structuredlabs.com/"                 
            target='_blank' rel="noopener noreferrer"
            className="hidden lg:block lg:text-md lg: lg:leading-6 lg:text-gray-900">
              Log in
            </a>
            <a
              href="https://cloud.structuredlabs.com/"
              target='_blank'
              className="rounded-md bg-slate-900 px-3 py-2 text-md  text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Sign Up
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
                href="https://cloud.structuredlabs.com"
                target='_blank' rel="noopener noreferrer"
                className="ml-auto rounded-md bg-slate-600 px-3 py-2 text-md  text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign Up
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
                    href="https://cloud.structuredlabs.com/"
                    target='_blank' rel="noopener noreferrer"
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