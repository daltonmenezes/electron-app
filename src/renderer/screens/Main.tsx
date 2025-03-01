import { useEffect } from 'react'

import { Container } from 'renderer/components/Container'
import { Heading } from 'renderer/components/Heading'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  useEffect(() => {
    App.sayHelloFromBridge()
  }, [])

  return (
    <Container>
      <Heading>Hi, {App.username || 'there'}! 👋</Heading>

      <h2>It's time to build something awesome! ✨</h2>
    </Container>
  )
}
