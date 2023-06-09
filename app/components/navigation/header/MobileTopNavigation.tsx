"use client";

import { Dialog, Disclosure } from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import useMobileMenuOpen from "./hooks/useMobileMenuOpen";

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

export default function MobileTopNavigation() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenuOpen();

  const hideMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen]);

  return (
    <Dialog
      as='div'
      className='lg:hidden'
      open={mobileMenuOpen}
      onClose={hideMenu}
    >
      <div className='fixed inset-0 z-10' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <div className='flex items-center justify-between'>
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
          <button
            type='button'
            className='-m-2.5 rounded-md p-2.5 text-gray-700'
            onClick={hideMenu}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              <Link
                href='/'
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                Home
              </Link>
              <Disclosure as='div' className='-mx-3'>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                      Product
                      <ChevronDownIcon
                        className={
                          (open ? "rotate-180 " : "") + "h-5 w-5 flex-none"
                        }
                        aria-hidden='true'
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='mt-2 space-y-2'>
                      {[...products, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Link
                href='/manifesto'
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                Manifesto
              </Link>
            </div>
            <div className='py-6'>
              <Link
                href='/login'
                className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
