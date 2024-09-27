import LandingLayout from '@/components/layout/LandingLayout';
import PureTextLayout from '@/components/layout/PureTextLayout';
import privacyPolicyContent from '@/components/templates/PrivacyPolicy';

const Privacy = () => {
  return (
    <LandingLayout>
      <PureTextLayout
        header={privacyPolicyContent.header}
        subheaders={privacyPolicyContent.subheaders}
      />
    </LandingLayout>
  );
};

export default Privacy;
