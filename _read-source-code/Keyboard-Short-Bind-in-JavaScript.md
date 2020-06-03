# Keyboard Shortcut Bind in JavaScript

refs: https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html

源码阅读顺序:

- madrobby/keymaster
- jaywcjlove/hotkeys
- ccampbell/mousetrap
- reecelucas/react-use-hotkeys

## Analysis

```JavaScript
document.onkeydown = e => console.log(e)
hotkeys([keys:<String>], [option:[string|object|function]], [callback:<function>])
```
