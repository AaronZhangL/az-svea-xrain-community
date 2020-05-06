var express = require('express');
var router = express.Router();
const axios = require('axios');

//CSRFミドルウェアを生成する
var csrf = require('csrf');
var tokens = new csrf();

// TODO: Move to config file
const titleName = 'Xrain Translate'
const subTitleName = 'Translate one language to other language.'
const footerString = 'Copyleft © 2020-2020 MIT License'

/* Common function*/
function initToken() {
  return number * number;
}

/* GET home page. */
router.get('/', function(req, res) {
    var token = req.csrfToken()
     //トークンをSessionに保存する
    req.session.csrfToken = token;

    console.log('Print get function token');
    console.log(token);
    //res.render('index', { title: 'Express',reqCsrf:req.csrfToken()});

    res.render('index', { title: titleName, subTitle: subTitleName,footer:footerString,
        reqCsrf:token,
        hl_summary:'',
        ml_source_code:''});
});

router.post('/',function(req,res){
    //秘密文字をセッションから取得する
    var secret = req.session.csrfSecret;
    //Tokenをセッションから取得する
    var token = req.session.csrfToken;
    //TokenをHidden Itemから取得する
    var ui_token = req.body._csrf;

    console.log('Print post function secret/token/ui_token');
    console.log(secret);
    console.log(token);
    console.log(ui_token);

    //秘密文字とトークンの組み合わせが正しいかチェックする
    if (tokens.verify(secret, token) === false)
    {
      throw new Error('Invalid Token-1');
    }
    /*
    if (token != ui_token)
    {throw new Error('Invalid Token-2');}
    */

    // TODO: Move params to config fiel
    var hl_summary = req.body.hl_summary;
    var ml_source_code = req.body.ml_source_code;
    console.log('Print post function: hl_summary/ml_source_code');
    console.log(hl_summary);
    console.log(ml_source_code);

    axios.post('http://127.0.0.1:8000/snippets2/', {
        "id": 0,
        "title": hl_summary,
        "code": "print('xxxxxxxxxx')",
        "linenos": false,
        "language": "C#",
        "style": "abap"})
      .then(function (response) {
        console.log('Call django API');
        console.log(response.data);

        //使用済みの秘密文字を削除する
        //delete req.session.csrfSecret;
        //使用済みのトークンを削除する
        delete req.session.csrfToken;

        //新しいTokenを発行する
        var token = req.csrfToken()
         //トークンをSessionに保存する
        req.session.csrfToken = token;
        res.render('index', {
            title: titleName,subTitle: subTitleName,footer:footerString,
            reqCsrf:token,
            hl_summary: hl_summary,
            ml_source_code: response.data.code});

      })
      .catch(error => {
        const {
            status,
            statusText
        } = error.response;
        console.log(`Error! HTTP Status: ${status} ${statusText}`);
        //使用済みの秘密文字を削除する
        //delete req.session.csrfSecret;
        //使用済みのトークンを削除する
        delete req.session.csrfToken;

        //新しいTokenを発行する
        var token = req.csrfToken()
         //トークンをSessionに保存する
        req.session.csrfToken = token;
        res.render('index', {
            title: titleName,subTitle: subTitleName,footer:footerString,
            reqCsrf:token,
            hl_summary: hl_summary,
            ml_source_code: ''});
    });

});

/*
router.post('/registXhr',function(req,res){
    if(req.xhr){
        res.send('xhr Access');
    }else{
        res.send('not xhr Access');
    }
});
*/
module.exports = router
