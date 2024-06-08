import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';

import { Button } from '@/components/Button';
import { TypographyB2 } from '@/components/Text';

import { Background } from '../background/Background';
import { Section } from './Section';

interface HeroProps {
  layout: 'vertical' | 'horizontal';
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  imageSrc: string;
  link: string;
  verticalPadding?: boolean;
}

const Hero = ({
  layout,
  title,
  description,
  buttonText,
  imageSrc,
  link,
  verticalPadding = true,
}: HeroProps) => (
  <Background color="bg-grey-100">
    <Section yPadding={verticalPadding ? 'pt-10 md:pt-16' : 'pt-10'}>
      <div
        className={`flex flex-col ${layout === 'horizontal' ? 'items-center text-center lg:flex-row lg:pb-20 lg:text-left' : ''}`}
      >
        <div className="flex-1">
          {title}
          {description}
          <Button className="mx-auto mt-4 lg:mx-0">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <TypographyB2 className="text-primary-1050" text={buttonText} />
                <ArrowTopRightIcon className="ml-2 size-5" />
              </div>
            </a>
          </Button>
        </div>
        <div className="mt-8">
          <img src={imageSrc} alt={imageSrc} className="lg:size-[360px]" />
        </div>
      </div>
    </Section>
  </Background>
);

export const HorizontalHero = ({
  title,
  description,
  buttonText,
  imageSrc,
  link,
}: Omit<HeroProps, 'layout'>) => (
  <Hero
    layout="horizontal"
    title={title}
    description={description}
    buttonText={buttonText}
    imageSrc={imageSrc}
    link={link}
    verticalPadding={true}
  />
);

export default Hero;
