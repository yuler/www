# Mail with Command

mail, mailx

## Config mail.rc

refs: https://hdsky.pw/2020/03/18/Postfix/

postfix

relayhost = smtp.exmail.qq.com:456
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
smtp_use_tls = yes


## 客户端密码

客户端专用密码：
