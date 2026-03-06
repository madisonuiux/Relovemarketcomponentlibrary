import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const DSRadio = forwardRef<HTMLInputElement, DSRadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={cn(
              "peer h-4 w-4 shrink-0 appearance-none rounded-full border border-border bg-background",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "checked:border-primary checked:border-[5px]",
              className
            )}
            {...props}
          />
        </div>
        {label && (
          <label
            htmlFor={radioId}
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

DSRadio.displayName = "DSRadio";
