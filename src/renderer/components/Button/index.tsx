import React, { PropsWithChildren } from 'react'

import styles from './styles.module.sass'

type Button = PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>

export function Button({ children, className, ...restOfProps }: Button) {
  const combinedClassNames = [styles.button, className].join(' ')

  return (
    <button className={combinedClassNames} {...restOfProps}>
      {children}
    </button>
  )
}
