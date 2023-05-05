"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import useMobileMenuOpen from "./hooks/useMobileMenuOpen";

export default function MobileTopNavigationBars() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenuOpen();

  const showMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, [setMobileMenuOpen]);

  return (
    <div className='flex lg:hidden'>
      <button
        type='button'
        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
        onClick={showMenu}
      >
        <span className='sr-only'>Open main menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
}
