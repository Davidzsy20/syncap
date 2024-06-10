import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import { TypographyP2 } from './Text';

type ICTABannerProps = {
  imageAlt: string | undefined;
  image: any;
  title: ReactNode;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center rounded-md p-6 text-center sm:justify-between sm:p-12 sm:text-left lg:flex-row">
      <div className="lg:w-1/2">
        <img
          className="object-contain"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
      <div className="flex flex-col space-y-6 text-xl md:text-2xl  lg:ml-8 lg:w-1/2">
        <div className="font-semibold text-gray-900">{props.title}</div>
        <TypographyP2 className="text-black text-opacity-50">
          {props.subtitle}
        </TypographyP2>
        <div className="mt-3 whitespace-nowrap sm:ml-2 sm:mt-0">
          {props.button}
        </div>
      </div>
    </div>
  );
};
export { CTABanner };
