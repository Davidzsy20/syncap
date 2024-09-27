import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { TypographyB2, TypographyH2, TypographyP2 } from '@/components/Text';
import { MeetingLink } from '@/utils/AppConfig';

import { Background } from '../Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { HorizontalHero } from '../layout/Hero';
import { Section } from '../layout/Section';

export const HomepageHero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="pt-6 md:pt-8">
      <HeroOneButton
        title={
          <>
            <TypographyH2 text="Supercharge Deal-making with" className="" />
            <TypographyH2 text="AI-Powered Advisory Platform" className="" />
          </>
        }
        description={
          <>
            <TypographyP2 className="w-5/6 text-balance text-black text-opacity-50">
              Everything you need from accessing strategic capital to closing a
              M&A transaction, all on a single platform
            </TypographyP2>
          </>
        }
        button={
          <Button className="mx-auto">
            <Link href="/qualification/interest_in_syncap">
              <div className="flex items-center">
                <TypographyB2
                  className="text-primary-1050"
                  text="Get started"
                />
                <ArrowTopRightIcon className="ml-2 size-5" />
              </div>
            </Link>
          </Button>
        }
      />
      <img
        className="pt-12"
        src={'assets/images/landing-hero.png'}
        alt="landing-hero"
      />
    </Section>
  </Background>
);

export const BusinessOwnerHero = () => (
  <HorizontalHero
    title={
      <TypographyH2>
        Investment Banking-as-a-Service Platform for SMBs
      </TypographyH2>
    }
    description={
      <TypographyP2 className="text-balance text-black text-opacity-50">
        Fuel your business growth and achieve your exit goals with seamless
        access to strategic capital and M&A expert support tailored to your
        unique needs
      </TypographyP2>
    }
    buttonText="Schedule a Free Consultation"
    imageSrc="/assets/images/business-owners-hero.png"
    link={MeetingLink}
  />
);

export const AdvisorsHero = () => (
  <HorizontalHero
    title={
      <TypographyH2>
        Deliver Exceptional Transaction Outcomes and Client Experience at Scale
      </TypographyH2>
    }
    description={
      <TypographyP2 className="text-balance text-black text-opacity-50">
        Connect with high-quality clients and streamline your advisory services
        with Syncap&apos;s AI-enhanced platform, designed to help you achieve
        outstanding transaction results efficiently
      </TypographyP2>
    }
    buttonText="Get Started"
    imageSrc="/assets/images/advisors-hero.png"
    link={MeetingLink}
  />
);

export const BuyersInvestorsHero = () => (
  <HorizontalHero
    title={
      <TypographyH2>
        Meet Vetted, Committed Sellers Aligned with Your Investment Mandate
      </TypographyH2>
    }
    description={
      <TypographyP2 className="text-balance text-black text-opacity-50">
        Whether you are looking to grow your business through acquisition, find
        the perfect investment opportunity, or outsource your deal sourcing, we
        have you covered
      </TypographyP2>
    }
    buttonText="Apply for Membership"
    imageSrc="/assets/images/investors-hero.png"
    link={MeetingLink}
  />
);

export const IntermediariesHero = () => (
  <HorizontalHero
    title={
      <TypographyH2>
        Your Connections, Our Commitment: Growing Success Together
      </TypographyH2>
    }
    description={
      <TypographyP2 className="text-balance text-black text-opacity-50">
        Join our referral network of advisors and professional service providers
        to collaborate on deals and connect with new clients
      </TypographyP2>
    }
    buttonText="Apply for Membership"
    imageSrc="/assets/images/intermediaries-hero.png"
    link={MeetingLink}
  />
);
