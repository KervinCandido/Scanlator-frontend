FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/Scanlator/. /usr/share/nginx/html
