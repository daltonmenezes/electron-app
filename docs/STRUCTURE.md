<p align="center">
  <img src="./images/understanding.svg" alt="a child with a lamp in the forest near a table with two chairs" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> Structure Overview</h1>

## app.config.js

A file containing a few of settings of your app.

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
├── renderer
│   ├── assets
│   │   └── images
│   │       └── illustration.svg
│   ├── bridge
│   │   ├── index.ts
│   │   └── ipcs
│   │       ├── about-window
│   │       │   ├── create.ts
│   │       │   └── when-close.ts
│   │       └── index.ts
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
│   ├── routes
│   │   ├── index.tsx
│   │   └── modules
│   │       └── index.tsx
│   ├── screens
│   │   ├── About
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Another
│   │   │   └── index.tsx
│   │   ├── Main
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── store
│   │   └── index.tsx
│   └── styles
│       ├── animations.sass
│       ├── globals.sass
│       └── resets.sass
├── resources
│   └── icons
│       ├── icon.icns
│       └── icon.ico
└── shared
    ├── constants
    │   ├── environment.ts
    │   ├── index.ts
    │   ├── ipc.ts
    │   └── platform.ts
    ├── index.ts
    └── types
        └── index.ts
  </pre>
</details>

## main

A folder containing the main process files and folders.

## renderer

A folder containing the renderer process files and folders. ReactJS lives here!

## resources

A folder containing assets for the build process like icons.

> Note: all the content inside this folder will be copied to the packaged version.

## shared

A folder containing shareable data between the processes like constants, types, etc.
