import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '@/components/Button';
import {
  TypographyB2,
  TypographyH3,
  TypographyH6,
  TypographyP1,
} from '@/components/Text';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarMenu } from '../navigation/NavbarMenu';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { MeetingLink } from '../utils/AppConfig';
import { Logo } from './Logo';

export const Hero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <NavbarMenu />
        <Link href="/pricing">
          <TypographyH6
            text="Pricing"
            className="rounded-md px-2 py-1 font-normal text-gray-700 hover:bg-gray-200 active:bg-gray-300"
          />
        </Link>
        <Link href="/company">
          <TypographyH6
            text="Company"
            className="rounded-md px-2 py-1 font-normal text-gray-700 hover:bg-gray-200 active:bg-gray-300"
          />
        </Link>
        <Link href="/connect">
          <TypographyH6
            text="Connect"
            className="rounded-md px-2 py-1 font-normal text-gray-700 hover:bg-gray-200 active:bg-gray-300"
          />
        </Link>
        <Button variant="solid">
          <Link href="/login">
            <h1 className="font-normal text-gray-100">Member Sign In</h1>
          </Link>
        </Button>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-10 md:pt-20">
      <HeroOneButton
        title={
          <>
            <TypographyH3 text="Supercharge Deal-making with" className="" />
            <TypographyH3 text="AI-Powered Advisory Platform" className="" />
          </>
        }
        description={
          <TypographyP1
            className="text-balance text-black text-opacity-50"
            text={`Everything you need to access strategic capital and close a M&A transaction, all on a single platform`}
          />
        }
        button={
          <Button className="mx-auto">
            <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <TypographyB2 text="Get started" />
                <ArrowTopRightIcon className="ml-2 size-5" />
              </div>
            </a>
          </Button>
        }
      />
      <img src={'assets/images/figure-hero-1.png'} alt="hero-figure-1" />
    </Section>
  </Background>
);

export default Hero;
