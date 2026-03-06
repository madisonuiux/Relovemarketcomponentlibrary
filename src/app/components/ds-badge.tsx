import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "warning" | "error" | "outline";
}

export const DSBadge = forwardRef<HTMLDivElement, DSBadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-secondary text-secondary-foreground",
      primary: "bg-primary text-primary-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      error: "bg-destructive text-destructive-foreground",
      outline: "border border-border bg-background text-foreground",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

DSBadge.displayName = "DSBadge";
