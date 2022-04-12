---
layout: default
title: 素数的规律
date:   2022-04-12
math: true
tags:
- 素数
---

设全体数集 R 为除了 1 以外的自然数；

设除了 2 以外的素数集合为 P；所有奇数集合为 O；偶数集合为 E；



### 基本规律

$$
\begin{cases}
O = P \bigcup P \times P^{'} \times P^{''} \times \cdots\\
E = 2^t \times O
\end{cases}
$$

* 对于 1 以外的所有奇数，都可以表示为：要么是素数、要么是（不同）素数的乘积。

* 所有偶数都可以表示为：2 的幂次方乘以一个奇数。



### 非素奇数

非素奇数是指除了素数以外的所有奇数的集合，用 Q 来表示

根据上面的规律可知，非素奇数都可以表示为：（不同）素数的乘积。

此外，还可以等价的看成

* $ Q = P \times P^{'} \bigcup P \times Q{'}$
    * 即两个素数乘积、或一个素数和另一个非素奇数的乘积
    * 非素奇数具有递归性
* $ Q = P + P + P + \cdots \quad (数量为 P^{'} 或 Q^{'})$



### 奇数的等价表达式

在组成奇数的所有计算公式中，有一类特殊的表达式。即只由 2 和 3 通过计算构成

$$
\begin{cases}
3 \times a + 2 \times b & (a \in [1,O]) \\
2 \times n + 3 & (n \in [1,R]) \\
3  \times m \bigcup 3 \times m + 2 \bigcup 3\times m + 2 + 2 & (m \in [1,O])
\end{cases}
$$

这里，我们将第三个公式中的后两个集合和并，写成

$$
3\times m + [2, 4] \quad (m \in [1,O])
$$


#### 关于公式 3



#### 关于 $3 \times m$

其结果除了 3 为素数以外，其他的肯定都是非素奇数



#### 关于 $3\times m + [2, 4]$

还可以进一步细分



##### 情况1：

$3\times m + [2, 4]$ 自身就是素数。特殊的，当 $m = 1$ 时，结果为 5 和 7



##### 情况2：

$3\times m + [2, 4]$ 自身不是素数，此时可以将表达式转换为

$$
3 \times (m - l) + 3 \times l + [2,4] \\
$$

这里，$3 \times l + [2,4]$ 可以等价的表示除了 $ 3 \times m$ 以外的，包括素数在内的任意奇数。这里，我们就将其表示为素数 P。

这样，对于所有的非素奇数 Q，我们就得到

$$
3 \times (m-l) = 3 \times S \times P
$$

因为，非素奇数 $Q = P \times P^{'} \bigcup P \times Q{'}$，所以，$3 \times (m-l)$ 肯定是 P 的倍数。

这样，我们就可以进一步得出

$$
Q = (3 \times S + 1) \times P \quad (S \in E)
$$

这里，$3\times S + 1 \in P^{'} \bigcup Q^{'}$ ，是奇数 O 的子集。因此，$ S \in E$  即 S 肯定是偶数。

这就可以进一步得到

$$
Q = (6 \times S + 1) \times P \quad (S \in R)
$$

3、最后，关于 $6 \times S + 1$

