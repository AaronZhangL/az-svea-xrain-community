var log = require('log4js').getLogger("index");
var express = require('express');
var router = express.Router();
const axios = require('axios');

//CSRFミドルウェアを生成する
var csrf = require('csrf');
var tokens = new csrf();

// TODO: Move to config file
const titleName = 'Xrain Translate'
const subTitleName = ''
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

	log.debug('[xrain debug:index.js]Print get function token');
	log.info(token);
	//res.render('index', { title: 'Express',reqCsrf:req.csrfToken()});

	res.render('index', {
		title: titleName,
		subTitle: subTitleName,
		footer: footerString,
		reqCsrf: token,
		hl_summary: '',
		ml_source_code: ''
	});
});

router.post('/', function(req, res) {
	//秘密文字をセッションから取得する
	var secret = req.session.csrfSecret;
	//Tokenをセッションから取得する
	var token = req.session.csrfToken;
	//TokenをHidden Itemから取得する
	var ui_token = req.body._csrf;

	log.info('[xrain debug:index.js]Print post function secret/token/ui_token');
	log.info(secret);
	log.info(token);
	log.info(ui_token);

	//秘密文字とトークンの組み合わせが正しいかチェックする
	if (tokens.verify(secret, token) === false) {
		log.info('[xrain debug:index.js] Invalid Token');
		throw new Error('Invalid Token');
	}
	/*
	if (token != ui_token)
	{throw new Error('Invalid Token-2');}
	*/

	// TODO: Move params to config fiel
	var hl_summary = req.body.hl_summary;
	var ml_source_code = req.body.ml_source_code;
	log.info('[xrain debug:index.js]Print post function: hl_summary/ml_source_code');
	log.info(hl_summary);
	log.info(ml_source_code);

	axios.post('http://127.0.0.1:8000/snippets2/', {
			"id": 0,
			"title": hl_summary,
			"code": "print('xxxxxxxxxx')",
			"linenos": false,
			"language": "C#",
			"style": "abap"
		})
		.then(function(response) {
			log.info('Call django API');
			log.info(response.data);

			//使用済みの秘密文字を削除する
			//delete req.session.csrfSecret;
			//使用済みのトークンを削除する
			delete req.session.csrfToken;

			//新しいTokenを発行する
			var token = req.csrfToken()
			//トークンをSessionに保存する
			req.session.csrfToken = token;
			res.render('index', {
				title: titleName,
				subTitle: subTitleName,
				footer: footerString,
				reqCsrf: token,
				hl_summary: hl_summary,
				ml_source_code: response.data.code
			});

		})
		.catch(error => {
			const {
				status,
				statusText
			} = error.response;
			log.info(`Error! HTTP Status: ${status} ${statusText}`);
			//使用済みの秘密文字を削除する
			//delete req.session.csrfSecret;
			//使用済みのトークンを削除する
			delete req.session.csrfToken;

			//新しいTokenを発行する
			var token = req.csrfToken()
			//トークンをSessionに保存する
			req.session.csrfToken = token;
			res.render('index', {
				title: titleName,
				subTitle: subTitleName,
				footer: footerString,
				reqCsrf: token,
				hl_summary: hl_summary,
				ml_source_code: ''
			});
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
