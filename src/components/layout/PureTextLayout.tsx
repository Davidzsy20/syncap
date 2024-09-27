import React from 'react';

import {
  TypographyH1,
  TypographyH2,
  TypographyP1Compact,
} from '@/components/Text';

interface PureTextLayoutProps {
  header: string;
  subheaders: { text: string; paragraphs: string[] }[];
}

const PureTextLayout: React.FC<PureTextLayoutProps> = ({
  header,
  subheaders,
}) => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-8">
      <TypographyH2 className="mb-8 text-center" text={header} />
      {subheaders.map((subheader, index) => (
        <div key={index} className="space-y-4">
          <TypographyH1 className="mt-12 text-balance" text={subheader.text} />
          {subheader.paragraphs.map((paragraph, pIndex) => (
            <TypographyP1Compact key={pIndex}>
              <span dangerouslySetInnerHTML={{ __html: paragraph }} />
            </TypographyP1Compact>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PureTextLayout;
