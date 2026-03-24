import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'btn-gradient rounded-lg px-4 py-2 h-9',
        ghost: 'hover:bg-white/5 hover:text-foreground text-muted-foreground',
        outline: 'border border-border bg-transparent hover:bg-white/5 text-foreground',
        hero: 'btn-gradient rounded-full px-6 py-3 text-base font-semibold',
        heroSecondary: 'btn-gradient-secondary rounded-full px-6 py-3 text-base font-normal',
        subtle: 'bg-white/[0.04] border border-white/[0.08] text-foreground hover:bg-white/[0.07] rounded-lg px-4 py-2',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-full px-4 text-xs',
        lg: 'h-11 rounded-full px-8 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
