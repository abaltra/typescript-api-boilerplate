FROM ubuntu:bionic

WORKDIR /app

RUN apt-get update
RUN apt-get install -y curl gnupg wget

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 68818C72E52529D4

RUN echo "deb http://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list

RUN apt-get update

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs mongodb-org

RUN mkdir -p /data/db

COPY . /app
RUN chmod +x /app/container-scripts/*.sh

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "/bin/bash", "/app/container-scripts/start-watch.sh" ]