<h1 align="center"><img src="./images/bullet.svg" width="20" /> Structure Overview</h1>

<br/>

## src/main

A folder containing the main process files and folders.

## src/renderer

A folder containing the renderer process files and folders. ReactJS lives here!

## src/preload
A folder containing the preload script that expose the API connection between main and renderer world by IPC in the context bridge.

## src/resources

A folder containing public assets and assets for the build process like icons.

> **Note**: all the content inside the **public** folder will be copied to the builded version as its.

## src/shared

A folder containing data shared between one or more processes, such as constants, configured libs, utilities, types, etc.
