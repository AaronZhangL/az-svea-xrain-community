var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',reqCsrf:req.csrfToken()});
});

router.post('/regist',function(req,res){
        res.send('OK')
});

router.post('/registXhr',function(req,res){
    if(req.xhr){
        res.send('xhr Access');
    }else{
        res.send('not xhr Access');
    }
});
module.exports = router
