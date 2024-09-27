import clsx from 'clsx';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  helpText?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, helpText, ...props }, ref) => {
    return (
      <div className="relative flex flex-col">
        <label
          htmlFor={props.id}
          className={clsx(
            props.value ? 'opacity-100' : 'opacity-0',
            className,
            'text-sm font-medium transition-all duration-200 ease-in-out'
          )}
        >
          {props.label || props.placeholder}
        </label>
        <input
          type={type}
          className={cn(
            'border-b border-gray-700 bg-transparent px-3 py-2 text-base text-gray-700 placeholder:text-gray-500 focus:text-primary-2000 focus:border-primary-2000 focus:outline-none',
            className
          )}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          ref={ref}
          {...props}
        />
        {helpText && (
          <div className="mt-1 flex justify-between text-sm text-red-700">
            {helpText}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface DropdownInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  helpText?: string;
}

const DropdownInput = React.forwardRef<HTMLSelectElement, DropdownInputProps>(
  ({ className, children, helpText, ...props }, ref) => {
    return (
      <div className="relative flex w-full flex-col">
        <select
          className={cn(
            'border-b border-gray-700 bg-transparent px-2 py-2 text-lg md:text-xl text-gray-700 focus:bg-gray-200 focus:text-primary-2000 focus:border-primary-2000 focus:outline-none',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {helpText && (
          <div className="mt-1 flex justify-between text-sm text-gray-700">
            <span>{helpText}</span>
          </div>
        )}
      </div>
    );
  }
);
DropdownInput.displayName = 'DropdownInput';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helpText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, helpText, ...props }, ref) => {
    return (
      <div className="relative flex w-full flex-col">
        <textarea
          className={cn(
            'flex w-full border-b border-gray-700 bg-transparent px-2 py-2 text-lg text-gray-700 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {helpText && (
          <div className="mt-1 flex justify-between text-sm text-gray-700">
            <span>{helpText}</span>
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { DropdownInput, Input, Textarea };
