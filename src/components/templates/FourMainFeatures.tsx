import { Section } from '../layout/Section';
import { TypographyH2, TypographyP1 } from '../Text';
import { VerticalFeatureRow } from '../VerticalFeatureRow';

const FourMainFeatures = () => (
  <Section
    yPadding="py-16"
    title={
      <>
        <TypographyH2 className="text-balance">
          Industry-leading Platform Delivering Best-in-Class Advisory Experience
        </TypographyH2>
      </>
    }
    description="Syncap's platform leverages artificial intelligence and agentic workflow to streamline and optimize the entire M&A process, from deal sourcing and execution to due diligence and closing. Our end-to-end M&A tech stack enables Syncap to provide comprehensive, data-driven M&A advisory at an unprecedented scale for SMBs."
  >
    <VerticalFeatureRow
      title="Intelligent Deal Knowledge Base & Data Room"
      description={
        <>
          <TypographyP1>
            <strong>Instant Visibility:</strong> &nbsp;Direct insight into your
            deal&apos;s progress, including timelines, buyer interactions, and
            key deliverables.
          </TypographyP1>
          <TypographyP1>
            <strong>Elevated Experience:</strong> &nbsp;Smoothen interaction
            among seller, advisor, and prospective buyers, enhancing deal
            outcomes.
          </TypographyP1>
        </>
      }
      image="/assets/images/llm-knowledgebase-dataroom.png"
      imageAlt="llm-knowledgebase-dataroom"
    />
    <VerticalFeatureRow
      reverse
      title="AI-Driven Analytics for Strategic Investor Matching"
      description={
        <>
          <TypographyP1>
            <strong>Extensive Buyer & Investor Network:</strong> &nbsp;Access
            the most relevant, vetted institutional buyers and investors.
          </TypographyP1>
          <TypographyP1>
            <strong>Synergy Identification:</strong> &nbsp;Data analytics
            spotlights the most synergistic partners based on operational
            compatibility and transaction history.
          </TypographyP1>
        </>
      }
      image="/assets/images/ai-powered-investor-matching.png"
      imageAlt="ai-powered-investor-matching"
    />
    <VerticalFeatureRow
      title="Unparalleled Advisor Access for Comprehensive Deal Support"
      description={
        <>
          <TypographyP1>
            <strong>Sector-focused Expertise:</strong> &nbsp;Represented by M&A
            experts specialized in your industry for negotiation and strategic
            advice on all deal fronts.
          </TypographyP1>
          <TypographyP1>
            <strong>Strategic Advisory:</strong> &nbsp;Tailored support in
            transition planning, company presentation, and financial
            structuring.
          </TypographyP1>
        </>
      }
      image="/assets/images/client-advisor-touchpoints.png"
      imageAlt="client-advisor-touchpoints"
    />
    <VerticalFeatureRow
      reverse
      title="Deal Management Platform Optimizing Visibility & Efficiency"
      description={
        <>
          <TypographyP1>
            <strong>Step-by-Step Guidance:</strong> &nbsp;Navigate material
            preparation, meetings, due diligence, and closing with control and
            transparency.
          </TypographyP1>
          <TypographyP1>
            <strong>Interactive Engagement:</strong> &nbsp;Communicate with
            advisors at every step of the process from onboarding to deal
            closing.
          </TypographyP1>
        </>
      }
      image="/assets/images/workflow-management.png"
      imageAlt="workflow-management"
    />
  </Section>
);

export { FourMainFeatures };
