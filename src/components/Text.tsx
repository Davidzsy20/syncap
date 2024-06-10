import clsx from 'clsx';

interface TypographyProps {
  text?: string;
  className?: string;
  children?: any;
}

export function TypographyH2(props: TypographyProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-3xl font-medium leading-tight tracking-tight lg:text-4xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyH3(props: TypographyProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-4xl font-medium leading-tight tracking-tight lg:text-5xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyH4(props: TypographyProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-4xl tracking-tight lg:text-5xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyH5(props: TypographyProps) {
  return (
    <p
      className={clsx(
        'md:3xl text-2xl leading-7 [&:not(:first-child)]:mt-6',
        props.className
      )}
    >
      {props.text}
      {props.children}
    </p>
  );
}

export function TypographyH6(props: TypographyProps) {
  return (
    <h1
      className={clsx(
        'scroll-m-20 text-lg tracking-tight md:text-xl',
        props.className
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyP0(props: TypographyProps) {
  return (
    <p
      className={clsx(
        'text-md lg:text-md pt-6 leading-tight tracking-tight',
        props.className
      )}
    >
      {props.text} {props.children}
    </p>
  );
}

export function TypographyP1(props: TypographyProps) {
  return (
    <p
      className={clsx(
        'xs:text-md text-md [&:not(:first-child)]:pt-6',
        props.className
      )}
    >
      {props.children}
    </p>
  );
}

export function TypographyP2(props: TypographyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-lg leading-7 lg:text-xl [&:not(:first-child)]:mt-6'
      )}
    >
      {props.text}
      {props.children}
    </p>
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
