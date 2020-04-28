FROM node:alpine3.11

RUN apk --no-cache update && \
  apk --no-cache add \
  sudo \
  vim && \
  adduser -D nginx && \
  npm install -g npm && \
  npm install -g @vue/cli 

CMD [ "/bin/sh" ]


# npm run buildコマンドで更新のたびにビルドすること
# vue add vuetifyコマンドでvuetifyを入れること


# vuetify, vue router, vuexの使い方を学ぶ