import className from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { TypographyP2 } from './Text';

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

type IVerticalFeatureRowProps = {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useIsVisible(ref);
  const router = useRouter();

  return (
    <div
      className={className(
        'my-20 flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-8 transition-all duration-700 ease-in',
        props.reverse ? 'lg:flex-row-reverse' : '',
        show ? 'opacity-100' : 'opacity-10 translate-y-20'
      )}
      ref={ref}
    >
      <div className="flex max-w-[512px] flex-col items-center text-black text-opacity-50 lg:w-1/2">
        <h3 className="text-balance text-center text-2xl font-semibold md:text-3xl lg:text-left">
          {props.title}
        </h3>
        <TypographyP2>{props.description}</TypographyP2>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="aspect-ratio w-full"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
