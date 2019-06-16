# ubuntu 搭建 gitlab
## 搭建 gitlab
> [官方文档](https://about.gitlab.com/install/#ubuntu)
搭建 `gitlab` 其实非常简单，官方文档写的也挺清楚的。
1. 安装配置必要的依赖项, 安装 `postfix` 时通过上下键切换选项，选择 `Internet Site`
```bash
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates
sudo apt-get install -y postfix
```
2. 添加 `gitlab` 包并安装
```bash
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
sudo EXTERNAL_URL="https://gitlab.example.com" apt-get install gitlab-ee
```
如果没有域名的话，可以使用本机 `ip`，如 `sudo EXTERNAL_URL="http://192.168.xx.xx" apt-get install gitlab-ee`  
此处安装需要一定时间，安装成功后，浏览器访问 `EXTERNAL_URL` 设置的 `url`，会看到 `gitlab` 系统的设置 `root` 用户的密码界面。
3. 设置 `postfix` 的 `smtp` 信息
如果不设置该信息的话，`gitlab` 系统是服务不能使用邮件服务的，也就无法注册新用户。
```bash
cd /etc/gitlab
sudo cp gitlab.rb gitlab.rb.bak
sudo vi gitlab.rb
```
在文件中添加以下信息：
```js
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "xxxx@qq.com"  # 你自己QQ号
gitlab_rails['smtp_password'] = "*************"  # QQ授权码
gitlab_rails['smtp_domain'] = "smtp.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = 'xxxx@qq.com'   # 你自己QQ号
```
添加成功后执行：
```bash
gitlab-ctl reconfigure
```
即可重启服务，至此 `gitlab` 搭建成功。

