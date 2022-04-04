---
layout: default
title: About
---
## 关于 Web 框架

该 Blog 采用的是 [Jekyll](https://jekyllrb.com) 开源技术框架搭建。

这是 [Github Pages](https://pages.github.com) 服务官方采用的技术方案。也是在 github 上搭建博客时，唯一可用的技术方案。


## 关于 Markdown 渲染

Jekyll 内置了对 Markdown 文件进行渲染的方案。官方默认采用的渲染引擎插件为 **kramdown**。如无特殊需要，这个渲染引擎的功能已经完全可以满足需求。


### 关于 Markdown 样式

Jekyll 并没有内置 Markdown 的 CSS 样式。它默认只是将 Markdown 语法转换成了 HTML 语言。

这里直接采用了开源 CSS 方案 [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

### 关于 Code 渲染

首先，在 Jekyll 技术方案中，默认也内置了 Code 渲染引擎 **rouge**。不过，和内置的 Markdown 渲染引擎一样，它只是对 Code 进行了语法解析，并给每个语法关键字定义了一个 CSS 命名。但是，**rouge** 并没有内置 CSS 方案。因此，也需要进行自定义。

这里采用了更丰富的自定义前端方案，即 [highlight.js](https://highlightjs.org) 或 [Prism](https://prismjs.com)。

##### 关闭 Jekyll 内置的 **rouge** 渲染引擎

1、设置 Jekyll 的配置文件 `_config.yml`

2、如果启动了本地 Jekyll 服务，那么可以通过下面的配置，禁用 Jekyll 服务的 highlighter 插件
```yaml
highlighter: none
```

3、对于 Github 的 Pages 服务，需要通过下面的配置，来禁用默认的 highlighter 功能。
```yaml
markdown: kramdown
kramdown:
   syntax_highlighter_opts:
      disable : true
```
因为对于 Pages 服务来说，它是不会重启 Jekyll 服务的，因此 highlighter 插件肯定是默认加载的。所以，这里的配置是禁用 highlighter 渲染功能，而非禁用 highlighter 插件。 

##### 关于 highlight.js 的使用 

```javascript
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

##### 关于 Prism 的使用

```javascript
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/themes/prism.css">
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/prism.min.js"></script>
```

##### 这里采用的方案

这里默认使用的是 highlight.js 方案。因为在默认情况下，Prism 会和 mermaid 插件冲突


### 关于 Math 渲染

数学公式的渲染采用的是 [MathJax](https://www.mathjax.org)。

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
    }
  });
</script>
```

### 关于 Graph 渲染

##### 关于 Mermaid 的使用

Mermaid 在启动初始化时，默认只对 `mermaid` CSS 命名进行自动解析。而 Markdown 在渲染 `mermaid` Code 块时，生成的 CSS 命名为 `language-mermaid`。
因此，`mermaid` 在启动初始化，无法对 `mermaid` Code 块进行自动渲染。
这里的解决方案是，在页面模版的结尾，添加自定义代码，完成对 `language-mermaid` 的适配

```javascript
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({
    //startOnLoad: true,
    //theme: "forest",
    flowchart:{
      useMaxWidth: true,
      htmlLabels: true
    }
  });
</script>
```

```javascript
<script>
  mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
</script>
```