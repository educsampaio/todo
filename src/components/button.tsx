import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type IconProps } from '@phosphor-icons/react'
import { Text } from './text'

const buttonVariants = cva(
  `flex items-center justify-center cursor-pointer transition-colors
  rounded-lg group gap-2 disabled:opacity-50 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        primary: 'bg-gray-200 hover:bg-pink-light',
      },
      size: {
        md: 'h-14 px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const buttonIconVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-pink-base',
    },
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

const buttonTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<IconProps>
}

export function Button({
  variant,
  size,
  className,
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {Icon && <Icon className={buttonIconVariants({ variant, size })} />}

      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
