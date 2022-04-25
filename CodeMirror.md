---
layout: default
title: CodeMirror
---
> 官网：[https://codemirror.net/](https://codemirror.net/)
>
> CDN：[https://cdnjs.com/libraries/codemirror](https://cdnjs.com/libraries/codemirror)



## hello wold



##### 基本模式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello codemirror</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.3/codemirror.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.3/codemirror.min.js"></script>
</head>
<body></body>
<script>
    var cm = CodeMirror(document.body);
</script>
</html>
```



##### 初始化模式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello codemirror</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.3/codemirror.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.3/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.3/mode/markdown/markdown.min.js"></script>
</head>
<body></body>
<script>
    var cm = CodeMirror(document.body, {
        value: "# hi \n\nthis is **markdown** editor\n",
        mode:  "markdown",
        lineNumbers: true
    });
</script>
</html>
```



##### 基本使用

* `CodeMirror()` 第一参数 `document.body` 可以是一个自定义的 DOM Element。一般会自定义指定一个 DIV 元素。
* `value` 用于设置编辑器的初始内容。
* `lineNumbers` 使得代码编辑器可以显示行号。行号是代码编辑器的一个显要的特征。
* 我们可以通过 `cm.getValue()` API 来获取代码编辑器中的内容。



## 基本参考



### 初始选项

> [https://codemirror.net/doc/manual.html#config](https://codemirror.net/doc/manual.html#config)



### 事件响应

> [https://codemirror.net/doc/manual.html#events](https://codemirror.net/doc/manual.html#events)



### 快捷键响应

> [https://codemirror.net/doc/manual.html#keymaps](https://codemirror.net/doc/manual.html#keymaps)



### 操作命令

> [https://codemirror.net/doc/manual.html#commands](https://codemirror.net/doc/manual.html#commands)



### 样式风格

> [https://codemirror.net/doc/manual.html#styling](https://codemirror.net/doc/manual.html#styling)



### API

> [https://codemirror.net/doc/manual.html#api](https://codemirror.net/doc/manual.html#api)



### 功能插件

> [https://codemirror.net/doc/manual.html#addons](