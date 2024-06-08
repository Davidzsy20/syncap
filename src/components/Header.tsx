import Link from 'next/link';

import { Logo } from '@/components/templates/Logo';

export const HeaderLogo = () => {
  return (
    <div className="z-80 bg-gray flex w-full items-center justify-between px-4 py-6">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
};
