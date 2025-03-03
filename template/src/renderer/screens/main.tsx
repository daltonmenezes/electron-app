import { Terminal } from 'lucide-react'
import { useEffect } from 'react'

import {
  Alert,
  AlertTitle,
  AlertDescription,
} from 'renderer/components/ui/alert'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  useEffect(() => {
    // check the console on dev tools
    App.sayHelloFromBridge()
  }, [])

  const userName = App.username || 'there'

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <Alert className="mt-5 bg-transparent border-transparent text-accent w-fit">
        <AlertTitle className="text-5xl text-teal-400">
          Hi, {userName}!
        </AlertTitle>

        <AlertDescription className="flex items-center gap-2 text-lg">
          <Terminal className="size-6 text-fuchsia-300" />

          <span className="text-gray-400">
            It's time to build something awesome!
          </span>
        </AlertDescription>
      </Alert>
    </main>
  )
}
