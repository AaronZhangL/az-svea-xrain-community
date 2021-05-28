FROM docker.io/node:16.2.0

RUN apt-get update

#Aaron.Z# Fix warnning=> debconf: delaying package configuration, since apt-utils is not installed
ENV DEBCONF_NOWARNINGS yes

RUN apt-get install -y mc
RUN apt-get install -y nano
RUN apt-get install -y curl
RUN apt-get install -y git 

RUN mkdir /frontend
WORKDIR /frontend
USER root
RUN git clone https://github.com/AaronZhangL/az-svea-xrain-community.git .
ADD ./config/config.json /frontend/config/config.json
ADD ./config/log4js.json /frontend/config/log4js.json

RUN npm install
# RUN npm install -g npm-check-updates
# RUN ncu -u
# RUN npm update