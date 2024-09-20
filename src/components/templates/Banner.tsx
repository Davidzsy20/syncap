import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '../Button';
import { CTABanner } from '../CTABanner';
import { Section } from '../layout/Section';
import { TypographyP2 } from '../Text';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          <h2 className="font-semibold">
            Transformative Experience Leads to Higher Altitude
          </h2>
        </>
      }
      subtitle="Whether you are ready to sell, raise, or looking for answers, we’ll guide you with data-driven insights specific to your industry"
      button={
        <Button
          className="flex items-center whitespace-nowrap"
          variant="primary"
        >
          <Link href="/form/userInquiry" className="flex flex-nowrap">
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
