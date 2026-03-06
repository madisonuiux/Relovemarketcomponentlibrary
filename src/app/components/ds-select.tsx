import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";
import { ChevronDown } from "lucide-react";

export interface DSSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const DSSelect = forwardRef<HTMLSelectElement, DSSelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-10 w-full appearance-none rounded-[var(--radius)] border border-border bg-input-background px-3 py-2 pr-10 text-foreground transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      </div>
    );
  }
);

DSSelect.displayName = "DSSelect";
