import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '../Button';
import { CTABanner } from '../CTABanner';
import { Section } from '../layout/Section';
import { TypographyH2, TypographyP2 } from '../Text';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          <TypographyH2 className="">
            Transformative Experience Leads to Higher Altitude
          </TypographyH2>
        </>
      }
      subtitle="Whether you are ready to sell, raise, or looking for answers, we’ll guide you with data-driven insights specific to your industry"
      button={
        <Button
          className="flex items-center whitespace-nowrap"
          variant="primary"
        >
          <Link
            href="/qualification/interest_in_syncap"
            className="flex flex-nowrap"
          >
            <TypographyP2 className="font-medium">
              Schedule a Free Consultation
            </TypographyP2>
            <ArrowTopRightIcon className="ml-1" />
          </Link>
        </Button>
      }
      image="/assets/images/footerCTA.png"
      imageAlt="Learn How Syncap Can Be Your Strategic Growth Partner"
    />
  </Section>
);

export { Banner };
