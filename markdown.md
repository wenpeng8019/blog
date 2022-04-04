---
layout: default
title: Markdown
math: true
mermaid: true
---

# markdown 语法

##### 几个"官方组织"

- [https://commonmark.org/](https://commonmark.org/)
- [https://www.markdownguide.org/](https://www.markdownguide.org/)


### 标题

- \#
- \##
- \###
- \####
- \#####
- \######


### 文本修饰

- *\*斜体\**
- **\*\*加粗\*\***
- ***\*\*\*斜体+加粗\*\*\****
- ~~\~\~删除线\~\~~~
- \`行内代码`
- \<u><u>下划线</u>\</u>
- \<mark><mark>标记</mark>\</mark>

这里 \<u> 和 \<mark> 不是标准 markdown 语法。本质上是 html 语法

### 插入

- 链接: \[标题](http://...)
- 图片: \!\[标题](http://...)
- 分割线: \--- 或 \*** (三个以上的 '-' 或 '*' )

### 引用

- \>
- \>>
- \>>>...

### 列表

##### 无序列表

```
- item1
  - sub-item1
  - sub-item1
- item2
```

- item1
    - sub-item1
    - sub-item1
- item2

> 无序列表的 `-` 可以替代成 `*` 或 `+`。也就是说 `-` `+` `*` 等价

##### 有序列表

```
1. item1
   1. sub-item1
   2. sub-item1
2. item2
```

1. item1
    1. sub-item1
    2. sub-item1
2. item2

> 关于二级(及其以上)列表
>
> - 对于无序列表，前面间隔 2 个(以上)字符即可
> - 对于有序列表，前面需要间隔 3 个(以上)字符。因为相比无序列表，有序列表多了一个 `.` 字符

### 数学

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$

### 代码

\`\`\`
code
\`\`\`

### 图表

\`\`\`graph-plugin-name
code
\`\`\`

图表本质上是代码的一种

#### mermaid 图

官网: [mermaid](https://mermaid-js.github.io/mermaid/)

示例：
```
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
`` `
```
效果:
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

#### Flow 图

##### 示例

```
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
`` `
```

##### 效果

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

### 表格

```
表头|表头|表头
-|:-:|-:
内容|内容|内容
内容|内容|内容
```

| 表头 | 表头 | 表头 |
| ---- | :--: | ---: |
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |

> `:` 用于表示 ***文字对齐***。
> 写到右边表示 ***右对齐***，写到两边表示 ***中间对齐***，默认 ***左对齐***
>
> `-` 用于表示 ***表头分隔符号***。可以连写成任意长度。例如 `---`
> 一个常用的写法是，将 `-` 的长度和表头文字对齐。例如
>
> ```
> 表头    |表头     |表头
> -------|:-------:|-------:
> 这是内容1|这是内容2|这是内容3
> 内容    |内容     |内容
> ```



### 注脚

```
这是一个注脚的例子[^1]

[^1]: 这里是注脚
```

这是一个脚注的例子[^1]

[^1]: 这里是注脚

