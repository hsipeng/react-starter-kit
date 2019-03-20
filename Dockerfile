FROM nginx:latest
LABEL maintainer "i@lirawx.cn"
ADD ./build/ /usr/share/nginx/html/
ADD ./config/nginx.conf /etc/nginx/
EXPOSE 80
