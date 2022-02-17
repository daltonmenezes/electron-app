import { PropsWithChildren } from 'react'

import styles from './styles.module.sass'

export function Heading({ children }: PropsWithChildren<{}>) {
  return <h1 className={styles.heading}>{children}</h1>
}
