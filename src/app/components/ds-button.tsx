import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface DSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const DSButton = forwardRef<HTMLButtonElement, DSButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "text-primary-foreground hover:opacity-90 active:opacity-80",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[var(--neutral-200)] active:bg-[var(--neutral-300)]",
      outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      danger: "bg-destructive text-destructive-foreground hover:bg-[var(--error)]/90 active:bg-[var(--error)]/80",
    };
    
    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6",
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        style={variant === "primary" ? { background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)' } : undefined}
        {...props}
      />
    );
  }
);

DSButton.displayName = "DSButton";
