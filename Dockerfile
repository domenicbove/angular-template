FROM httpd:latest
COPY ./app/ /usr/local/apache2/htdocs/
# To start it run... Maps port 80 to localhost:8000
# docker build -t my-apache2 .
$ docker run -dit -p 8000:80 --name my-running-app my-apache2
