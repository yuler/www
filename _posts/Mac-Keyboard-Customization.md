# Mac Keyboard Customization

[Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements) 是一款修针对 Mac 键盘自定义的工具。

# Why?

- 在带有 TouchBar 的 Mac 键盘下 `Esc` 按着没有反馈, 很不习惯。
- 用过 HHKB 键盘后, 觉得 `Caps Lock` 按键的应用场景不是很多替换成 `Ctrl` 键更合理。

# Usage

Edit `~/.config/karabiner/karabiner.json` for customization.

# Config

1. 将 ` \`` 按键替换成 `Esc` (针对带有 TouchBar 的键盘)
2. 将 `Ctrl + '` 映射成 ` \`` 按键, 来弥补 `\`` 的输入
3. 将 `Caps Lock` 按键直接映射成 `Ctrl`
4. 长按 `Esc` 触发 Alfred 快捷搜索

```json
{
  "complex_modifications": {
    "parameters": {},
    "rules": [
      {
        "description": "Change grave_accent_and_tilde to escape, escape when use alone",
        "manipulators": [
          {
            "from": {
              "key_code": "grave_accent_and_tilde"
            },
            "to_if_alone": [
              {
                "key_code": "escape"
              }
            ],
            "to_if_held_down": [
              {
                "shell_command": "open '/Applications/Alfred 3.app'"
              }
            ],
            "type": "basic"
          }
        ]
      },
      {
        "description": "Change command + ' to `",
        "manipulators": [
          {
            "from": {
              "key_code": "quote",
              "modifiers": {
                "mandatory": ["left_command"]
              }
            },
            "to": [
              {
                "key_code": "grave_accent_and_tilde"
              }
            ],
            "type": "basic"
          }
        ]
      }
    ]
  }
}
```
