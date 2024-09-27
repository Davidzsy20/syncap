import { Section } from '../layout/Section';
import { TypographyH2 } from '../Text';

const IntegrationAndSecurity = () => (
  <>
    <Section
      yPadding="py-16"
      title={
        <>
          <TypographyH2>
            Seamless Integration with Your Existing Workflow
          </TypographyH2>
        </>
      }
    >
      <img
        src="/assets/images/seamless-integration.png"
        alt="Seamless Integration with Your Existing Workflow"
        className="aspect-ratio max-h-[284px]"
      />
      <></>
    </Section>
  </>
);

export { IntegrationAndSecurity };
