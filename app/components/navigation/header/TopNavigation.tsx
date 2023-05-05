"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import MobileTopNavigation from "./MobileTopNavigation";
import MobileTopNavigationBars from "./MobileTopNavigationBars";
import Link from "next/link";
import { usePathname } from "next/navigation";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function TopNavigation() {
  const pathname = usePathname();

  return (
    <header>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1 items-center'>
          <Link href='/' className='p-1.5'>
            <picture>
              <source
                srcSet='/DhamovaLogoWhite.svg'
                media='(prefers-color-scheme: dark)'
              />
              <Image
                className='h-7 w-auto'
                src='/DhamovaLogo.svg'
                alt='Lulo Logo'
                width={40}
                height={40}
              />
            </picture>
          </Link>
          <Link href='/'>
            <p className='font-mono font-bold text-xl'>lulo.gg</p>
          </Link>
        </div>
        <MobileTopNavigationBars />
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Link
            href='/'
            className='text-sm font-mono font-semibold leading-6 text-gray-900 dark:text-slate-100 dark:hover:text-white hover:font-bold'
          >
            Home
          </Link>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-mono font-semibold leading-6 text-gray-900 dark:text-slate-100 dark:hover:text-white'>
              Product
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href='/manifesto'
            className='text-sm font-mono font-semibold leading-6 text-gray-900 dark:text-slate-100 dark:hover:text-white hover:font-bold'
          >
            Manifesto
          </Link>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {!pathname.startsWith("/login") && (
            <Link
              href='/login'
              className='text-sm font-mono font-semibold leading-6 text-gray-900 dark:text-slate-100 dark:hover:text-white hover:font-bold'
            >
              Log In <span aria-hidden='true'>&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <MobileTopNavigation />
    </header>
  );
}
