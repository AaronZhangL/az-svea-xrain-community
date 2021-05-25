svea-xrain-frontend
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

### 3. Set config file
```
$ cp ./config/config.json.example ./config/config.json
$ vim ./config/config.json
```

### 4. Start app
```
$ sh az-startDev.sh
```
or
```
$ sh az-startPro.sh
```

## TODO

 - [ ] https://github.com/AaronZhangL/httpie
 - [ ] Less than 5000 characters
 - [ ] https://semantic-ui.com/modules/dropdown.html#/examples
 - [ ] https://github.com/log4js-node/log4js-node/issues/139
 - [ ] Add null check about hl_summary
 - [ ] Add alert message if there isn't result about ml_source_code
 - [ ] Add csrf python certification and change API IF
 - [ ] Update machine language mapping function[getStyleCodeByLanguageName]
 - [ ] There is a cash info when pressed F5 key to refresh page.
 - [ ] Add mail to
 - [x] Lazy Mode Loading
 - [x] Add nodejs config file (2020-05-07)
 - [x] Add log to file logic. (2020-05-07)
 - [x] Drop down list(Human language/Machine Language)
 - [x] https://highlightjs.org (Skiped)


##### Reference
(1) Node.js+ExpressでCSRF対策   
https://qiita.com/kmatae/items/0ce25ac6bde0b301402a  
(2) Alternative libraries to request  
https://github.com/request/request/issues/3143  
(3) Promise based HTTP client for the browser and node.js  
https://github.com/axios/axios  
(4) CSS Grid Layout Example
https://gridbyexample.com/examples/
(5) semantic-ui (fomantic-ui)
https://semantic-ui.com/modules/dropdown.html#/examples
