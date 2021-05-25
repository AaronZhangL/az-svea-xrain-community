# az-svea-xrain-community
az-svea-xrain-community

# Reference
https://react.semantic-ui.com/

### Create virtualenv
```
pyenv virtualenv x.x.x your-env-name
```
### Env version
```
miniconda3-4.3.30/envs/xrain-comm
```


### npm-check-updates
npm-check-updates をインストール
```
$ npm install -g npm-check-updates
```

### 最新バージョンがあるかどうかを確認する
```
$ npm outdated
Package               Current  Wanted       Latest  Location                           Depended by
axios                  0.19.2  0.19.2       0.21.1  node_modules/axios                 portal
codemirror             5.53.2  5.61.1       5.61.1  node_modules/codemirror            portal
connect-redis           4.0.4   4.0.4        5.2.0  node_modules/connect-redis         portal
debug                   4.1.1   4.3.1        4.3.1  node_modules/debug                 portal
ejs                     3.1.2   3.1.6        3.1.6  node_modules/ejs                   portal
express-ipfilter        1.1.2   1.2.0        1.2.0  node_modules/express-ipfilter      portal
express-session        1.17.1  1.17.2       1.17.2  node_modules/express-session       portal
log4js                  6.2.1   6.3.0        6.3.0  node_modules/log4js                portal
redis                   3.0.2   3.1.2        3.1.2  node_modules/redis                 portal
rotating-file-stream    2.1.0   2.1.5        2.1.5  node_modules/rotating-file-stream  portal
static-favicon          1.0.2   1.0.2  2.0.0-alpha  node_modules/static-favicon        portal

$ ncu
Checking /Users/JP25718/00_Aaron/00_github/az-svea-xrain-community/portal/package.json
[====================] 17/17 100%

 axios                 ^0.19.2  →   ^0.21.1
 codemirror            ^5.53.2  →   ^5.61.1
 connect-redis          ^4.0.4  →    ^5.2.0
 debug                 >=2.6.9  →   >=4.3.1
 ejs                   >=2.5.5  →   >=3.1.6
 express-ipfilter       ^1.1.2  →    ^1.2.0
 express-session       ^1.17.1  →   ^1.17.2
 log4js                 ^6.2.1  →    ^6.3.0
 morgan                >=1.9.1  →  >=1.10.0
 redis                  ^3.0.2  →    ^3.1.2
 rotating-file-stream   ^2.1.0  →    ^2.1.5

Run ncu -u to upgrade package.json
```

### package.jsonの更新
```
$ ncu -u
```

### 実際のパッケージを一括アップデートする
上では package.json が更新されただけ。  
```
$ npm update
```