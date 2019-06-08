# TCP/IP
互联网是在 TCP/IP 协议族基础上运作的，而 http 是属于它内部的一个子集。

## TCP/IP 的分层管理
TPC/IP 协议族是通过分层进行管理的。按层次分为应用层、传输层、网络层和数据链路层。

### URI 与 URL
URL（统一资源定位符）web 浏览器访问 web 页面时所输入的地址
URI（uinform resource identifier  统一资源标识符）用字符串标识某一互联网资源。URL 是 URI 的子集。

### HTTP
HTTP 是无状态协议，它不对请求和响应之间的通信状态进行保存。为了实现保存状态功能，引入了 Cookie 技术。

#### methods
* GET：获取资源
* POST: 传输实体主体
* PUT：传输文件。但 HTTP/1.1 的 PUT 方法自身不带验证机制，任何人都可以上传文件，存在安全性问题。如果使用的是 REST 标准的服务，可能会开放使用。
* HEAD：与 GET 方法类似，但不返回报文主体，用于确认 URI 的有效性及资源更新日期。
* DELETE: 删除文件。与 PUT 类似，也是自身不带验证机制，如果是 REST 的服务，可能会开放使用。
* OPTIONS: 查询支持的方法。查询请求资源支持的方法。
* TRACE： 追踪路径。将之前请求的通信路径返回给客户端。客户端可以通过 TRACE 获取到发出去的请求是如何被修改的，确认连接过程中的一系列操作。但容易引发 XST（跨站追踪）攻击。
* CONNECT：要求用隧道协议连接代理.


#### 持久连接
如果每次请求都需要建立连接，请求结束后都断开连接，会增加通信量的开销。为解决这个问题，HTTP1/1.1 与部分 HTTP/1.0 使用了持久化连接，也称为 HTTP keep-alive，只要任意一方没有提出断开连接，则保持 TCP 的连接状态。