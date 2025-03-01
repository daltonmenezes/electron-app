<p align="center">
  <img src="./images/faq.svg" alt="a woman in a park sitting on a bench with her legs crossed and holding her laptop and with a bag at her side" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> FAQ - Frequently Asked Questions</h1>

## How can I fix the `electron-builder install-app-deps Windows Script Host` error?
If you are trying to use this boilerplate with npm instead pnpm on Windows, you will get that error related to `electron-builder install-app-deps`, so:
- Take a look at [this comment](https://github.com/ficonsulting/RInno/issues/44#issuecomment-992299431) to fix it!

## What should I do if the release action fails and the re-run failed jobs keep failing?
Go to the releases page in your repository and delete the draft release, then execute the action again but in the `re-run all jobs` mode.

## What are Autofill errors in the terminal?
If you see the following errors in the terminal, you can ignore them:
```bash
[97794:0301/202707.879855:ERROR:CONSOLE(1)] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[97794:0301/202707.879884:ERROR:CONSOLE(1)] "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
[97794:0301/202707.915918:ERROR:CONSOLE(2)] "Electron sandboxed_renderer.bundle.js script failed to run", source: node:electron/js2c/sandbox_bundle (2)
[97794:0301/202707.915942:ERROR:CONSOLE(2)] "TypeError: object null is not iterable (cannot read property Symbol(Symbol.iterator))", source: node:electron/js2c/sandbox_bundle (2)
```
It only happens when devtools panel is open and it's not an issue with your app.

For more information, take a look at [this issue](https://github.com/electron/electron/issues/41614).

