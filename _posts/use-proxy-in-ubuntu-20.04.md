---
title: 'Use Proxy in Ubuntu 20.04'
---

# Use Proxy in Ubuntu 20.04

记录下再 Ubuntu 20.04 中使用代理的配置

## Install Shadowsocks

[Shadowsocks Wiki](https://github.com/shadowsocks/shadowsocks/wiki)

```bash
sudo apt-get install python-dev
sudo apt-get install python-m2crypto
sudo pip3 install shadowsocks
vim /etc/shadowsocks.json
```

输入

```json
{
  "server": "<server>",
  "server_port": "<server port>",
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "password": "<password>",
  "timeout": 300,
  "method": "aes-256-cfb",
  "fast_open": false,
  "workers": 1
}
```

启动 sslocal 服务

```bash
sudo sslocal -c /etc/shadowsocks.json -d start
```

如果报错

```
...
File "/xxx/python3.x/site-packages/shadowsocks/crypto/openssl.py", line xx, in load_openssl
...
AttributeError: /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1: undefined symbol: EVP_CIPHER_CTX_cleanup
```

是因为 openssl 1.1.0 中废弃了 `EVP_CIPHER_CTX_cleanup` 函数，引入了 `EVP_CIPHER_CTX_reset`

根据提示修改 `openssl.py` 文件

将 EVP_CIPHER_CTX_cleanup() 函数替换为 EVP_CIPHER_CTX_reset() 函数来解决该问题。具体解决方法如下

## Install ProxyChains

```bash
sudo apt install proxychains
```

设置

```bash
vim /etc/proxychains.conf
```

注释掉最后一行 `socks4 127.0.0.1 9050`，并添加

```
socks5  127.0.0.1 1080
```
