// FormLayout.tsx
import React from 'react';

import { HeaderLogo } from '../Header';

interface FormLayoutProps {
  header: React.ReactNode;
  description: React.ReactNode;
  content: React.ReactNode;
}

export const FormLayout = ({
  header,
  description,
  content,
}: FormLayoutProps) => {
  return (
    <div className="px-8">
      <HeaderLogo />
      <div className="mb-8 text-center">
        {header}
        {description}
      </div>
      <div>{content}</div>
    </div>
  );
};

// import { HeaderLogo } from '../Header';

// export const FormLayout = ({ children }: any) => {
//   return (
//     <div className="px-8">
//       <HeaderLogo />
//       {children}
//     </div>
//   );
// };
