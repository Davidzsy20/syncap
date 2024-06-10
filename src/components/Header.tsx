import Link from 'next/link';

import { Logo } from '@/components/templates/Logo';

export const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="z-80 bg-gray flex w-full items-center justify-between px-4 py-6"
    >
      <Logo />
    </Link>
  );
};
