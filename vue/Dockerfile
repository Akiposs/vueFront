FROM node:alpine3.11

RUN apk --no-cache update && \
  apk --no-cache add \
  sudo \
  vim && \
  adduser -D nginx && \
  npm install -g npm && \
  npm install -g @vue/cli 

CMD [ "/bin/sh" ]
