csurfSample
===========

csurf use sample

# Prepare env
### 1. Install nodejs package
```
$ npm install --save express
$ npm install --save csurf
$ npm install --save express-session
$ npm install --save connect-redis
$ npm install -g nodemon
$ npm install
```

### 2. Run redis container
```
sh az-startRedisDocker.sh
```

### 3. Start app
```
sh az-startApp.sh
```
## TODO
 - [ ] https://highlightjs.org
 - [ ] https://github.com/AaronZhangL/httpie

##### Reference
(1) Node.js+ExpressでCSRF対策  
https://qiita.com/kmatae/items/0ce25ac6bde0b301402a
(2) Alternative libraries to request
https://github.com/request/request/issues/3143
(3) Promise based HTTP client for the browser and node.js
https://github.com/axios/axios
