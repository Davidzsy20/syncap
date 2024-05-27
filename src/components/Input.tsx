import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          ' flex w-[300px] min-w-[300px] rounded-sm border border-input bg-transparent px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        required={props.required}
      />
    );
  }
);
Input.displayName = 'Input';

export const DropdownInput = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        'flex w-[300px] min-w-[300px] rounded-sm border border-input bg-transparent px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
DropdownInput.displayName = 'DropdownInput';

export const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, required, ...props }, ref) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = () => {
      // Handle the change event
    };

    return (
      <Textarea
        className={cn(
          'flex w-[300px] min-w-[300px] rounded-sm border border-input bg-transparent px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        required={required}
        onChange={handleChange as any}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Input };
