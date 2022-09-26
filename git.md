---
layout: default
title: Git
math: true
---
### git 的结构和机制

* git 是一个库，它的实体存在就是 proj 目录下的一个 .git 子目录。根据 linux 的文件系统规范，这是一个隐藏目录。

* git 库是一个分布式库。但从开发者的角度来说，本地的 git 库才是库的“中心”，远程的 git 库可以看成是本地 git 库的“存档备份”，甚至可以没有远程 git 库。也就是说，和“版本管理”有关的处理，都是由本地 git 库完成的。而远程 git 库，则只是用来负责“备份”以及多用户的“多版本的一致性协同”。

* git 库以 branch 作为基本实体单元。也就是说 git 库是个抽象的概念，而实际的版本管理库实体则是 branch。一个 git 库下可以创建任意多个 branch，每一个 branch 都是一个独立库实体，不同 branch 之间都是平行对等的，没有主次之分。而在此基础上，由于 git 库并不是实体，所以一个 git 库必须至少含有一个 branch 实体。因此，在初始化 git 库时，git 系统会自动初始化创建一个 branch，并将其默认命名为 "master"。不过注意，"master" 只是一个默认命名，虽然在默认设定上，它也会被作为逻辑上的 “主分支”。但是，要想理解 git 的机制，我们不要在物理层面将其看成是主分支。事实上，我们可以通过修改 git 系统的配置，来调整这一默认设定，例如将默认的 "master" 命名修改成 "main" 或任意其他命名。

* 每一个 branch 都是一个独立的库，都有一套完整的目标数据，以及版本历史 timeline。同时，所有的“版本同步”都是以 branch 为单位的。这里包括：

  * 将本地版本库存储（发布）到远程。此时，我们总是将本地的某个 brunch，push 到远程的某个 brunch。而不是将本地的整个 git 库，push 到远程的（整个）git 库中。
  * 将本地的两个 branch 进行 merge 处理。这往往是 git 的最核心的应用。

  事实上，二者的本质都是一样的，都是将两个 branch 进行归并处理，包括可能遇到的冲突处理、以及 timeline 的维护。这也是 git 的核心机制之一。

  **再次强调**，所有的 branch 都是平行对等的，即使一个 branch 是从另一个 branch 继承过来的（逻辑上我们会把另一个 branch 看成是父分支）。也就是说，git 在对（父子）两个 branch 进行归并时，并不会将其看成是父子关系，而是将二者看成是两个独立对等的 branch 进行归并（虽然在实际执行时会自动根据父子关系来采用优化策略）。因此，我们可以将子 branch 归并到父 branch，也可以将父 branch 归并到子 branch，二者没有分别。甚至，在父子 branch 上分别执行了不同的版本提交后，也可以归并。此时，我们可以将其看成是对两个“不同的”的“独立”分支进行归并。

  **此外**，上面提到了“将子 branch 归并到父 branch” 和 “将父 branch 归并到子 branch”。这就是说，两个 branch 的归并，并不是对等的“合二为一”，而是“将另一个指定的 branch 归并到自身”。归并后，两个 branch 依旧是独立平行的，同时，只有当前分支是两个 branch 归并的结果，而另一个 branch 依旧保持其原有的数据版本状态不变。

* 每一个 branch 内部，都是由一组 commit 序列构成。每个 commit 都可以看成是一个完整的、不再变的数据库。这个不再变的数据库，可以看成是一个版本状态，也可以看成是一次备份或者一个快照。而这里的完整性，则意味着每一个 commit 状态，都可以迁出（还原）一个完整的数据版本。虽然在物理上，每个 commit 只保存了相对上一个 commit 的 diff 数据。但逻辑上我们应该将其看成是一个完整的数据版本。

* 关键的关键，每一个 commit（或者说数据版本）都是独立的。即  commit 序列的前后没有严格的因果依赖性。举个例子：

  * $commit_1 \rightarrow commit_2 \rightarrow commit_3$
  * 回退到版本 $commit_2$ 、更新、再 commit 一个新版本。此时并不是将 $commit_3$ 删除，然后再创建一个新的 $commit_3$。
  * 事实上，我们在回退到版本 $commit_2$ 后，得到的版本状态是
    $commit_1 \rightarrow commit_2 \rightarrow commit_3 \rightarrow commit_4$
    这里的 $commit_4$ 表示的是 “基于 $commit_2$”，同时它没有任何更新，仅仅是作为一个独立的 tag 版本状态。因此，在后面的更新、并 commit 一个新版本时，会生成一个 $commit_5$
  * 同样，在生成 $commit_5$ 后，也就是在回退到 $commit_2$、更新、再提交后。我们依然可以“后悔并重新恢复到” $commit_3$。更准确的说，应该是 “重新基于” $commit_3$。不过注意，$commit_3$ 和 $commit_5$ 并没有任何关系，也就是 $commit_5$ 提交的变更，并不会体现在 $commit_3$ 中。

  总结来说，一个 commit 版本，并不都是基于上一个 commit 版本的 diff。它也可以是一个全新的、基于任意（过往）版本的初始 base 版本。因此，**最终的 commit 序列，并不一定是一个严格的因果序列，而是多个并行的因果序列的分段映射（融合）**。

* 关于 git 的用户和权限。千万要注意，git 的用户和权限并不是针对整个 git 的，甚至不是针对某个 branch 的，而是针对每次 commit 的。在每次 commit 时，git 都会给本次 commit 绑定一个用户身份（包括 user/email），用于标识该 commit 是谁提交的。当 git 用于本地时，这个用户身份并没有实际用处。但在和远程 git 库同步时，这个身份就会至关重要，因为远程 git 库默认是基于多用户并行同步的。而远程同步又是以 commit 为单位的，因此，每个 commit 在 push 到远程时，远程默认都会验证 commit 的身份。

  git 的用户身份，是保存在 git 的默认配置中的，同时我们也可以为某个具体的 proj 设置独立的身份，因为不同的远程 git 库，对用户的身份要求可能不同。例如，公有的 github 往往会使用用户的私人邮箱，因此它并不会对邮箱做强制验证；但很多公司的私有 git 服务，往往都会要求使用公司邮箱，并对用户的身份邮箱做强制验证。

  而这里的关键在于，我们可以随时重置（调整）proj 的身份邮箱，这就是说，多次 commit 版本的身份可能不同。例如：我们初始使用的是默认的私人邮箱，提交了两个 commit 版本。之后调整为公司邮箱，再提交两个 commit 版本。此时，前两个 commit 版本的身份就是私人邮箱，后面两个 commit 的身份则是公司邮箱。之后，当我们将本地的版本 push 到公司的远程 git 库时，前两个 commit 的提交就会报错，即“身份无效”。

  关于 git 权限，这个也是针对远程 git 服务而言的。不过，这个权限验证往往不是针对具体 commit、或 branch 的，甚至也不针对 proj，而是针对整个 git 终端的。也就是说，是针对本地计算机设备的。git 会使用本地计算机（终端）生成的 RSA public key，然后将该 key 提交保存到远程的 git 服务（不是远程的 git 库）。而 git 也并不会要求针对每个不同的远程 git 服务使用不同的 key，事实上，不同的 git 服务，根本无法得知这个 key 是否也给别人使用了。

  一个好的使用建议：

  * 决定使用 git 前，先生成一个 RSA public key。即使并不打算使用远程 git 库。
  * 设置一个默认全局的私人 email 身份。
  * 每个 proj 在 git 初始化后，且**在执行任何 commit 前**，都需要先配置好针对该 proj 的身份信息。
  * 当需要远程 git 库时，先去相应的 git 服务配置中心，提交绑定上面生成的 RSA public key



### git 的几个概念：

* HEAD/Index/stash
* reset/revert
  * reset 用于回退 commit 版本。然而，从 git 内部机制上讲，reset 的本意应该是重置 commit 版本基态。
  * revert 的思想，也得从 git 的内部机制上理解。上面提到，commit 序列实际上是由多个并行的版本分段融合而成的。这就是说，每一个平行的版本序列，都可以看成是一个逻辑上的 branch。而 revert 就是将指定的（过往某个）版本（序列），和当前（应用）的版本（序列），进行 merge 处理。
* amend/squash
  * amend 用于遗漏提交。很多时候，我们在 commit 后，会发现遗漏些什么。再次提交又会产生新的 commit 版本，这显然很累赘。amend 可以让我们在上次 commit 的基础上执行补充提交。amend 既可以补充提交某些数据变更，也可以只提交 commit message。注意，补充提交会导致之前的 commit id 发生变更。事实上，amend 提交是创建一个新的 commit，同时将上一个 commit “删除”。
  * squash 用于将历史多个 commit 合并成一个 commit。
* merge/cherry-pick
  * 相比于 merge，cherry-pick 是将另一个 branch 指定的（部分）commit 项，合并到当前分支。
* rebase

  rebase 是 merge 的一种方式，用于将两个 branch 的分叉合并到一起。

  这里的前提和背景是，当两个 branch 在某个共同的 commit 版本后，出现了分叉，也就是各自提交了新的 commit 版本。此时在执行 merge 处理时，git 默认会保留两个（平行）分叉版本的提交 timeline 状态。而 rebase 则可以将两个（平行）分叉版本的 timeline 状态合二为一，也就是放弃保留“历史并行信息”。

  具体的合并规则为：在将另一个分支归并到当前分支时，以另一个分支（分叉后）的最终（新）commit 版本为基础，然后将当前分支分叉后的 commit 版本序列，追加到后面。

  这个策略是最简单直接的，它假设将另一个分支的 commit 看成是“先完成”的，然后在此基础上，“又执行”了当前分支中（分叉部分）的 commit 处理。

  当然，逻辑上还有其他的合并策略。例如，严格按 commit 的提交时间先后，进行归并。不过，无论采用什么策略，在逻辑上都不会改变最终的合并结果。但是，不同的策略，对冲突的时序逻辑，会产生不同的影响。显然，严格按时间穿插合并，会带来更复杂的冲突关系。而 git 采用的策略，则可以实现（最简的）一次性冲突修复关系。


### 基本操作



##### 设置提交身份

```sh
# 配置当前 proj 的提交身份。配置文件位于 .git/
git config user.name "Your Name Here"
git config user.email your@email.com
```

```sh
# 配置全局的提交身份。配置文件位于 ~/.gitconfig
git config --global user.name "Your Name Here"
git config --global user.email your@email.com
```



##### 构造/创建 git 库

```shell
# 创建本地 git 库
$ cd proj
$ git init
# 从远程创建 git 库
$ git clone git@github.com:wenpeng8019/proj.git
```



##### 同步到远程

```sh
# 将本地 git 库和远程 git 库绑定。这里 origin 是远程 git 库的命名
$ git remote add origin git@github.com:wenpeng8019/proj.git
# 将本地 git 库（的当前分支）同步（推送）到远程（指定的分支）。-u 表示首次同步
$ git push -u origin master
$ git push origin master
# 查看、删除和远程库的绑定
$ git remote -v
$ git remote rm origin
# 本地创建一个新的 git 库后，在初始绑定到远程的一个新 git 库时。有时需要执行
$ git pull --allow-unrelated-histories
# > 因为这两个 git 库都有自己独立的初始 commit 版本状态，且二者不一致。
# > 注：有两种使用远程 git 库的场景
#   > 以远程 git 为初始中心，每个本地 git 库都通过 clone 获取一个初始版本
#     初始 commit 是在 clone 版本上执行的
#   > 以本地 git 为初始中心，在完成一系列 commit 操作后。再首次提交到远程 git 库。
#     这里的 git 库应该是新分配的初始化的库，此时就可能发生和本地 git 库不一致的情况。

```



##### 查看提交（版本）

```sh
# 变更状态
$ git status
# 提交日志
$ git log
# 将所有提交日志项，以时间轴的方式展示。可以清晰的展示分支和归并
$ git log --graph
# 单行显示
$ git log --pretty=oneline
# 
$ git log --abbrev-commit
# 操作日志
$ git reflog
```



##### 提交生成新版本（备份/快照）

```sh
# 添加要提交的文件。无论是添加新的文件，还是更新了某个文件，都需要执行 add 处理
$ git add file1.txt
$ git add file2.txt file3.txt
# 删除指定文件。这是从 git 库中删除，不是从本地文件系统中删除。
# 注意，本地文件系统删除后，也要执行 git 库的删除，两个操作并不会自动关联
$ git rm test.txt
# 提交更新
$ git commit -m "add 3 files, del 1 file."
```



##### 版本调整

```sh
# 将工作区的修改丢弃
$ git checkout -- readme.txt
# 把暂存区的修改撤销
$ git reset HEAD readme.txt
# 版本回退
$ git reset --hard HEAD^
$ git reset --hard HEAD^^
$ git reset --hard HEAD~10
```



##### 差异查询（比对）

```sh
# 查看工作区和版本库里面最新版本的区别
$ git diff HEAD -- readme.txt
```



##### 分支管理

```sh
# 查看分支
$ git branch
# 创建分支
$ git branch dev
# 切换、创建并切换【新版本】
$ git switch dev
$ git switch -c dev
# 切换、创建并切换【老版本兼容】
$ git checkout dev
$ git checkout -b dev
# 将 dev 分支合并到当前分支
$ git merge dev
$ git merge --no-ff -m "merge with no-ff" dev
# 删除分支
$ git branch -d dev
```



##### 标签管理

```sh
# 查看标签
$ git tag
$ git show v0.9
# 打标签
$ git tag v1.0
$ git tag v0.9 f52c633
$ git tag -a v0.1 -m "version 0.1 released" 1094adb
# 删除标签
$ git tag -d v0.1
# 删除远程标签
$ git push origin :refs/tags/v0.9
```



### git 权限生成



##### 检查本地 SSH key 是否存在

````sh
ls ~/.ssh/
````

看是否存在类似 `ras` 和 `rsa.pub` 两个文件（一般默认的文件名为：`id_rsa`），这里 `.pub` 文件是公钥，另一个文件是私钥。



##### 生成 ssh key

```sh
ssh-keygen -t rsa -b 2048 -C "wen.peng@me.com"
```

> Generating public/private rsa key pair.
>
> Enter file in which to save the key (/c/Users/***/.ssh/id_rsa)

表示你自己的当前登录用户名，不做修改直接回车，会将生成的rsa文件保存为默认名称

再次回车提示：

> Enter passphrase (empty for no passphrase):
>
> Enter same passphrase again:

提示设置提交/拉取代码到Github时需要的密码及确认密码（默认没有）；

设置密码后再次回车提示 Your identification has been saved in.... 即表示ssh key生成成功

**这里的 "wen.peng@me.com" 仅仅是 key 的说明，而不是 key 的组成部分。**也就是说，它不会限制 key 的使用场景。



##### 添加 ssh key 至 ssh-agent

```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

注意： 如果报 Could not open a connection to your authentication agent， 直接把当前git bash窗口关闭了，然后用管理员运行



#### 添加 ssh key 至 guthub

登入自己的 github, 点击用户的 settings,  然后点击 ssh keys,  将 `rsa.pub` 文件（该文件是文本文件）中的公钥信息提交到 github


