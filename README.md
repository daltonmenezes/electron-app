<h1 align="center"><img src="./docs/images/bullet.svg" width="19" /> Electron App</h1>

<p align="center">💅 A <strong>ready-to-go</strong> with a <strong>well-thought-out structure</strong> Electron app boilerplate with ReactJS, TypeScript, CSS / SASS modules, SWC, Eslint, Prettier and more.
  <br/><br/>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=B181F1">
  </a>
  <!-- Version -->
  <a href="https://github.com/daltonmenezes/electron-app/releases">
    <img alt="releases url" src="https://img.shields.io/badge/version%20-1.0.0-1C1E26?style=for-the-badge&labelColor=1C1E26&color=F28BA9">
  </a>  
  <!-- License -->
  <a href="https://github.com/daltonmenezes/electron-app/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca">
  </a>
</p>

<p align="center">
  <a href="#electron-app">
    <img alt="preview" src="./docs/images/preview.png" >
  </a>
</p>

# <img src="./docs/images/bullet.svg" width="19" /> Features
- **Stands out**
  - 🔥 Ready-to-go with a well-thought-out structure
  - 🚀 Auto reload for main and Hot for renderer process
  - 🎉 Window and Screen routing included
  - 😎 Bridge already configured
  - 🙀 IPC communication included
  - 🍪 Absolute paths supported
- **Technologies**:
  - 🔋 Electron
  - 🔥 ReactJS
  - 🌎 React Router DOM
  - 🧐 React Developer Tools
  - 💙 TypeScript
  - 📦 Webpack
  - ⚡️ SWC as compiler
  - ✨ CSS / SASS modules
  - 💫 Eslint / Prettier / EditorConfig / Husky / lint-staged / Commitlint
  - 📦 Electron Builder

# <img src="./docs/images/bullet.svg" width="19" /> Usage

First, install the dependencies by running on the terminal:

```
yarn
```

That done, just run the project with the following command:

```
yarn dev
```

Now, look at the **app.config.js** file in the root directory, you should update some of that settings with your project branding, also you may notice some of that settings comes from the **package.json**, update it too as you need.

# <img src="./docs/images/bullet.svg" width="14" /> Distribution

### For all platforms

> [Check Electron Builder docs](https://www.electron.build/cli)

```
yarn dist
```

### For a specific one

```bash
yarn dist --mac
# OR
yarn dist --win
# OR
yarn dist --linux
```

The compiled apps will be available on the `dist` folder.

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
> Contributions are always welcome, but always **ask first**, — please — before work on a PR.

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on Patreon
- :star2: Giving a star on this repository

# License

[MIT © Dalton Menezes](https://github.com/daltonmenezes/electron-app/blob/main/LICENSE)
