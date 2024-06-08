import type { ReactNode } from 'react';

import { TypographyP1 } from '@/components/Text';

type ISectionProps = {
  title?: ReactNode;
  description?: string;
  yPadding?: string;
  bgColor?: string;
  children: ReactNode;
  noPadding?: boolean;
  className?: string;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${props.bgColor ? `bg-${props.bgColor}` : ''} ${props.className}`}
  >
    <div
      className={`mx-auto flex max-w-screen-lg flex-col items-center ${
        props.noPadding ? '' : 'px-8'
      } ${props.yPadding ? props.yPadding : ''}`}
    >
      {(props.title || props.description) && (
        <div className="w-6/7 mb-12 text-center">
          {props.title && (
            <div className="text-3xl font-semibold text-gray-900 xl:text-4xl">
              {props.title}
            </div>
          )}
          {props.description && (
            <TypographyP1 className="text-balance text-center text-black text-opacity-50">
              {props.description}
            </TypographyP1>
          )}
        </div>
      )}

      {props.children}
    </div>
  </div>
);

export { Section };
