# How-To Install Starter Kits in your Workbook

> ***Note:** The following is based on using the `pnpm dlx` command. If you are using regular node/npm, you should use `npx` instead of `pnpm dlx`.*

If there is a sample in your instructor's workbook that you want to pull into your own workbook, the easiest way to do that is through a Node package called [**tiged**](https://github.com/tiged/tiged#readme). Here's a **working example** of how to use it to [grab a subdirectory](https://github.com/tiged/tiged#specify-a-subdirectory) from your instructor's workbook:

1. Open the terminal in VS Code to the root of your student workbook.
1. Copy and paste the supplied command into the terminal.

    ```ps
    pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
    ```

1. When you press <kbd>Enter</kbd>, the starter kit will be downloaded to your computer in the location specified in the command.

> ***Warning:** The `--force` command will erase the existing contents of the destination folder, causing everthing in that folder to be replaced with the starter kit. It's included to allow you a fresh start and in case your instructor makes some last minute changes after you've already grabbed a copy.*

----

## How it Works

The [**tiged**](https://github.com/tiged/tiged#readme) package by Kevin Kivi is a fork of Rich Harris' [*degit*](https://github.com/Rich-Harris/degit) package (last updated in 2021).

> **Rich Harris is the creator of **Svelte**.* 

Here's a summary of the parts of the command, including the arguments sent into *tiged*.

```bash
$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\____________________________________/ \_______________________________________________/ \___________________/
//      |- Command to run               |- Instructor's source folder (on GitHub)        |- Your local destination folder
```

A more detailed explanation of the command would look like this:

```bash
$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\______/ \___/ \_____________/ \_____/ \_______/ \_________________/ \_________________/ \___________________/
// |    |          |          |       |             |                     |                     |- Destination folder
// |    |          |          |       |             |                     |- Instructor's sub-folder
// |    |          |          |       |             |- Name of Instructor's Repo
// |    |          |          |       |- GitHub Organization or User
// |    |          |          |- Force overwrite of existing files
// |    |          |- Disable caching of repo (so you grab the latest version)
// |    |- Command to run
// |- pnpm dlx is a Node package runner (alternative to npx)
```
