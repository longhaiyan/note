# egg 文件上传

> [ egg 获取文件官方说明](https://eggjs.org/zh-cn/basics/controller.html#%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%96%87%E4%BB%B6)

egg 提供了两种获取文件的模式，一种是 stream，另一种是 file。
#### file
如官方所说，通过 this.ctx.request.files[0] 就能拿到文件对象。
如果要做上传的话，可以通过 request 进行模拟 form-data 发送，代码类似：
```

```