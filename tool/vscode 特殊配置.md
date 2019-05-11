# vscode 特殊配置
* Q：vs 保持文件自动格式化时，js 对象属性总会被强行换行，不想换行，怎么办？  
A： `"beautify.config": {    "brace_style": "collapse,preserve-inline" }`

* Q：光标在 vs 的终端，且输入法为中文时，无法使用 control + ` 进行终端的隐藏。  
A：使用可以自定义 APP 中的符号类型的输入法，如搜狗输入法或鼠须管，该输入会在聚焦为终端的时候，将符号改为半角。