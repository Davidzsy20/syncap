import LandingLayout from '@/components/layout/LandingLayout';
import PureTextLayout from '@/components/layout/PureTextLayout';
import termsOfServiceContent from '@/components/templates/TermsOfService';

const TOS = () => {
  return (
    <LandingLayout>
      <PureTextLayout
        header={termsOfServiceContent.header}
        subheaders={termsOfServiceContent.subheaders}
      />
    </LandingLayout>
  );
};

export default TOS;
