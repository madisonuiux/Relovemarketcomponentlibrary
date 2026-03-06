import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "error";
}

export const DSProgress = forwardRef<HTMLDivElement, DSProgressProps>(
  ({ className, value, max = 100, variant = "default", ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const variants = {
      default: "",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-destructive",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out",
            variants[variant]
          )}
          style={
            variant === "default" 
              ? { width: `${percentage}%`, background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)' }
              : { width: `${percentage}%` }
          }
        />
      </div>
    );
  }
);

DSProgress.displayName = "DSProgress";
