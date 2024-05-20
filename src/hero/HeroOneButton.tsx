import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-col items-center text-center">
    {props.title}
    {props.description}
    <div className="mt-6">{props.button}</div>
  </header>
);

export { HeroOneButton };
