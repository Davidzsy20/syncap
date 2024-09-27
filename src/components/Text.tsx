import clsx from 'clsx';

interface TypographyProps {
  text?: string;
  className?: string;
  children?: any;
}

export function TypographyH1(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'headerFont scroll-m-20 text-xl font-medium leading-tight tracking-tight lg:text-2xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </div>
  );
}

export function TypographyH2(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'headerFont scroll-m-20 text-3xl  leading-tight tracking-tight lg:text-4xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </div>
  );
}

export function TypographyH3(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'headerFont scroll-m-20 text-4xl leading-tight tracking-tight lg:text-5xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </div>
  );
}

export function TypographyH5(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'md:3xl text-2xl leading-7 [&:not(:first-child)]:mt-6',
        props.className
      )}
    >
      {props.text}
      {props.children}
    </div>
  );
}

export function TypographyH6(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'headerFont scroll-m-20 text-base tracking-tight md:text-lg',
        props.className
      )}
    >
      {props.text} {props.children}
    </div>
  );
}

export function TypographyP0(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'text-md lg:text-md leading-tight tracking-tight',
        props.className
      )}
    >
      {props.text} {props.children}
    </div>
  );
}

export function TypographyP1(props: TypographyProps) {
  return (
    <div
      className={clsx(
        'xs:text-md text-md [&:not(:first-child)]:pt-6',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function TypographyP1Compact(props: TypographyProps) {
  return (
    <div className={clsx('xs:text-md text-md', props.className)}>
      {props.children}
    </div>
  );
}

export function TypographyP2(props: TypographyProps) {
  return (
    <div
      className={clsx(props.className, 'text-base [&:not(:first-child)]:mt-6')}
    >
      {props.text}
      {props.children}
    </div>
  );
}

export function TypographyB2(props: TypographyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-lg font-medium leading-7 [&:not(:first-child)]:mt-6'
      )}
    >
      {props.text} {props.children}
    </p>
  );
}
