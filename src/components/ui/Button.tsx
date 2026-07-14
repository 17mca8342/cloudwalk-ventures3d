"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "relative px-8 py-4 text-primary-foreground bg-primary overflow-hidden shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent before:to-accent/80 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        secondary: "px-8 py-4 text-primary bg-transparent border-2 border-primary/30 hover:bg-primary/10 hover:border-primary",
        outline: "px-8 py-4 text-foreground bg-transparent border-2 border-white/20 hover:bg-white/10 hover:border-white/30",
        ghost: "px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5",
        destructive: "px-8 py-4 text-destructive-foreground bg-destructive shadow-lg shadow-destructive/30 hover:shadow-xl hover:shadow-destructive/40",
        success: "px-8 py-4 text-green-50 bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 hover:border-green-500/50",
        cta: "relative px-8 py-4 text-accent-foreground bg-gradient-to-r from-accent to-accent/80 overflow-hidden shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-0.5 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:to-accent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }