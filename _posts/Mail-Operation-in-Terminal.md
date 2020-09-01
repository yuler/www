---
title: 'Mail Operation in Terminal'
---

# Mail Operation in Terminal


- [sendmail](http://www.sendmail.org/)
- [exim]()
- [postfix](http://www.postfix.org/)


mail, mailx

https://gist.github.com/kany/c44c077881047ead8faa

https://gist.github.com/loziju/66d3f024e102704ff5222e54a4bfd50e

## Config mail.rc

refs: https://hdsky.pw/2020/03/18/Postfix/

postfix

relayhost = smtp.exmail.qq.com:456
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
smtp_use_tls = yes



smtp.gmail.com:587 isyuler@gmail.com:yule123QWE

smtp.exmail.qq.com:456 yule@shihuituan.com:hqXew8f2R82Gukwg
## 客户端密码

客户端专用密码：
