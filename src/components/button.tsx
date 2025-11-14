import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { SpinnerIcon, type IconProps } from '@phosphor-icons/react'
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
      handling: {
        true: 'pointer-events-none',
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
  handling?: boolean
}

export function Button({
  variant,
  size,
  handling,
  className,
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, handling, className })}
      {...props}
    >
      {Icon && !handling && (
        <Icon className={buttonIconVariants({ variant, size })} />
      )}
      {Icon && handling && (
        <SpinnerIcon
          className={cx(buttonIconVariants({ variant, size }), 'animate-spin')}
        />
      )}

      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
