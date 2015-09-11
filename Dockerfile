FROM gliderlabs/alpine:3.1
WORKDIR /tmp/ts-web
ADD . .

CMD rm -rf /www/ts-web && cp -R /tmp/ts-web /www/ts-web