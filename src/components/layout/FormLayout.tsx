import { HeaderLogo } from '@/components/Header';

export const FormLayout = ({ children }: any) => {
  return (
    <div className="pb-10">
      <HeaderLogo />
      {children}
    </div>
  );
};
