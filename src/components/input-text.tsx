import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { textVariants } from './text'

const inputTextVariants = cva(
  `border-b border-solid border-gray-200 focus:border-b-pink-base
  bg-transparent outline-none disabled:pointer-events-none`,
  {
    variants: {
      size: {
        md: 'pb-2 px-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<'input'>, 'size'> {}

export function InputText({ size, className, ...props }: InputTextProps) {
  return (
    <input
      type="text"
      className={cx(
        inputTextVariants({ size, className }),
        textVariants(),
        className
      )}
      {...props}
    />
  )
}
