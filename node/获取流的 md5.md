# 获取流的 md5
直接上代码
```javascript

const crypto = require('crypto');
/**
 * 获取文件的 md5
 * @param {Object} stream - 文件流
 * @return {String} 文件的 md5
 */
exports.getMd5 = stream => {
  return new Promise(resolve => {
    const fsHash = crypto.createHash('md5');
    stream.on('data', function(data) {
      fsHash.update(data);
    });

    stream.on('end', function() {
      const md5 = fsHash.digest('hex');
      resolve(md5);
    });
  });
};

```
问题：当流比较大的时候会无法触发 `end` 事件，导致没有 `md5`