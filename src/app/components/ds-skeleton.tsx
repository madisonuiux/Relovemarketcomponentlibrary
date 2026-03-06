import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export const DSSkeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse rounded-[var(--radius)] bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);

DSSkeleton.displayName = "DSSkeleton";
