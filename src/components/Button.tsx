import { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={twMerge('border px-2 py-1 bg-slate-300', className)}
      onClick={() => {
        throw new Error('Sentry Frontend Error')
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
