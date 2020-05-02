var express = require('express');
var router = express.Router();

//CSRFミドルウェアを生成する
var csrf = require('csrf');
var tokens = new csrf();

/* GET home page. */
router.get('/', function(req, res) {
    var token = req.csrfToken()
     //トークンをSessionに保存する
    req.session.csrfToken = token;
    //console.log('Print get function token');
    //console.log(token);
    //res.render('index', { title: 'Express',reqCsrf:req.csrfToken()});
    res.render('index', { title: 'Express',reqCsrf:token});
});

router.post('/regist',function(req,res){
    //秘密文字をセッションから取得する
    var secret = req.session.csrfSecret;
    //Tokenをセッションから取得する
    var token = req.session.csrfToken;
    //TokenをHidden Itemから取得する
    var ui_token = req.body._csrf
    //秘密文字とトークンの組み合わせが正しいかチェックする
    if (tokens.verify(secret, token) === false)
    {
      throw new Error('Invalid Token-1');
    }
    if (token != ui_token)
    {
        throw new Error('Invalid Token-2');
    }

    // TODO: Call Python REST API

    //使用済みの秘密文字を削除する
    //delete req.session.csrfSecret;
    //使用済みのトークンを削除する
    delete req.session.csrfToken;

    res.send('Aaron Test OK')
});

router.post('/registXhr',function(req,res){
    if(req.xhr){
        res.send('xhr Access');
    }else{
        res.send('not xhr Access');
    }
});
module.exports = router
