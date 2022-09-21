<p align="center">
  <img src="./images/faq.svg" alt="a woman in a park sitting on a bench with her legs crossed and holding her laptop and with a bag at her side" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> FAQ - Frequently Asked Questions</h1>

## 🤔 How can I solve the `electron-builder install-app-deps Windows Script Host` error?
If you are trying to use this boilerplate with npm instead yarn on Windows, you will get that error related to `electron-builder install-app-deps`, so:
- Take a look at [this comment](https://github.com/ficonsulting/RInno/issues/44#issuecomment-992299431) to solve it!

## What should I do if the release action fails and the re-run failed jobs keep failing?
Go to the releases page in your repository and delete the draft release, then execute the action again but in the `re-run all jobs` mode.

## 🤔 How can I remove SASS support?
```bash
yarn remove sass 
```
