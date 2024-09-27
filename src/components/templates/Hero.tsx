import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { TypographyB2, TypographyH2, TypographyP1 } from '@/components/Text';

import { Background } from '../Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="py-6">
      <HeroOneButton
        title={
          <>
            <TypographyH2 text="Supercharge Deal-making with" className="" />
            <TypographyH2 text="AI-Powered Advisory Platform" className="" />
          </>
        }
        description={
          <TypographyP1
            className="text-balance text-black text-opacity-50"
            text={`Everything you need from accessing strategic capital to closing a M&A transaction, all on a single platform`}
          />
        }
        button={
          <Button className="mx-auto" variant={'primary'}>
            <Link href="/qualification/interest_in_syncap">
              <a>
                <div className="flex items-center">
                  <TypographyB2
                    className="text-primary-1050"
                    text="Get started"
                  />
                  <ArrowTopRightIcon className="ml-2 size-5" />
                </div>
              </a>
            </Link>
          </Button>
        }
      />
      <img
        src={'assets/images/figure-hero-1.png'}
        alt="hero-figure-1"
        className="w-2/3"
      />
    </Section>
  </Background>
);

export default Hero;
