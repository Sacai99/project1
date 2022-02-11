# project1


# 查看状态
$ git status

# 添加管理(将文件或目录添加到本地仓库的暂存区)
$ git add filename  # 将文件添加到暂存区
$ git add path/     # 将目录添加到暂存区
$ git add .         # 将当前目录所有内容(文件或文件夹) 都添加到暂存区
$ git add --all     # 将所有内容添加到暂存区

# 将文件移出暂存区
$ git rm --cached filename

# 将暂存区的内容提交到本地仓库
$ git commit -m 'message'

# 查看提交日志
$ git log

# 恢复版本
$ git reset --hard 提交记录前6位

# 查看帮助
$ git --help

# 恢复文件
$ git checkout filename

### git远程仓库操作
```bash
# 克隆远程仓库到本地
$ git clone https://github.com/Sacai99/project1.git

# 设置远程仓库地址
$ git remote add origin https://github.com/Sacai99/project1.git

# 查看所有远程仓库源
$ git remote

# 查看源路径
$ git remote get-url origin

# 将本地仓库推送到远程仓库
$ git push -u origin main
```


### 分支操作
```bash
# 查看分支
$ git branch

# 创建分支
$ git branch 分支名

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名

# 拉取远程分支(更新)
$ git pull origin 分支名
```
