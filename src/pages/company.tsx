import LandingLayout from '@/components/layout/LandingLayout';
import PureTextLayout from '@/components/layout/PureTextLayout';
import CompanyContent from '@/components/templates/CompanyContent';

const Company = () => {
  return (
    <LandingLayout>
      <PureTextLayout
        header={CompanyContent.header}
        subheaders={CompanyContent.subheaders}
      />
    </LandingLayout>
  );
};

export default Company;
