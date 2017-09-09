## Build Setup

``` bash
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash

# install node
nvm install 6.11.3

# update npm
npm install npm -g

# install dependencies
npm install

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# start serve with hot reload at localhost:8080
npm run dev
```
