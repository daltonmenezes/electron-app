<h1 align="center"><img src="./docs/images/bullet.svg" width="19" /> Electron App</h1>

<p align="center">💅 A <strong>fast</strong> and <strong>ready-to-go</strong> with a <strong>well-thought-out structure</strong> Electron app boilerplate with ReactJS, TypeScript, CSS / SASS modules, Electron Vite, Eslint, Prettier, <strong>GitHub Action releases</strong> and more.
  <br/><br/>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=B181F1"/>
  </a>
  <!-- Version -->
  <a href="https://github.com/daltonmenezes/electron-app/releases">
     <img alt="releases url" src="https://img.shields.io/github/v/release/daltonmenezes/electron-app?style=for-the-badge&labelColor=1C1E26&color=F28BA9"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/daltonmenezes/electron-app/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca"/>
  </a>
</p>

<p align="center">
  <a href="#electron-app">
    <img alt="preview" src="./docs/images/preview.png" >
  </a>
</p>

# <img src="./docs/images/bullet.svg" width="19" /> Features
- **Stands out**
  - 🔥 Fast and Ready-to-go with a well-thought-out structure
  - 🚀 Auto reload for main and **Fast Refresh** for renderer process
  - 🎉 Window and Screen routing included
  - 😎 Preload (context bridge) already configured
  - 🙀 IPC communication example included
  - 🔮 GitHub Action releases with `Windows`, `Mac` and `Linux` binaries
  - 🔒 Source Code Protection support
  - 🍪 Absolute paths support
- **Technologies**:
  - 🔋 Electron
  - 🔥 ReactJS
  - 🌎 React Router DOM and Electron Router DOM
  - 🧐 React Developer Tools
  - 💙 TypeScript
  - 📦 Electron Vite
  - ✨ CSS / SASS modules
  - 💫 Eslint / Prettier / EditorConfig / Husky / lint-staged / Commitlint
  - 📦 Electron Builder
  - 🔮 action-electron-builder

<br/>

> :warning: If **Windows 7** and **8** support is important for your project, you should know that Electron in a version greater than 22x no longer supports it. You can read more about it [here](https://www.electronjs.org/docs/latest/breaking-changes#removed-windows-7--8--81-support). Therefore, you must downgrade Electron to the version cited in this context!

# <img src="./docs/images/bullet.svg" width="19" /> Usage

First, install the dependencies by running on the terminal:

```
yarn
```

That done, just run the project with the following command:

```
yarn dev
```

Now, look at the **package.json** file in the root directory, you should update some of that settings with your project branding.

# <img src="./docs/images/bullet.svg" width="14" /> Distribution

### For all platforms

> **Note**: Check [Electron Builder docs](https://www.electron.build/cli) for more knowledge

```
yarn build
```

### For a specific one

```bash
yarn build --mac
# OR
yarn build --win
# OR
yarn build --linux
```

The builded apps will be available on the `dist` folder.

# <img src="./docs/images/bullet.svg" width="14" /> Releasing
> **Note**: to be able to perform `auto-updates` you will need a `code signed app`, for this purpose you will need to configure it by yourself, so check the [electron-builder](https://www.electron.build/code-signing) and [action-electron-builder](https://github.com/samuelmeuli/action-electron-builder#code-signing) docs please to get know how to do this.

To release your app on a GitHub release with `Windows`, `Mac` and `Linux` binaries, you can perform the following commands:

```bash
git pull
yarn make:release
```

Then, enter the new version of your app, so it will produce the following binaries in a draft release from the action:
  - `Windows` &#8594; `zip (portable)`, `.exe`
  - `Mac` &#8594; `.zip (app)`, `.dmg`
  - `Linux` &#8594; `AppImage`, `freebsd`, `pacman`, `rpm`, `deb`

In this process, the action will be triggered and the previous command will open the `releases` and `actions` page in your browser. When the action is finished, you can click in the `releases` page and refresh it to see the draft release with the binaries, so you can edit it and release it for your users.

https://user-images.githubusercontent.com/1149845/156939675-5ea0c510-ddd3-4de7-b293-87d3697bd1a8.mp4

# <img src="./docs/images/bullet.svg" width="14" /> Source Code Protection
> This process is done via [v8 bytecode compilation](https://nodejs.org/api/vm.html#vm_script_createcacheddata), to get more knowledge about it, please, [check the Electron Vite docs](https://evite.netlify.app/guide/source-code-protection.html).

Use the `bytecodePlugin` from `electron-vite` to enable it in the **electron.vite.config.ts**:

```ts
import { defineConfig, bytecodePlugin } from 'electron-vite'

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, bytecodePlugin()]
  },

  preload: {
    // Note: you will get the following warning using bytecodePlugin in the preload script in production build: "The vm module of Node.js is deprecated in the renderer process and will be removed", is up to you to keep bytecodePlugin here. Also, keep following the Electron Vite docs for more updates about this plugin!
    plugins: [tsconfigPaths, bytecodePlugin()]
  },

  renderer: {
    // ...
  }
})
```
Also, `sandbox` should be `false` in `webPreferences` for the windows you are using a preload script like:
```ts
const window = createWindow({
  id: 'main',

  webPreferences: {
    preload: join(__dirname, '../preload/index.js'),
    sandbox: false,
  },
})
```

# <img src="./docs/images/bullet.svg" width="19" /> Documents
<table >
  <tr>
    <td valign="bottom">
      <p align="center">
        <a href="./docs/CREATING_WINDOWS.md">
          <img src="./docs/images/creating-windows.svg" height="96" align="center" />
        </a>
        <br/><br/>
        <a href="./docs/CREATING_WINDOWS.md">Creating Windows</a>
      </p>
    </td>
    <td valign="bottom">
      <p align="center">
        <a href="./docs/ROUTING.md">
          <img src="./docs/images/routing.svg" height="96" align="center" />
        </a>
        <br/><br/>
        <a href="./docs/ROUTING.md">Routing</a>
      </p>
    </td>
    <td valign="bottom">
      <p align="center">
        <a href="./docs/STRUCTURE.md">
          <img src="./docs/images/understanding.svg" height="96" align="center" />
        </a>
        <br/><br/>
        <a href="./docs/STRUCTURE.md">Structure Overview</a>
      </p>
    </td>
    <td valign="bottom">
      <p align="center">
        <a href="./docs/FAQ.md">
          <img src="./docs/images/faq.svg" height="96" align="center" />
        </a>
        <br/><br/>
        <a href="./docs/FAQ.md">FAQ - Frequently Asked Questions</a>
      </p>
    </td>
  </tr>
</table>

# Contributing
> **Note**: contributions are always welcome, but always **ask first**, — please — before work on a PR.

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on GitHub Sponsors or Patreon
- :star2: Giving a star on this repository

# License

[MIT © Dalton Menezes](https://github.com/daltonmenezes/electron-app/blob/main/LICENSE)
