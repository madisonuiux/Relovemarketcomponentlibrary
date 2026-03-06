import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const DSSpinner = forwardRef<HTMLDivElement, DSSpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizes = {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-12 w-12",
    };
    
    const borderWidths = {
      sm: "2px",
      md: "2px",
      lg: "3px",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full",
          sizes[size],
          className
        )}
        style={{
          background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%) border-box`,
          border: `${borderWidths[size]} solid transparent`,
          borderTopColor: "white",
        }}
        {...props}
      />
    );
  }
);

DSSpinner.displayName = "DSSpinner";
