# gitlab api
> [官方文档](https://docs.gitlab.com/ee/api/)
`gitlab` 提供了接口，让我们可以通过接口使用 `gitlab` 上的功能。

首先需要获取到个人的 `token` 用于访问 `gitlab` 接口。  
获取路径为：登录 `gitlab` -> `settings` -> `Access Tokens` -> 生成指定域的 `Access Tokens`  

`request` 代码举例：
```javascript
const request = require('request');
const token = 'xxx';

// 获取第一页的项目列表
let options = {
    method: 'GET',
    headers: { 'private-token': token},
    url: 'https://gitlab.dxy.net/api/v4/projects'
};

request(options, (error, response, body) => {
    if (error) {
        console.log("获取失败")
    }
    if (response && response.statusCode === 200) {
        const project = JSON.parse(body);
        console.log("获取成功")
    } else {
        console.log("获取失败")
    }
});

```