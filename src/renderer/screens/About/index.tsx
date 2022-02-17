import { Container, Heading } from 'renderer/components'

import styles from './styles.module.sass'

export function AboutScreen() {
  return (
    <Container>
      <Heading>About! 😎</Heading>

      <h2 className={styles.subtitle}>
        Write an awesome text about your app here! ✨
      </h2>
    </Container>
  )
}
