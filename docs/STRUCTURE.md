<p align="center">
  <img src="./images/understanding.svg" alt="a child with a lamp in the forest near a table with two chairs" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> Structure Overview</h1>

## src
<details>
  <pre>
src
├── main
│   ├── factories
│   │   ├── app
│   │   │   ├── index.ts
│   │   │   ├── instance.ts
│   │   │   └── setup.ts
│   │   ├── index.ts
│   │   ├── ipcs
│   │   │   └── register-window-creation.ts
│   │   └── windows
│   │       └── create.ts
│   ├── index.ts
│   └── windows
│       ├── About
│       │   ├── index.ts
│       │   └── ipcs
│       │       ├── index.ts
│       │       └── register-window-creation.ts
│       ├── Main
│       │   └── index.ts
│       └── index.ts
├── preload
│   ├── index.ts
│   └── ipcs
│       ├── index.ts
│       └── windows
│           ├── about
│           │   ├── create.ts
│           │   └── when-close.ts
│           └── index.ts
├── renderer
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Container
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Heading
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   └── index.ts
│   ├── index.html
│   ├── index.tsx
│   ├── routes.tsx
│   ├── screens
│   │   ├── About
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Another
│   │   │   └── index.tsx
│   │   ├── Main
│   │   │   └── index.tsx
│   │   └── index.ts
│   └── store
│       └── index.tsx
├── resources
│   ├── build
│   │   └── icons
│   │       ├── icon.icns
│   │       └── icon.ico
│   ├── public
│   │   └── illustration.svg
│   └── styles
│       ├── animations.sass
│       ├── globals.sass
│       └── resets.sass
└── shared
    ├── constants
    │   ├── environment.ts
    │   ├── index.ts
    │   ├── ipc.ts
    │   └── platform.ts
    ├── index.ts
    ├── types
    │   └── index.ts
    └── utils
        └── index.ts
  </pre>
</details>

## main

A folder containing the main process files and folders.

## renderer

A folder containing the renderer process files and folders. ReactJS lives here!

## preload
A folder containing the preload script that expose the API connection between main and renderer world by IPC in the context bridge.

## resources

A folder containing global styles, public assets and assets for the build process like icons.

> **Note**: all the content inside the **public** folder will be copied to the builded version as its.

## shared

A folder containing shareable data between the processes like constants, utils, types, etc.
