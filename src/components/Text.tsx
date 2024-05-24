import clsx from 'clsx';

interface TyppgraphyProps {
  text?: string;
  className?: string;
  children?: any;
}
export function TypographyH3(props: TyppgraphyProps) {
  return (
    <h1
      className={clsx(
        props.className,
        'scroll-m-20 text-4xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-5xl'
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyH4(props: TyppgraphyProps) {
  return (
    <h1
      className={clsx(
        props.className,
        'scroll-m-20 text-4xl tracking-tight lg:text-5xl'
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyH5(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'md:3xl text-2xl leading-7 [&:not(:first-child)]:mt-6'
      )}
    >
      {props.text}
      {props.children}
    </p>
  );
}

export function TypographyH6(props: TyppgraphyProps) {
  return (
    <h1
      className={clsx(
        props.className,
        'scroll-m-20 text-lg tracking-tight md:text-xl'
      )}
    >
      {props.text} {props.children}
    </h1>
  );
}

export function TypographyP1(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'xs:text-md pt-6 leading-tight tracking-tight sm:text-lg lg:text-xl'
      )}
    >
      {props.text} {props.children}
    </p>
  );
}

export function TypographyP2(props: TyppgraphyProps) {
  return (
    <p
      className={clsx(
        props.className,
        'text-lg leading-7 [&:not(:first-child)]:mt-6'
      )}
    >
      {props.text}
      {props.children}
    </p>
  );
}

export function TypographyB2(props: TyppgraphyProps) {
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
