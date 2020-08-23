# Mail with Command

mail, mailx

## Config mail.rc

sudo launchctl start org.postfix.master

echo "Hello World" | mail -s "Test email" joyful4yu@gmail.com

https://benjaminrojas.net/configuring-postfix-to-send-mail-from-mac-os-x-mountain-lion/