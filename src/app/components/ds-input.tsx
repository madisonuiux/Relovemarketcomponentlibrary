import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const DSInput = forwardRef<HTMLInputElement, DSInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-[var(--radius)] border border-border bg-input-background px-3 py-2 text-foreground transition-colors",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
    );
  }
);

DSInput.displayName = "DSInput";
