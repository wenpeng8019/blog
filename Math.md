---
layout: default
title: Math
math: true
---


##### 在线 LaTex 数学公式编辑器

[https://www.latexlive.com](https://www.latexlive.com)


##### 关于 LaTex 公式环境

[https://tug.org/pracjourn/2006-4/madsen/madsen.pdf](https://tug.org/pracjourn/2006-4/madsen/madsen.pdf)


##### LaTex 字体


| 示例              | 语法                | 命名 |
| ---------------- | ------------------ | ------------------ |
| $AaBbCc0123Xx$ |     | 无（意大利字体）
| $\boldsymbol{AaBbCc0123Xx}$ | \\boldsymbol{}    | 加粗（意大利字体）
| $\textit{AaBbCc0123Xx}$     | \\textit{}        | 意大利斜体
| $\textrm{AaBbCc0123Xx}$     | \\textrm{}        | 罗马字体 Roman Family
| $\textbf{AaBbCc0123Xx}$     | \\textbf{}        | 罗马粗体
| $\textsf{AaBbCc0123Xx}$     | \\textsf{}        | 无衬线字体 Sans Serif Family
| $\texttt{AaBbCc0123Xx}$     | \\texttt{}        | 打印机字体 Typewriter
| $\mathit{AaBbCc0123Xx}$     | \\mathit{}        | （数学）意大利斜体
| $\mathrm{AaBbCc0123Xx}$     | \\mathrm{}        | （数学）罗马字体 Roman Family
| $\mathbf{AaBbCc0123Xx}$     | \\mathbf{}        | （数学）罗马粗体
| $\mathsf{AaBbCc0123Xx}$     | \\mathsf{}        | （数学）无衬线字体 Sans Serif Family
| $\mathtt{AaBbCc0123Xx}$     | \\mathtt{}        | （数学）打印机字体 Typewriter
| $\mathbb{AaBbCc0123Xx}$     | \\mathbb{}        | （数学）black board
| $\mathcal{AaBbCc0123Xx}$     | \\mathcal{}        | （数学）calligraphic
| $\mathscr{AaBbCc0123Xx}$     | \\mathscr{}        | （数学）script
| $\mathfrak{AaBbCc0123Xx}$     | \\mathfrak{}        | （数学）fraktur

##### 基本语法

| 名称         | 符号                  | 示例效果                    | 示例代码                                                     |
| ------------ | --------------------- | --------------------------- | ------------------------------------------------------------ |
| **转义字符** | `$ # % \ { } & ~ `    |                             | `$`：数学表达块标记<br />`#`：自定义命令的参数定义标记（TeX 的底层语法，在数学表达中不可用）<br />`%`：注释<br />`\`：转义字符<br />`{}`：递归子项<br>`&`：多行对齐标记点<br />`~`：两侧字符不会因排版而分割为两行 |
| 紧贴         | `\!`                  | $a\!b$                      |                                                              |
| 小空格       | `\,`                  | $a\,b$                      |                                                              |
| 中等空格     | `\;`                  | $a\;b$                      |                                                              |
| 单字符空格   | `\<blank> `           | $a\ b$                      | `a\ b`                                                       |
| 4字符空格    | `\quad`               | $a\quad b$                  | `a\quad b`                                                   |
| 8字符空格    | `\qquad`              | $a\qquad b$                 | `a\qquad b`                                                  |
| 换行         | `\\`                  | $a\\ b$                     | `a \\ b`                                                     |
| 显示文本     | `\mbox{}`,  `\text{}` | $\mbox{this is msg}$        | 显示文本信息。`\mbox` 是底层命令。`\text` 是扩展版本，       |
| 字体大小     | `\large`, `\small`    | $A$ vs $\large A, \small A$ | 大字体、小字体显示                                           |
| 罗马体       | `\mathrm{}`           | $d$ vs $\mathrm{d}$         | 将括号内的斜体字变为正体，即罗马体。<br />一般用于，微分符号d、二项式系数C、等于号上的def、自然常数e、虚数单位i |
| 文字颜色     | `\color{c}`           |                             |                                                              |
| 公式引用     | `\label`, `\ref`      | Markdown 不支持             |                                                              |

| 公式编号     | `\tag{num}`           | $x = y; \tag{1.0a}$         | 自定义设置公式编号                                           |


##### 希腊字母

| 希腊字母                            | 英文 | 代码                        | 希腊字母                      | 英文 | 代码                    |
| ----------------------------------- | ---- | --------------------------- | ----------------------------- | ---- | ----------------------- |
| $\Alpha,\alpha$                     | $A$  | `\[Aa]lpha`                  | $\Beta,\beta$                 | $B$  | `\B,beta`               |
| $\Gamma,\gamma$                     |      | `\G,gamma`                  | $\Delta,\delta$               |      | `\D,delta`              |
| $\boldsymbol{\Epsilon,\epsilon,\varepsilon}$ | $E$  | `\E,epsilon`, `\varepsilon` | $\Zeta,\zeta$                 | $Z$  | `\Z,zeta`               |
| $\Nu,\nu$                           | $N$  | `\N,nu`                     | $\Xi,\xi$                     |      | `\X,xi` (saɪ)           |
| $\Omicron,\omicron$                 | $O$  | `\O,omicron` (ˈɑːməkrɑːn)   | $\Pi,\pi$                     |      | `\P,pi`                 |
| $\boldsymbol{\Rho,\rho,\varrho}$             | $P$  | `\R,rho`,  `\varrho` (roʊ） | $\Sigma,\sigma$               |      | `\S,sigma`              |
| $\Eta,\eta$                         | $H$  | `\E,eta`                    | $\boldsymbol{\Theta,\theta,\vartheta}$ |      | `\T,theta`, `\vartheta` |
| $\Iota,\iota$                       | $I$  | `\I,iota` (aɪˈoʊtə)         | $\Kappa,\kappa$               | $K$  | `\K,kappa`              |
| $\Lambda,\lambda$                   |      | `\L,lambda`                 | $\Mu,\mu$                     | $M$  | `\M,mu`                 |
| $\Tau,\tau$                         | $T$  | `\T,tau`                    | $\Upsilon,\upsilon$           |      | `\U,upsilon`            |
| $\boldsymbol{\Phi,\phi,\varphi}$             |      | `\P,phi`, `\varphi` (faɪ)   | $\Chi,\chi$                   | $X$  | `\C,chi` (kaɪ)          |
| $\Psi,\psi$                         |      | `\P,psi` (psaɪ, sai)        | $\Omega,\omega$               | w    | `\O,omega`              |

> 注意：部分大写的希腊字母，和大写的英文字母基本相同。对于这些希腊字母的 LaTeX 语法，有些编辑器并不支持，所以为了保险起见，可将这些希腊字母直接写成英文

##### 特殊字符

| 效果          | code          | 效果     | code     | 效果     | code     | 效果   | code   |
| ------------- | ------------- | -------- | -------- | -------- | -------- | ------ | ------ |
| $\hbar$       | `\hbar`       | $\imath$ | `\imath` | $\jmath$ | `\jmath` | $\ell$ | `\ell` |
| $\Re$         | `\Re`         | $\mho$   | `\mho`   | $\Im$    | `\Im`    | $\wp$  | `\wp`  |
| $\complement$ | `\complement` | $\aleph$ | `\aleph` | $\P$     | `\P`     |        |        |

##### 基本运算符号

| 名称     | 命令            | 效果       | 名称     | 命令            | 效果         |
| -------- | --------------- | ---------- | -------- | --------------- | ------------ |
| 加       | `+`             | $+$        | 减       | `-`             | $-$          |
| 乘       | `\times`        | $\times$   | 除       | `\div`          | $\div$       |
| 大于     | `>` \| `\lt`    | $>$        | 小于     | `<` \| `\gt`    | $<$          |
| 大于等于 | `\geq` \| `\ge` | $\ge$      | 小于等于 | `\leq` \| `\le` | $\le$        |
| 远远小于 | `\ll`           | $\ll$      | 远远大于 | `\gg`           | $\gg$        |
| 等于     | `=`             | $=$        | 不等于   | `\neq`          | $\neq$       |
| 约等于   | `\approx`       | $\approx$  | 恒等于   | `\equiv`        | $\equiv$     |
| 相似于   | `\sim`          | $\sim$     | 正比于   | `\propto`       | $\propto$    |
| 因为     | `\because`      | $\because$ | 所以     | `\therefore`    | $\therefore$ |
| 点积     | `\cdot`         | $\cdot$    |          |                 |              |

##### 特殊符号

| 效果               | code                  | 效果                 | code                    | 效果        | code        | 效果           | code           |
| ------------------ | --------------------- | -------------------- | ----------------------- | ----------- | ----------- | -------------- | -------------- |
| $\setminus$        | `\setminus`           | $\mid$               | `\mid`                  | $\parallel$ | `\parallel` | $效果:\S$      | `\S`           |
| $\oplus,\bigoplus$ | `\oplus`, `\bigoplus` | $\otimes,\bigotimes$ | `\otimes`, `\bigotimes` | $\ominus$   | `\ominus`   | $\oslash$      | `\oslash`      |
| $\odot$            | `\odot`               | $\circ,\bigcirc$     | `\circ`, `\bigcirc`     | $\bullet$   | `\bullet`   | $\triangleq$   | `\triangleq`   |
| $\pm$              | `\pm`                 | $\mp$                | `\mp`                   | $\prec$     | `\prec`     | $\succ$        | `\succ`        |
| $\cong$            | `\cong`               | $\doteq$             | `\doteq`                | $\Join$     | `\Join`     | $\neg$         | `\neg`         |
| $\lhd$             | `\lhd`                | $\unlhd$             | `\unlhd`                | $\rhd$      | `\rhd`      | $\unrhd$       | `\unrhd`       |
| $\vee,\bigvee$     | `\vee`, `\bigvee`     | $\wedge,\bigwedge$   | `\wedge`, `\bigwedge`   | $\sqcap$    | `\sqcap`    | $\sqcup$       | `\sqcup`       |
| $\ast$             | `\ast`                | $\uplus, \biguplus$  | `\uplus`, `\biguplus`   | $\Cup$      | `\Cup`      | $\Cap$         | `\Cap`         |
| $\star$            | `\star`               | $\diamond$           | `\diamond`              | $\triangle$ | `\triangle` | $\Box$         | `\Box`         |
| $\spadesuit$       | `\spadesuit`          | $\heartsuit$         | `\heartsuit`            | $\clubsuit$ | `\clubsuit` | $\diamondsuit$ | `\diamondsuit` |

##### 基本运算式

| 名称                   | 符号                                             | 示例效果                                   | 代码或说明                                       |
| ---------------------- | ------------------------------------------------ | ------------------------------------------ | ------------------------------------------------ |
| 分数                   | `\frac{n}{d}`, `\dfrac{n}{d}`, `\tfrac{n}{d}`    | $\frac{n}{d},\tfrac{n}{d},\dfrac{n}{d}$    | 第二个按行内公式缩小；<br>第三个按独立公式不缩放 |
| 组合数<br>(二项式系数) | `\binom{n}{m}`, `\tbinom{n}{m}`, `\dbinom{n}{m}` | $\binom{n}{m},\tbinom{n}{m},\dbinom{n}{m}$ | 同上                                             |
| 根号                   | `\sqrt[n]{x}`                                    | $\sqrt[n]{ax+b}$                           | \\sqrt[n]{ax+b}                                  |
| 对数                   | `\ln{}`, `\lg{}`, `\log{}`                       | $\ln X, \lg X \log X$                      | 字体变正：正确 $\ln$ vs 错误 $ln$                |
| 正弦                   | `\sin{}`, `\arcsin{}`                            | $\sin{X},\arcsin{X}$                       |                                                  |
| 余弦                   | `\cos{}`, `\arccos{}`                            | $\cos{X},\arccos{X}$                       |                                                  |
| 正切                   | `\tan{}`, `\arctan{}`                            | $\tan{X},\arctan{X}$                       |                                                  |
| 除于                   | `\mod`                                           | $\mod X$                                   |                                                  |

##### 字符修饰

| 名称             | 命令                                       | 示例效果                                 | 代码或说明                          |
| ---------------- | ------------------------------------------ | ---------------------------------------- | ----------------------------------- |
| 上标             | `^`                                        | $a^{2x+3}$                               | `a^{2x+3}`                          |
| 下标             | `_`                                        | $a_{2x+3}$                               | `a_{2x+3}`                          |
| 双向上下标       | `\sideset{left}{right}`                    | $\sideset{^1_2}{^3_4}a$                  | `\sideset{^1_2}{^3_4}a`             |
| 否定             | `\not`                                     | $\not\in$                                | `\not\in​`                           |
| 矢量（单字符）   | `\vec`                                     | $\vec a$                                 | `\vec a`                            |
| 矢量（多字符）   | `\overrightarrow{}`<br/>`\overleftarrow{}` | $\overrightarrow{xy},\overleftarrow{xy}$ | `\overrightarrow{xy}`               |
| 上划线（单字符） | `\bar`                                     | $\bar x$                                 | `\bar x`                            |
| 上划线（多字符） | `\overline{}`                              | $\overline{AB}$                          | `\overline{AB}`                     |
| 下划线（多字符） | `\underline{}`                             | $\underline{AB}$                         | `\underline{AB}`                    |
| 上修饰           | `\overset{decorate}{A}`                    | $\overset{decorate}{A}$                  | `\overset{decorate}{A}`             |
| 弧度             | `\frown`                                   | $\overset{\frown}{AB}$                   | `\overset{\frown}{AB}`              |
| 夹角度           | `\angle`                                   | $\angle ABC$                             | `\angle ABC`                        |
| 上点             | `\dot`, `\ddot`, `\dddot`, `\ddddot`       | $\dot a,\ddot a,\dddot a,\ddddot a$      | `\dot a,\ddot a,\dddot a,\ddddot a` |
| 注音             | `\check`,`\acute`, `\grave`,`\breve`       | $\check a,\acute a,\grave a, \breve a$   | `\hat a,\acute a,\grave a,\breve a` |
| 大帽子           | `\hat`,`\widehat{}`                        | $\hat a,\widehat{abc}$                   | `\hat a,\widehat{abc}`              |
| 大波浪线         | `\tilde`,`\widetilde{}`                    | $\tilde a,\widetilde{abc}$               | `\tilde a,\widetilde{abc}`          |

| 删除线           | `\cancel{}`, `\bcancel{}`, `\xcancel{}`    | $\cancel{ab},\bcancel a,\xcancel b$      | `\cancel{ab},\bcancel a,\xcancel b` |

##### 集合运算符

| 名称               | 符号        | 示例效果      |
| ------------------ | ----------- | ------------- |
| 存在               | `\exists`   | $\exists$     |
| 全部               | `\forall`   | $\forall$     |
| 空集 \| 大号空集   | `\emptyset` | `\varnothing` |
| 交集 \| 大号交集   | `\cap`      | `\bigcap`     |
| 并集 \| 大号并集   | `\cup`      | `\bigcup`     |
| 属于 \| （反向）   | `\in`       | `\ni`         |
| 包含 \| 真包含     | `\supset`   | `\supseteq`   |
| 包含于 \| 真包含于 | `\subset`   | `\subseteq`   |

##### 省略号和括号

| 名称               | 符号                       | 示例效果                                                     | 代码或说明                     |
| ------------------ | -------------------------- | ------------------------------------------------------------ | ------------------------------ |
| 横向省略号（中间） | `\cdots`                   | $\cdots$                                                     | center dots                    |
| 纵向省略号         | `\vdots`                   | $\vdots$                                                     | vertical dots                  |
| 斜向省略号         | `\ddots`                   | $\ddots$                                                     | 常用于矩阵                     |
| 横向省略号（靠下） | `\ldots`                   | $\ldots$                                                     | low dots                       |
| 小括号             | `( )`                      | $()$                                                         |                                |
| 中括号             | `[ ]`                      | $[]$                                                         |                                |
| 大括号             | `\{ \}`                    | $\{\}$                                                       |                                |
| （自适应）尖括号   | `\langle \rangle`          | $\langle \rangle$                                            | 不要求配对闭合，例如 $\langle$ |
| （自适应）小括号   | `\left( \right)`           | $\left( \frac{a}{b} \right)$                                 | 同上                           |
| （自适应）中括号   | `\left[ \right]`           | $\left[ \frac{a}{b} \right]$                                 | 同上                           |
| （自适应）绝对值   | `\left\| \right\|`         | $\left\| \frac{a}{b} \right\|$                               | 同上                           |
| （自适应）上取整   | `\lceil \rceil`            | $\lceil \frac{a}{b} \rceil$                                  |                                |
| （自适应）下取整   | `\lfloor \rfloor`          | $\lfloor \frac{a}{b} \rfloor$                                |                                |
| 上括号             | `\overbrace{a,b,c}`        | $\overbrace{a,b,c}$                                          |                                |
| 下括号             | `\underbrace{a,b,c}`       | $\underbrace{a,b,c}$                                         |                                |


（自适应）大括号：`\left\{ \right\}`
$$\left \{ \frac{a}{b} \right \} $$

（自适应）绝对值：`\left| \right|`； 
$$\left| \frac{a}{b} \right|$$

控制括号大小：`\big, \Big, \bigg, \Bigg`
$$ \Bigg ( \bigg [ \Big \{\big\langle \left | \| \frac{a}{b} \| \right | \big \rangle\Big\}\bigg ] \Bigg ) $$

##### 箭头和方向

| 效果                                  | code                                        | 效果                              | code                                        | 效果                                 | code                                          |
| ------------------------------------- | ------------------------------------------- | --------------------------------- | ------------------------------------------- | ------------------------------------ | --------------------------------------------- |
| $\rightleftharpoons$                  | `\rightleftharpoons`                        | $\leftharpoonup,\rightharpoonup$  | `\leftharpoonup`<br/>`\rightharpoonup`      | $\leftharpoondown,\rightharpoondown$ | `\leftharpoondown`<br/>`\rightharpoondown`    |
| $\leftrightarrow,\longleftrightarrow$ | `\leftrightarrow`<br/>`\longleftrightarrow` | $\leftarrow,\longleftarrow$       | `\leftarrow` === `\get`<br>`\longleftarrow` | $\rightarrow,\longrightarrow$        | `\rightarrow` === `\to`<br/>`\longrightarrow` |
| $\Leftrightarrow,\Longleftrightarrow$ | `\Leftrightarrow`<br/>`\Longleftrightarrow` | $\Leftarrow,\Longleftarrow$       | `\Leftarrow`<br/>`\Longleftarrow`           | $\Rightarrow,\Longrightarrow$        | `\Rightarrow`<br/>`\Longrightarrow`           |
| $\uparrow,\downarrow$                 | `\uparrow`<br>`\downarrow`                  | $\nwarrow,\searrow$               | `\nwarrow`<br>`\searrow`                    | $\nearrow,\swarrow$                  | `\nearrow`<br>`\swarrow`                      |
| $\triangleleft,\triangleright$        | `\triangleleft`<br>`\triangleright`         | $\bigtriangleup,\bigtriangledown$ | `\bigtriangleup`<br>`\bigtriangledown`      |                                      |                                               |

##### 数列和极限

| 名称 | 符号                        | 示例效果                             | 代码或说明                                                   |
| ---- | --------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| 无穷 | `\infty`                    | $\infty$                             |                                                              |
|      | `\amalg`                    | $\amalg$                             |                                                              |
| 范围 | `\<TeX>\limits_{from}^{to}` | 不能单独用                           |                                                              |
| 累加 | `\sum`                      | $\sum,\sum\limits_{k=1}^\infty a_k$  | `\sum\limits_{k=1}^\infty a_k`                               |
| 累积 | `\prod`                     | $\prod,\prod\limits_{i=1}^n x_i$     | `\prod\limits_{i=1}^n x_i`                                   |
| 上积 | `\coprod`                   | $\coprod,\coprod\limits_{i=1}^N x_i$ | `\coprod\limits_{i=1}^N x_i`                                 |
| 极限 | `\lim`                      | $\lim, \lim\limits_{x \to 0}$        | `\lim\limits_{x \to 0}`                                      |
| 导数 | `\prime`                    | $\prime,d^\prime$                    | `d^\prime` vs `d\prime` $d\prime$（错误）vs `d^{'}`​ $d^{'}$（错误） |

##### 微积分

| 名称                 | 符号        | 示例效果                                 | 代码或说明                         |
| -------------------- | ----------- | ---------------------------------------- | ---------------------------------- |
| 微分符号             | `\nabla`    | $\nabla$                                 |                                    |
| 求微分               |             | $\mathrm{d}x$                            | `\mathrm{d}x` vs  `dx`$dx$（错误） |
| 求一阶微分           |             | $\dot x$                                 | `\dot x`                           |
| 求二阶微分           |             | $\ddot x$                                | `\ddot x`                          |
| 求偏微分             | `\partial`  | $\partial x$                             | `\partial x`                       |
| 求积分               | `\int`      | $\int,\int_{-N}^{N} e^x dx$              | `\int_{-N}^{N} e^x dx`             |
| 求二重积分           | `\iint`     | $\iint,\iint_{D}^{W} dx,dy$              | `\iint_{D}^{W} dx,dy`              |
| 求三重积分           | `\iiint`    | $\iiint,\iiint_{E}^{V} dx\,dy\,dz$       | `\iiint_{E}^{V} dx\,dy\,dz`        |
| 求四重积分           | `\iiiint`   | $\iiiint,\iiiint_{F}^{U} dx\,dy\,dz\,dt$ | `\iiiint_{F}^{U} dx\,dy\,dz\,dt`   |
| 闭合的曲线、曲面积分 | `\oint`     | $\oint,\oint_{C} x^3\, dx + 4y^2\, dy$   | `\oint_{C} x^3\, dx + 4y^2\, dy`   |
|                      | `\idotsint` | $\idotsint$                              |                                    |