import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Button } from '../Button';
import { CTABanner } from '../CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          <h2 className="font-semibold">
            Learn How Syncap Can Be Your Strategic Growth Partner
          </h2>
        </>
      }
      subtitle="Whether you are ready to sell, raise, or looking for answers, we’ll guide you with data and expertise specific to your industry"
      button={
        <Button
          className="flex items-center whitespace-nowrap"
          variant="primary"
        >
          <Link href="/form/userInquery">
            <p className="font-medium">Schedule an Initial Consultation</p>
            <ArrowTopRightIcon className="ml-1" />
          </Link>
        </Button>
      }
      image="/assets/images/bannerCTA.png"
      imageAlt="Learn How Syncap Can Be Your Strategic Growth Partner"
    />
  </Section>
);

export { Banner };
