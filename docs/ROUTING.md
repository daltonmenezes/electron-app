<p align="center">
  <img src="./images/routing.svg" alt="" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> Routing</h1>

> **Note**: we are using [Electron Router DOM](https://github.com/daltonmenezes/electron-router-dom) and [React Router DOM](https://reactrouter.com/en/main), check their docs to get the most out of it

By default, **Router Dom** will not work properly with Electron and even you make it work in development environment, the production build works different, because in production the protocol will be `"file"` instead `"http"`, that's the reason we should use `Electron Router DOM` library!

👉 **To follow this tutorial**, you should create a new window by IPC first, check the [About](https://github.com/daltonmenezes/electron-app/tree/main/src/main/windows/About) window example and [its usage](https://github.com/daltonmenezes/electron-app/blob/main/src/main/index.ts#L10) in the main process and [its usage in the preload script](https://github.com/daltonmenezes/electron-app/blob/main/src/preload). The id you should use to follow this tutorial in your window is `myWindow`!

That said, at `src/renderer/screens` create a folder named as `MyNew` (just for learning purposes) and inside this folder an `index.tsx` with the following content:

```jsx
export function MyNewScreen() {
  return (
    <main>
      <h1>Hi from MyWindow! 😎</h1>
    </main>
  )
}
```
Then, at `src/renderer/screens/index.ts`, add the `MyNewScreen` component by its folder name `MyNew`:
```jsx
export * from './MyNew'
export * from './Main'
export * from './About'
export * from './Another'
```
Now, at `src/renderer/routes.tsx`, register the `MyNewScreen` to the window you have created with its id (`myWindow`):
```js
import { Router, Route } from 'electron-router-dom'

import {
  MyNewScreen,
  MainScreen,
  AboutScreen,
  AnotherScreen,
} from 'renderer/screens'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/anotherScreen" element={<AnotherScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
      myWindow={<Route path="/" element={<MyNewScreen />} />}
    />
  )
}
```
> **Note**: the **myWindow** property must match the id you gave to your window in **src/main**, for example the [MainWindow id](https://github.com/daltonmenezes/electron-app/blob/main/src/main/windows/Main/index.ts#L10), but it should match the id of your window
So, all the routes in that prop name will have the basename as the window id, in our case it will be `myWindow`:
> ```tsx
> myWindow={<Route path="/" element={<MyNewScreen />} />}
> ```
> Or, for example, multiple screens in the same basename
> ```tsx
> myWindow={
>  <>
>    <Route path="/" element={<MyNewScreen />} />
>    <Route path="/second-screen" element={<MySecondScreen />} />
>  </>
> }
> ```
> 🎉

Finally, you will be able to use the [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate) hook from `React Router DOM` to navigate between multiple screens in the same basename **(window id)** or open a window using the preload script to make something similar to the [createAboutWindow IPC](https://github.com/daltonmenezes/electron-app/blob/main/src/preload/ipcs/windows/about/create.ts).
