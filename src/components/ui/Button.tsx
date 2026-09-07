import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = clsx(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "bg-[linear-gradient(135deg,hsl(var(--brand-copper)),hsl(var(--brand-navy)))] text-white shadow-[0_14px_34px_hsl(278_63%_26%/0.28)] hover:brightness-110",
    variant === "inverted" && "bg-white text-brand-navy hover:bg-white/90",
    variant === "secondary" && "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    variant === "ghost" && "text-brand-navy hover:text-brand-blue",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight size={16} aria-hidden />
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
