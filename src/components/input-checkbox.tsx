import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckIcon } from '@phosphor-icons/react'

const InputCheckboxWrapperVariants = cva(
  'inline-flex items-center justify-center cursor-pointer relative group'
)

const InputCheckboxVariants = cva(
  `
    cursor-pointer appearance-none peer flex items-center justify-center border-2
    border-solid transition overflow-hidden border-green-base
    hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
    disabled:pointer-events-none
  `,
  {
    variants: {
      size: {
        md: 'w-5 h-5 rounded-xs',
      },
    },
    defaultVariants: {
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
    Omit<React.ComponentProps<'input'>, 'size'> {}

export function InputCheckbox({
  size,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={InputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={InputCheckboxVariants({ size })}
        {...props}
      />
      <CheckIcon
        weight="bold"
        className={InputCheckboxIconVariants({ size })}
      />
    </label>
  )
}
