<p align="center">
  <img src="./images/faq.svg" alt="a woman in a park sitting on a bench with her legs crossed and holding her laptop and with a bag at her side" width="60%" />
</p>

<br />
<br />
<br />

<h1 align="center"><img src="./images/bullet.svg" width="20" /> FAQ - Frequently Asked Questions</h1>

## 🤔 How can I remove SASS support?
```bash
yarn remove sass sass-loader  
```

## 🤔 I don't like a very opinionated structure, how can I do this myself?
1. Delete all `src` folder content

2. In the **app.config.js** in the root folder, look for **ENTRY_POINTS**, which are the only files and path you should have to point to start, but you can change it, or if you don't want the **BRIDGE**, you can remove it and in the **webpack/main.config.js**, remove the **bridge** line in the **entry** property.
