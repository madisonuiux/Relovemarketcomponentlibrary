import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const DSSwitch = forwardRef<HTMLInputElement, DSSwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className={cn(
              "peer h-6 w-11 shrink-0 appearance-none rounded-full bg-switch-background transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "checked:bg-primary",
              className
            )}
            {...props}
          />
          <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5 pointer-events-none shadow-sm" />
        </div>
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

DSSwitch.displayName = "DSSwitch";
