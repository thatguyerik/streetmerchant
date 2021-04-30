FROM docksal/cli:2-php7.2

EXPOSE 80

RUN apt-get update && apt-get install -y \ 
  libnss3-dev \ 
  libatk1.0-0 \ 
  libatk-bridge2.0-0 \ 
  libcups2 \
  libxkbcommon0 \
  libxcomposite1 \ 
  libxrandr2 \ 
  libgbm1 \ 
  libgtk3.0-cil \ 
  libasound2

USER docker

RUN set -e; \ 
    . $HOME/.profile; \
    nvm install 15.14.0; \
    nvm alias default 15.14.0; \
    npm install -g nodemon;

USER root
