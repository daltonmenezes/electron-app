<h1 align="center"><img src="./images/bullet.svg" width="20" /> Running released unsigend apps</h1>

## Introduction

This document explains how to run your distributed unsigned apps, which is a common scenario when you are developing and can't afford to sign your apps yet.

## macOS
By default, macOS blocks the execution of unsigned apps. To bypass this:

1. **Download the app** and move it to the `Applications` folder (optional).
2. **When trying to open it, you will see a warning that the app cannot be opened.**
3. **Go to** `System Preferences` > `Security & Privacy` > `General`.
4. **In the "Allow apps downloaded from" section**, click `Open Anyway` for the blocked app.
5. If needed, run this command in the Terminal:
   ```sh
   xattr -c '/Applications/Your App.app'
   ```
   or
   ```sh
   xattr -d com.apple.quarantine '/Applications/Your App.app'
   ```
   or
   ```sh
   codesign --force --deep --sign - '/Applications/Your App.app'
   ```
6. The app should now open normally.

## Linux
On Linux, execution permission may be disabled by default. To run the app:

1. **Download the app** and move it to the desired folder.
2. **Open the Terminal** and navigate to the app's folder.
3. **Run the following command**:
   ```sh
   chmod +x YourApp
   ```
4. **Now you can run the app** by double-clicking it or running it from the Terminal.

## Windows
On Windows, SmartScreen may block the app. To run it:

1. **When trying to open the app, a Windows Defender SmartScreen warning will appear.**
2. Click `More info`.
3. Click `Run anyway`.

Now you can run your Electron app without issues!

