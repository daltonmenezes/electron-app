<p align="center">
  <img src="./images/routing.svg" alt="" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> Routing</h1>

> **Note**: we are using **React Router DOM** under-the-hood, check the [docs](https://reactrouter.com/en/main) to get the most out of it

By default, **Router Dom** will not work properly with Electron and even you make it work in development environment, the production build works different, because in production the protocol will be `"file"` instead `"http"`, that's the reason you should not remove the `src/renderer/routes` folder and you should work with this router adapter!

That said, at `src/renderer/screens` create a folder named as `My` (just for learning purposes) and inside this folder an `index.tsx` with the following content:

```jsx
export function MyScreen() {
  return (
    <main>
      <h1>Hi from MyWindow! 😎</h1>
    </main>
  )
}
```
Then, at `src/renderer/screens/index.ts`, add the `MyScreen` component by its folder name `My`:
```jsx
export * from './Another'
export * from './About'
export * from './Main'
export * from './My'
```
Now, at `src/renderer/routes/index.tsx`, register the `MyScreen` to the `MyWindow` like [we did it](./CREATING_WINDOWS.md#creating-a-regular-window):
```js
import { WindowRouter, Route } from './modules'

import {
  AnotherScreen,
  AboutScreen,
  MainScreen,
  MyScreen,
} from 'renderer/screens'

export function AppRoutes() {
  return (
    <WindowRouter
      routes={{
        main: () => (
          <>
            <Route path="/" element={<MainScreen />} />
            <Route path="/anotherScreen" element={<AnotherScreen />} />
          </>
        ),
        about: () => <Route path="/" element={<AboutScreen />} />,
        myWindow: () => <Route path="/" element={<MyScreen />} />,
      }}
    />
  )
}
```
> **Note**: the **myWindow** property must match the id you gave to your window in [src/main](https://github.com/daltonmenezes/electron-app/blob/main/src/main/windows/Main/index.ts#L10)
So, all the routes in their method will have the basename as the window id (the property name), like `myWindow`.
> ```tsx
> myWindow: () => <Route path="/" element={<MyScreen />} />,
> ```
> Or
> ```tsx
> myWindow: () => (
>   <>
>     <Route path="/" element={<MyScreen />} />
>     <Route path="/second-screen" element={<MySecondScreen />} />
>   </>
> )
> ```
> 🎉
