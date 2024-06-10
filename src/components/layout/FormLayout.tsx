import { HeaderLogo } from '@/components/Header';

export const FormLayout = ({ children }: any) => {
  return (
    <div className="px-8">
      <HeaderLogo />
      {children}
    </div>
  );
};
