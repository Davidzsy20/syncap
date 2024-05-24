import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';
import { TypographyB2, TypographyH3, TypographyP1 } from '@/components/Text';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { MeetingLink } from '../utils/AppConfig';

const Hero = () => (
  <Background color="bg-grey-100">
    <Section yPadding="pt-10 md:pt-20">
      <HeroOneButton
        title={
          <>
            <TypographyH3 text="Supercharge Deal-making with" className="" />
            <TypographyH3 text="AI-Powered Advisory Platform" className="" />
          </>
        }
        description={
          <TypographyP1
            className="text-balance text-black text-opacity-50"
            text={`Everything you need from accessing strategic capital to closing a M&A transaction, all on a single platform`}
          />
        }
        button={
          <Button className="mx-auto">
            <a href={MeetingLink} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <TypographyB2
                  className="text-primary-1050"
                  text="Get started"
                />
                <ArrowTopRightIcon className="ml-2 size-5" />
              </div>
            </a>
          </Button>
        }
      />
      <img src={'assets/images/figure-hero-1.png'} alt="hero-figure-1" />
    </Section>
  </Background>
);

export default Hero;
