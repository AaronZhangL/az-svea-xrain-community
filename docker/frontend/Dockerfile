FROM docker.io/node:16.2.0

RUN apt-get update

#Aaron.Z# Fix warnning=> debconf: delaying package configuration, since apt-utils is not installed
ENV DEBCONF_NOWARNINGS yes

RUN apt-get install -y mc
RUN apt-get install -y nano
RUN apt-get install -y curl

#RUN mkdir /frontend
RUN git clone https://github.com/phillies/vue_example.git /frontend

ADD . /frontend/
#ADD portal/package.json /frontend/

# fix "mesg: ttyname failed: Inappropriate ioctl for device" warning
# RUN cp /etc/profile /root/.profile

WORKDIR /frontend/portal
RUN npm install
# RUN npm install -g npm-check-updates
# RUN ncu -u
# RUN npm update