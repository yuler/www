# VS Code

高效的使用编辑器，可以很好的提高工作效率。

从目前来看 [VS Code](https://code.visualstudio.com/) 已经的市场占有率已经很高了。

此教程内容参考了 FrontendMasters 的 [Visual Studio Code Can Do That?](https://frontendmasters.com/courses/customize-vs-code/)

# Introduction

VS Code 分为 **Stable** 和 **Insiders** 版本

## 安装 `code` 命令

启动 VS Code 后，输入 `Commnad + Shift + P` 输入 `path`, 选择 `Shell Command: Install 'code' command in PATH`

```bash
ll /usr/local/bin  | grep code
```

通过这个命令可以发现上面的操作实际上创建了个软链对应到了应用程序 **VS Code**

## Essential Keyboard Shortcuts

| Action                     | Keyboard Shortcut   |
| -------------------------- | ------------------- |
| Toggle Sidebar             | Command + B         |
| Open Command Palette       | Command + Shift + P |
| Open File Switcher         | Command + P         |
| Toggle Integrated Terminal | Command + `         |
| Open Settings              | Command + ,         |
| Trigger Suggest            | Control + Space     |

Note: `Control + Space` 可能和切换输入法冲突, 修改后需要重启 VS Code

# Customizing the Editor

## Popular Themes & Icon Themes

打开命令面板 (`Commnad + Shift + P`) 然后选择 `Preferences: Color Theme`

打开命令面板 (`Commnad + Shift + P`) 然后选择 `Preferences: File Icon Theme`

## Font & Font Ligatures

- [FiraCode](https://github.com/tonsky/FiraCode)
- [Hasklig](https://github.com/i-tu/Hasklig)

打开设置 `Command + ,` 搜索输入 `Font`, 在 **Editor: Font Family** 中输入指定的字体名称。

例如安装 [FiraCode](https://github.com/tonsky/FiraCode) 字体

在字体设置中输入 `Fira Code`

开启 **Editor: Font Ligatures** 设置

## Settings JSON

设置文件 `User` & `Workspace` & `Folder`

打开命令面板 (`Commnad + Shift + P`) 然后选择 `Preferences: Open Settings (JSON)`

个人配置 [文件位置](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)

**macOS**: `~/Library/Application\ Support/Code/User/settings.json`

[Default Settings](https://code.visualstudio.com/docs/getstarted/settings#_default-settings)

## Tweaking Default Settings

- Turn off the Minimap
- Hide Open Editors

```json
{
  ...
  "editor.minimap.enabled": false,
  "explorer.openEditors.visible": 0
}
```

## Keyboard Shortcuts

<!-- TODO -->

# Productivity Tricks

## Essential navigation shortcuts

| Action                | Keyboard Shortcut   |
| --------------------- | ------------------- |
| Jump to previous file | Command + P + P     |
| Set focus to Sidebar  | Command + 0         |
| Set focus to Editor   | Command + 1         |
| Open Debug View       | Command + Shift + D |
| Open Explorer View    | Command + Shift + E |
| Open Debug View       | Control + Shift + G |
| Open Extensions View  | Command + Shift + X |

## Emmet

VS Code 内置 [Emmet](https://docs.emmet.io/) 插件, Emmet 可以帮助提高编写 HTML & CSS



npm Explore & Version Lens

Framework Snippets

Move Code & Code Folding

Regexp Find & Multiple Cursors

Navigating VS Code, Refactoring & More Shortcuts

Rename Refactor & Extract Method

Debugging with Type Checking

Breakpoints & Logpoints

Debugging with TypeScript

Environment Variables

Debugging with VS Code & Chrome

Full Stack Compound Configs

nodemon

Dockerizing an Application

Deploying to a Container Registry

Docker Compose Up

Debugging Containers

Developing through SSH

Developing Remote Containers

Debugging Apps in Remote Containers

Setting Up Working with Data

Working with MongoDB

Working with SQLite

Working with MySQL

Git & Source Control

Reviewing & Mergeing Pull Requests
