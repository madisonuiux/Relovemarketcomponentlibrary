import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export interface DSAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
}

const iconMap = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
};

export const DSAlert = forwardRef<HTMLDivElement, DSAlertProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon = iconMap[variant];
    
    const variants = {
      default: "bg-background border-border",
      success: "bg-[#ecfdf5] border-success text-[#065f46]",
      warning: "bg-[#fffbeb] border-warning text-[#92400e]",
      error: "bg-[#fef2f2] border-destructive text-[#991b1b]",
      info: "bg-[#eff6ff] border-info text-[#1e40af]",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-[var(--radius-lg)] border-l-4 p-4",
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    );
  }
);

DSAlert.displayName = "DSAlert";

export const DSAlertTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn("mb-1 font-medium leading-none tracking-tight", className)}
        {...props}
      />
    );
  }
);

DSAlertTitle.displayName = "DSAlertTitle";

export const DSAlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
      />
    );
  }
);

DSAlertDescription.displayName = "DSAlertDescription";
