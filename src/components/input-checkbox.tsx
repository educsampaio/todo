import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckIcon } from '@phosphor-icons/react'
import { Skeleton } from './skeleton'

const InputCheckboxWrapperVariants = cva(
  'inline-flex items-center justify-center cursor-pointer relative group'
)

const InputCheckboxVariants = cva(
  `
    cursor-pointer appearance-none peer flex items-center justify-center
    transition overflow-hidden disabled:pointer-events-none
  `,
  {
    variants: {
      variant: {
        none: '',
        default: `border-2 border-solid border-green-base hover:border-green-dark
        hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base
        group-hover:checked:border-green-dark group-hover:checked:bg-green-dark`,
      },
      size: {
        md: 'w-5 h-5 rounded-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const InputCheckboxIconVariants = cva(
  'absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block text-white',
  {
    variants: {
      size: {
        md: 'w-3 h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface InputCheckboxProps
  extends VariantProps<typeof InputCheckboxVariants>,
    Omit<React.ComponentProps<'input'>, 'size'> {
  isLoading?: boolean
}

export function InputCheckbox({
  variant,
  size,
  isLoading,
  className,
  ...props
}: InputCheckboxProps) {
  if (isLoading) {
    return (
      <Skeleton
        rounded="xs"
        className={InputCheckboxVariants({ variant: 'none', size, className })}
      />
    )
  }

  return (
    <label className={InputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={InputCheckboxVariants({ variant, size })}
        {...props}
      />
      <CheckIcon
        weight="bold"
        className={InputCheckboxIconVariants({ size })}
      />
    </label>
  )
}
