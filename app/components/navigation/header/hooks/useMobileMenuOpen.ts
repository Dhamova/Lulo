import { atom, useAtom } from "jotai";

const menuFlagAtom = atom<boolean>(false);

export default function useMobileMenuOpen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(menuFlagAtom);

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
  };
}
