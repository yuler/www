# Note

## Custom Domain

[The Offical Docs](https://vercel.com/docs/v2/custom-domains)

### 1. Add a domain from the `vercel` command

### Example

```bash
vc domains add yuler.me
```

### Config in your DNS

```bash
vc domains inspect yuler.me

## Output
...
  Nameservers

    Intended Nameservers    Current Nameservers
    a.zeit-world.co.uk      -                      ✘
    b.zeit-world.org        -                      ✘
    e.zeit-world.net        -                      ✘
    f.zeit-world.com        -                      ✘
...
```

我们需要将 Intended Nameservers 这些记录，添加到我们的域名服务器上。

添加好了之后我们通过下面的命令校验是否配置成功

```bash
vc domains verify yuler.me
# or
vc domains inspect yuler.me
```

Note: DNS 的设置可能有延迟。

如果现实成功了我的域名 DNS 解析就托管到了 Vercel 平台上了。可以通过下面命令查看 DNS。

```bash
vc dns ls
```
