// import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
// import clsx from 'clsx';

// type IButtonProps = {
//   className?: string;
//   children: any;
//   variant?: 'primary' | 'secondary' | 'checkbox' | 'outline' | 'solid';
//   onClick?: any;
//   textColor?: string;
// };

// const Button = (props: IButtonProps) => {
//   const {
//     className,
//     variant = 'primary',
//     onClick,
//     textColor = 'text-primary-1050',
//   } = props;

//   // Map custom variants to Shadcn variants
//   const mappedVariant = (() => {
//     switch (variant) {
//       case 'primary':
//         return 'default';
//       case 'secondary':
//         return 'secondary';
//       case 'outline':
//         return 'outline';
//       case 'checkbox':
//         return 'ghost';
//       case 'solid':
//         return 'solid';
//       default:
//         return 'default';
//     }
//   })();

//   // Combine Shadcn's buttonVariants with your custom styles
//   const combinedStyles = clsx(
//     textColor,
//     className,
//     buttonVariants({ variant: mappedVariant }), // Correctly use buttonVariants here
//     variant === 'primary' ? 'border border-black' : '',
//     variant === 'secondary' ? 'bg-primary-200' : '',
//     variant === 'outline' ? 'border-gray border' : '',
//     variant === 'checkbox' ? 'hover:border-invert cursor-pointer border' : '',
//     variant === 'solid' ? 'bg-primary-1050' : ''
//   );

//   return (
//     <ShadcnButton
//       onClick={onClick}
//       className={combinedStyles}
//       variant={mappedVariant}
//     >
//       {props.children}
//     </ShadcnButton>
//   );
// };

// export { Button };

import clsx from 'clsx';

type IButtonProps = {
  className?: string;
  children: any;
  variant?: 'primary' | 'secondary' | 'checkbox' | any;
  onClick?: any;
  textColor?: string;
};

const Button = (props: IButtonProps) => {
  const {
    className,
    variant = 'primary',
    onClick,
    textColor = 'text-primary-1050',
  } = props;
  return (
    <button
      onClick={onClick}
      className={clsx(
        'cursor-pointer rounded-sm px-4 py-3 ',
        className,
        variant === 'primary'
          ? 'border border-black hover:bg-gray-100 focus:ring focus:ring-primary-600 active:bg-gray-600'
          : '',
        variant === 'secondary'
          ? 'bg-primary-200 hover:brightness-110 focus:ring focus:ring-primary-100 active:bg-primary-200'
          : '',
        variant === 'outline'
          ? 'border-gray border-primary-1050 text-primary-1050 hover:border-gray-500  focus:ring-primary-1050 active:border-gray-600'
          : '',
        variant === 'checkbox'
          ? 'hover:border-invert focus:ring-offset cursor-pointer border border-gray-500/20 hover:border-gray-500 focus:ring focus:ring-gray-500 active:border-gray-600'
          : '',
        variant === 'solid'
          ? 'focus:ring-offset bg-primary-1050 text-gray-100 hover:bg-primary-900 focus:ring-primary-500 active:bg-primary-800'
          : textColor
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
