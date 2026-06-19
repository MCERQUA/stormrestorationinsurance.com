import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-storm-amber text-white shadow-[0_8px_24px_-8px_rgba(230,126,34,0.5)] hover:bg-storm-amber-dark hover:-translate-y-0.5 focus-visible:ring-storm-amber",
        navy: "bg-storm-navy text-white hover:bg-storm-navy-dark hover:-translate-y-0.5 focus-visible:ring-storm-navy",
        outline:
          "border-2 border-storm-navy text-storm-navy hover:bg-storm-navy hover:text-white focus-visible:ring-storm-navy",
        ghost: "text-storm-navy hover:bg-storm-cloud focus-visible:ring-storm-navy",
        white:
          "bg-white text-storm-navy hover:bg-storm-cloud hover:-translate-y-0.5 focus-visible:ring-white",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
};

export default function Button({
  href,
  variant,
  size,
  className,
  children,
  type = "button",
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export { buttonVariants };
