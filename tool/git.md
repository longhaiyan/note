# git
## 获取完整的 tag massage
```bash
$ git tag -n // tag 列表及每个 tag massage 的第一行信息
$ git tag -l -n100  // tag 列表及每个 tag massage 的第一行到 100 行信息
$ git tag -l -n100 --points-at=tag名称 // 指定 tag 的 massage 的第一行到 100 行信息
```
## 获取一个时间段间的 log 信息
```bash
$ git log --after="2018-01-01 11:11" --before="2019-01-01 11:11" --pretty=format:"%h -- %s" --no-merges
```