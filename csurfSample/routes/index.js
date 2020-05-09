const {getConfigData} = require('../tools.js');
//var config = require('../app');
var log = require('log4js').getLogger("index");
var express = require('express');
var router = express.Router();
const axios = require('axios');

//CSRFミドルウェアを生成する
var csrf = require('csrf');
var tokens = new csrf();

var config = getConfigData();
const titleName = config.title;
const subTitleName = config.subTitle;
const footerString = config.footerTitle;
const apiUrl = config.api_url;
/*
log.debug("***** print index config **********");
log.debug(process.env.NODE_ENV);
log.debug(config);
log.debug(titleName);
log.debug(subTitleName);
log.debug(footerString);
*/
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
		select_hl_option: "en",
		select_ml_option: "python",
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

	var select_hl = req.body.select_hl;
	var select_ml = req.body.select_ml;
	var hl_summary = req.body.hl_summary;
	var ml_source_code = req.body.ml_source_code;
	log.info('[xrain debug:index.js]Print post function: select_hl/select_ml/hl_summary/ml_source_code');
	log.info(select_hl);
	log.info(select_ml);
	log.info(hl_summary);
	log.info(ml_source_code);

    /*
	_data = {
		"hl_summary": response[0].hl_summary,
		"ml_source_code": response[0].ml_source_code,
		"url": response[0].rul,
		"ml_type": response[0].ml_type,
		"ml_version": response[0].ml_version,
		"ml_code_style": response[0].ml_code_style,
		"create_date": response[0].create_date,
		"update_date": response[0].update_date,
		"client_agent": response[0].client_agent
	}
	*/
	// TODO: Add select_hl filter
	// TODO: Set select_hl and select_ml items value on views page
	axios.post(apiUrl, {
		"hl_summary": hl_summary,
		"hl_type": select_hl,
		"ml_type": select_ml
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
				select_hl_option: select_hl,
				select_ml_option: select_ml,
				title: titleName,
				subTitle: subTitleName,
				footer: footerString,
				reqCsrf: token,
				hl_summary: hl_summary,
				ml_source_code: response.data.ml_source_code
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
				select_hl_option: select_hl,
				select_ml_option: select_ml,
				title: titleName,
				subTitle: subTitleName,
				footer: footerString,
				reqCsrf: token,
				hl_summary: hl_summary,
				ml_source_code: '# No results found!'
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
