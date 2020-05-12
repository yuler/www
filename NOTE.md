# Note

## Custom Domain

[The Offical Docs](https://vercel.com/docs/v2/custom-domains)

1. Add a domain from the `now` command

### Example

```bash
now domains add yuler.sh
```

2. Config T in your DNS

```bash
now domains inspect yuler.sh

## Output
...
  Verification Record

  name        type        value
  _now        TXT         75KF3Tv4qj
```

然后再 yuler.sh 域名提供商 DNS 配置一条上面的 TXT 记录

