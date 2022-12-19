FROM openresty/openresty:alpine

COPY ./nginx.conf /usr/local/openresty/nginx/conf/default.conf

COPY ./docs-dist /usr/local/openresty/nginx/html
