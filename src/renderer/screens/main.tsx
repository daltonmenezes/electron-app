import { useEffect } from 'react'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  useEffect(() => {
    // check the console on dev tools
    App.sayHelloFromBridge()
  }, [])

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black/80 backdrop-blur-3xl">
      <h1 className="text-5xl text-secondary">
        Hi, {App.username || 'there'}!
      </h1>

      <h2 className="text-muted text-lg">
        It's time to build something awesome! ✨
      </h2>
    </main>
  )
}
