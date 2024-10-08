import clsx from 'clsx';

import LandingLayout from '@/components/layout/LandingLayout';
import { Meta } from '@/components/layout/Meta';
import { Section } from '@/components/layout/Section';
import { Banner } from '@/components/templates/Banner';
import { FourMainFeatures } from '@/components/templates/FourMainFeatures';
import { HomepageHero } from '@/components/templates/HeroSections';
import { IntegrationAndSecurity } from '@/components/templates/IntegrationAndSecurity';
import { OptInSection } from '@/components/templates/Section';
import {
  TypographyH1,
  TypographyH2,
  TypographyH6,
  TypographyP1,
} from '@/components/Text';
import { AppConfig } from '@/utils/AppConfig';

interface Prop {
  icon: string;
  title: string;
  description: string;
}
export const ValuePropBlock = ({ title, description }: Prop) => {
  return (
    <div className="flex flex-col items-center gap-6 text-balance rounded-lg border p-4 text-center lg:w-1/3">
      {/* <img
        src={icon}
        alt={title}
        className="aspect-ratio h-[64px] max-w-[64px]"
      /> */}
      <div>
        <TypographyH1 className="">{title}</TypographyH1>
        <TypographyP1 className="text-center text-black text-opacity-50">
          {description}
        </TypographyP1>
      </div>
    </div>
  );
};

export const EfficiencyBlock: React.FC<{
  percentage?: string;
  title: string;
  description: string;
  dark?: boolean;
}> = ({ percentage, title, description, dark = true }) => {
  return (
    <div className="grow-1 flex flex-col items-center bg-primary-1050 p-6 text-center">
      <span className="text-4xl font-bold lg:text-6xl">{percentage}</span>
      <TypographyH6 className={clsx(dark ? 'invert' : '', 'text-nowrap')}>
        {title}
      </TypographyH6>
      <TypographyP1 className={clsx(dark ? 'invert' : '', '"mt-2 text-left')}>
        {description}
      </TypographyP1>
    </div>
  );
};

const EfficiencyPropsSection = () => (
  <Section bgColor="primary-1050" yPadding="py-16 w-full">
    <div className="flex w-full flex-col divide-y lg:flex-row  lg:divide-y-0">
      <EfficiencyBlock
        title="Minimal Operational Disruption"
        description="Streamline document exchanges and scheduling coordination with proprietary communication management tools"
      />
      <EfficiencyBlock
        title="Accelerated Transaction Closing"
        description="Accelerate deal cycles with enhanced due diligence, outreach management, and streamlined feedback communication"
      />
      <EfficiencyBlock
        title="Optimized Visibility & Outcome"
        description="Minimize buyer or investor churn with automated reminders and streamlined due diligence communications"
      />
    </div>
  </Section>
);

const Index = () => (
  <LandingLayout>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HomepageHero />
    <OptInSection />
    <Section
      yPadding="py-16"
      title={
        <>
          <TypographyH2>
            Revolutionizing M&A Advisory & <br /> Capital Access for SMBs
          </TypographyH2>
        </>
      }
      description="Syncap is an AI-powered transaction-as-a-service platform providing M&A advisory and execution to SMBs at scale. Combining expertise of independent M&A bankers and cutting-edge platform technology, we transform investment banking with an outcome-driven approach  emphasizing visibility, efficiency, and alignment."
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <ValuePropBlock
          icon="/assets/images/tailored_process_illustration.png"
          title="Tailored Advisory from Independent M&A Experts"
          description="Receive unbiased, comprehensive M&A guidance from independent investment bankers with deep industry expertise"
        />
        <ValuePropBlock
          icon="/assets/images/streamlined_platform_illustration.png"
          title="AI-Powered M&A Process Management"
          description="Power up transaction visibility and efficiency with intelligent workflow, virtual data room, LLM knowledge base"
        />
        <ValuePropBlock
          icon="/assets/images/optimized_matching_illustration.png"
          title="Optimized Buyer and 
          Investor Matching"
          description="Access broader and more relevant capital partners with Syncap's AI-powered matching and extensive industry network"
        />
      </div>
    </Section>
    <FourMainFeatures />
    <EfficiencyPropsSection />
    <IntegrationAndSecurity />
    <Section
      yPadding="py-16"
      title={
        <>
          <TypographyH2>Your Data, Confidential and Secure</TypographyH2>
        </>
      }
    >
      <div className="flex flex-col gap-4  lg:flex-row">
        <ValuePropBlock
          icon="/assets/images/encrypted_workspace.png"
          title="End-to-end Encrypted Workspace"
          description="Protects your data within a secured, private workplace"
        />
        <ValuePropBlock
          icon="/assets/images/soc2.png"
          title="SOC 2 Data Security Compliance"
          description="Ensures data security to safeguard your company’s interests"
        />
        <ValuePropBlock
          icon="/assets/images/controlled_access.png"
          title="Multi-layered Access Control"
          description="Restricts information access to qualified and approved buyers/investors only"
        />
      </div>
    </Section>
    <Banner />
  </LandingLayout>
);

export default Index;
