import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  className?: string;
};

const Background = ({ color, className, children }: IBackgroundProps) => (
  <div className={`${color} ${className}`}>{children}</div>
);

export { Background };
