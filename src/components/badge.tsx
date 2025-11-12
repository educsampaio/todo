import React from 'react'
import { Text } from './text'
import { cva, type VariantProps } from 'class-variance-authority'
import { Skeleton } from './skeleton'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        none: '',
        primary: 'bg-green-light',
        secondary: 'bg-pink-light',
      },
      size: {
        sm: 'py-0.5 px-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

const badgeTextVariants = cva('', {
  variants: {
    variant: {
      none: '',
      primary: 'text-green-dark',
      secondary: 'text-pink-dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

const badgeSkeletonVariants = cva('', {
  variants: {
    size: {
      sm: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
  isLoading?: boolean
}

export function Badge({
  variant,
  size,
  isLoading,
  className,
  children,
  ...props
}: BadgeProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="full"
        className={badgeSkeletonVariants({ size, className })}
      />
    )
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  )
}
