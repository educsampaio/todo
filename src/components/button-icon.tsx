import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { IconProps } from '@phosphor-icons/react'

const buttonIconVariants = cva(
  `inline-flex items-center justify-center cursor-pointer transition
  group disabled:opacity-50 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        primary: 'bg-green-base hover:bg-green-dark',
        secondary: 'bg-gray-200 hover:bg-pink-base',
        tertiary: 'bg-transparent hover:bg-gray-200',
      },
      size: {
        sm: 'w-6 h-6 p-1 rounded',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

const buttonIconIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-pink-base group-hover:text-white',
      tertiary: 'text-gray-300 group-hover:text-gray-400',
    },
    size: {
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

interface ButtonIconProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentType<IconProps>
}

export function ButtonIcon({
  variant,
  size,
  icon: Icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, className })}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ variant, size })} />
    </button>
  )
}
