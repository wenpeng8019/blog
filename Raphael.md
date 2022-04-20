---
layout: default
title: Raphael
---
##### 参考文档

[https://dmitrybaranovskiy.github.io/raphael/reference.html](https://dmitrybaranovskiy.github.io/raphael/reference.html)



### Hello

```html
<!DOCTYPE html>
<html lang="utf-8">
<head>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"> </script>
</head>
<body></body>
<script>
    var paper = new Raphael(0, 0, 500, 500);
    paper.rect(200, 200, 250, 100);
</script>
</html>
```



### 系统架构



##### 核心组件

* Raphael()

  lib 组件对象。同时也是根对象，用于创建所有其他子组件对象。

* Paper()

  被视为 canvas 对象，本质是对 SVG 对象的封装。它是由 `Raphael()` 库函数创建并返回的。

* Element()

  也就是被绘制图形元素，其本质就是 SVG 下的 Element 元素。它是由 `Paper` 对象的对应函数创建并返回的。

  常用的包括：

    * `Paper.path()`
    * `Paper.rect()`
    * `Paper.circle()`
    * `Paper.ellipse()`
    * `Paper.text()`

* Matrix() 和 Animation()

  矩阵和动画对象。他们都是由 `Raphael()` 库对象创建的。对应的创建方式为：

    * `Raphael.matrix()`
    * `Raphael.animation()`

* 其他简单类型对象

  也都是由 `Raphael()` 库对象创建的。不过，这些对象的数据类型比较简单，因此并没有被封装为特定的类。

  常用的有：`angle`、`rad`、`deg`、`color`、`rgb`、`hsb`、`hsl`、……



### 库的初始化



Raphael 库的初始化，存在两个模式



##### 简单模式

`var paper = Raphael(x, y, width, height);`

该模式会在 `<BODY>` 元素中自动添加一个 `SVG` 元素作为 `paper` 对象。



##### 通用模式

`var paper = Raphael("container-id", width, height);` 或者

`var paper = Raphael(container-dom, width, height);`

该模式会在指定的 container 元素中添加一个 `SVG` 元素作为 `paper` 对象。相比于简单模式，该模式可以自定义 SVG 元素的所属位置。



