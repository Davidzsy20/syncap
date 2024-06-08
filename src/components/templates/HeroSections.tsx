import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '@/components/Button';
import {
  TypographyB2,
  TypographyH2,
  TypographyH3,
  TypographyP1,
  TypographyP2,
} from '@/components/Text';
import { MeetingLink } from '@/utils/AppConfig';

import { Background } from '../Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { HorizontalHero } from '../layout/Hero';
import { Section } from '../layout/Section';

export const HomepageHero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="pt-10 md:pt-16">
      <HeroOneButton
        title={
          <>
            <TypographyH3 text="Supercharge Deal-making with" className="" />
            <TypographyH3 text="AI-Powered Advisory Platform" className="" />
          </>
        }
        description={
          <TypographyP2
            className="w-5/6 text-balance text-black text-opacity-50"
            text={`Everything you need from accessing strategic capital to closing a M&A transaction, all on a single platform`}
          />
        }
        button={
          <Button className="mx-auto">
            <Link href={'/form/userInquiry'}>
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
      <>
        <TypographyH2
          text="Investment Banking-as-a-Service Platform for SMBs"
          className=""
        />
      </>
    }
    description={
      <TypographyP1
        className="text-balance text-black text-opacity-50"
        text="Syncap helps you get the deal done with the best partner leveraging our industry-leading process management platform and top-notch M&A advisor network"
      />
    }
    buttonText="Get Started"
    imageSrc="/assets/images/business-owners-hero.png"
    link={MeetingLink}
  />
);

export const AdvisorsHero = () => (
  <HorizontalHero
    title={
      <>
        <TypographyH2
          text="Deliver Exceptional Transaction Outcomes and Client Experience at Scale"
          className=""
        />
      </>
    }
    description={
      <TypographyP1
        className="text-balance text-black text-opacity-50"
        text="Syncap helps you get the deal done with the best partner leveraging our industry-leading process management platform and top-notch M&A advisor network"
      />
    }
    buttonText="Get Started"
    imageSrc="/assets/images/advisors.png"
    link={MeetingLink}
  />
);

export const BuyersInvestorsHero = () => (
  <HorizontalHero
    title={
      <>
        <TypographyH2
          text="Meet Vetted, Committed Sellers Aligned with Your Investment Mandate"
          className=""
        />
      </>
    }
    description={
      <TypographyP1
        className="text-balance text-black text-opacity-50"
        text="Syncap helps you get the deal done with the best partner leveraging our industry-leading process management platform and top-notch M&A advisor network"
      />
    }
    buttonText="Apply for Membership"
    imageSrc="/assets/images/investors-hero.png"
    link={MeetingLink}
  />
);

export const IntermediariesHero = () => (
  <HorizontalHero
    title={
      <>
        <TypographyH2
          text="Your Connections, Our Commitment: Growing Success Together"
          className=""
        />
      </>
    }
    description={
      <TypographyP1
        className="text-balance text-black text-opacity-50"
        text="Join our referral network of advisors and professional service providers for engagement opportunities and access to pipeline management and analytics tools"
      />
    }
    buttonText="Apply for Membership"
    imageSrc="/assets/images/intermediaries-hero.png"
    link={MeetingLink}
  />
);
