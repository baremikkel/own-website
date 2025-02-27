FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY tailwind.config.js .
COPY /src .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
