import { useNavigate } from 'react-router-dom'

import { Container, Heading, Button } from 'renderer/components'

export function AnotherScreen() {
  const navigate = useNavigate()

  return (
    <Container>
      <Heading>Hello! 👋</Heading>

      <h2>It's another screen! ✨</h2>

      <Button onClick={() => navigate('/')}>Go back to Main screen</Button>
    </Container>
  )
}
