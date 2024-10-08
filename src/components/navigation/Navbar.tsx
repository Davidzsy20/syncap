import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/Button';
import { Section } from '@/components/layout/Section';
import { TypographyH6 } from '@/components/Text';

import { Logo } from '../templates/Logo';
import { NavbarMenu } from './NavbarMenu';
import { NavbarTwoColumns } from './NavbarTwoColumns';

const Navbar = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo />}>
      <NavbarMenu />
      {/* <Link href="/pricing">
        <TypographyH6
          text="Pricing"
          className="rounded-md px-2 py-1 font-normal text-gray-700 hover:bg-gray-200 active:bg-gray-300"
        />
      </Link> */}
      <Button variant="transparent">
        <Link href="/company">
          <TypographyH6 text="Company" />
        </Link>
      </Button>
      <Button variant="transparent">
        <Link href="/refer-a-business">
          <TypographyH6 text="Refer a Business" />
        </Link>
      </Button>
      <Button variant="solid">
        <Link href="https://workspace.syncap.ai/auth">
          <h1 className="font-normal text-gray-100">Member Sign In</h1>
        </Link>
      </Button>
    </NavbarTwoColumns>
  </Section>
);

export default Navbar;
