import { cn } from '@/lib/utils';

import { Button } from './Button';

export const CheckBox = ({ label, selected, onSelect, className }: any) => {
  return (
    <div className={cn(className, 'flex items-center space-x-2 py-2')}>
      <input
        onClick={onSelect}
        type="checkbox"
        // checked={selected}
        defaultChecked={selected}
        className="form-checkbox custom-checkbox size-5 cursor-pointer rounded-sm border-black focus:ring-transparent"
      ></input>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="attachment1"
          className="font-regular text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>{' '}
    </div>
  );
};

// add svg icon
export const CheckBoxButton = ({ classname, children, onSelect }: any) => {
  return (
    <Button className={cn(classname)} variant={'checkbox'} onClick={onSelect}>
      {children}
    </Button>
  );
};
