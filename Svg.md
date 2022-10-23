---
layout: default
title: SVG
---


##### 在线 Path 编辑器

[svg-path-editor](https://yqnn.github.io/svg-path-editor/)


##### SVG 在线参考

[https://www.w3schools.com/](https://www.w3schools.com/graphics/svg_intro.asp)
[https://techbrood.com/svgref](https://techbrood.com/svgref)



### Path 参考

Path 中的命令分为大写和小写。对于大写的命令来说，坐标使用的是绝对坐标。相反小写命令则使用相对坐标，即相对当前点的偏移量。



##### 指令 M

move to，设置绘制起点

参数为：(x,y)



##### 指令 Z

close，路径闭合。从（当前）结束点绘制一条直线到开始点。

参数：无



##### 指令 L

line to，绘制直线到

参数为：(x,y)

<svg height="5">
  <path d="M 0 0 L 100 0" stroke="red" />
</svg>



##### 指令 H/V

horizontal/vertical line to，绘制水平/垂直线到。相比指令 L，少了一个参数

参数为：(x)/(y)

<svg height="5">
  <path d="M 0 0 H 100" stroke="red" />
  <path d="M 0 0 V 5" stroke="red" />
</svg>



##### 指令 A

arc，绘制弧。从当前点绘制一条弧线到目标点（x,y）。

参数：(rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y)

rx, ry，为弧线水平和垂直方向上的半径，如果相等则为圆。

x-axis-rotation，弧线绕 x 轴旋转的角度。它只在 rx 和 ry 的值不相同时有效。

large-arc-flag，表示该弧是圆上的，大弧一侧（取值 1），还是小弧一侧（取值 0）。

sweep-flag，用于决定弧线的绘制方向。即顺时针方向，还是逆时针方向。



**示例1: 绘制上/下半圆**

<svg height="10">
  <path d="M 0 10 A 10 10 0 0 1 20 10" stroke="red" />
  <path d="M 20 0 A 10 10 0 0 0 40 0" stroke="red" />
</svg>



**示例1: 绘制圆**

<svg height="20">
  <path d="M 0 10 A 10 10 0 0 1 20 10" stroke="red" />
  <path d="M 0 10 A 10 10 0 0 0 20 10" stroke="red" />
</svg>

注：path 并不直接支持圆的绘制，而是通过两个 arc 来实现。



##### 指令 Q

二次方贝塞尔曲线。从当前点绘制一条二次方贝塞尔曲线到目标点（x,y）。

参数：(x1, y1, x, y)

x1,y1是控制点，用于控制曲线的弧度



##### 指令 T

平滑二次方贝塞尔曲线。

参数：(x,y)

相比指令 Q，控制点被假定为最后一次使用的控制点



##### 指令 C

三次方贝塞尔曲线。从当前点绘制一条三次方贝塞尔曲线到目标点（x,y）。

参数：(x1,y1, x2,y2, x,y)

x1，y1 和 x2,y2 是曲线的开始和结束控制点，用于控制曲线的弧度



##### 指令 S

平滑三次方贝塞尔曲线。

参数：(x2,y2, x,y)

相比指令 Q，x2,y2是结束控制点。开始控制点和前一条曲线的结束控制点相同

