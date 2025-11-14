import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type IconProps, SpinnerIcon } from '@phosphor-icons/react'
import { Skeleton } from './skeleton'

const buttonIconVariants = cva(
  `inline-flex items-center justify-center cursor-pointer transition
  group disabled:opacity-50 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        none: '',
        primary: 'bg-green-base hover:bg-green-dark',
        secondary: 'bg-gray-200 hover:bg-pink-base',
        tertiary: 'bg-transparent hover:bg-gray-200',
      },
      size: {
        sm: 'w-6 h-6 p-1 rounded',
      },
      handling: {
        true: 'pointer-events-none',
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
      none: '',
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
  isLoading?: boolean
  handling?: boolean
}

export function ButtonIcon({
  variant,
  size,
  icon: Icon,
  isLoading,
  handling,
  className,
  ...props
}: ButtonIconProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: 'none', size, className })}
      />
    )
  }

  return (
    <button
      className={buttonIconVariants({ variant, size, handling, className })}
      {...props}
    >
      {handling ? (
        <SpinnerIcon
          className={cx(
            buttonIconIconVariants({ variant, size }),
            'animate-spin'
          )}
        />
      ) : (
        <Icon className={buttonIconIconVariants({ variant, size })} />
      )}
    </button>
  )
}
