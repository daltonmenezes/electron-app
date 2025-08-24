<h1 align="center"><img src="./images/bullet.svg" width="20" /> Releasing</h1>

> [!NOTE]
> to be able to perform `auto-updates` you will need a `code signed app`, for this purpose you will need to configure it by yourself, so check the [electron-builder](https://www.electron.build/code-signing) and [action-electron-builder](https://github.com/daltonmenezes/action-electron-builder#code-signing) docs please to get know how to do this.

> [!WARNING]
> to be able to perform releases from GitHub Actions, your repo **must have the necessary permissions**, so:
> - Go to `/settings/actions` in your repo and:
>   - in the `Actions permissions` section, select `Allow all actions and reusable workflows` option
>   - in the `Workflow permissions` section, select `Read and write permissions` option
>   - Save the changes

To release your app on a GitHub release with `Windows`, `Mac` and `Linux` binaries, you can perform the following commands:

```bash
git pull
pnpm make:release
```

Then, enter the new version of your app, so it will produce the following binaries in a `draft release` from the action:
  - `Windows` &#8594; `zip (portable)`, `.exe`
  - `Mac` &#8594; `.zip (app)`, `.dmg`
  - `Linux` &#8594; `AppImage`, `freebsd`, `pacman`, `rpm`, `deb`

In this process, the action will be triggered and the previous command will open the `releases` and `actions` page in your browser. When the action is finished, you can click in the `releases` page and refresh it to see the draft release with the binaries, so you can edit it and release it for your users.

https://user-images.githubusercontent.com/1149845/156939675-5ea0c510-ddd3-4de7-b293-87d3697bd1a8.mp4

