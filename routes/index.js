var express = require('express');
var router = express.Router();

/* login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs' });
});

//로그인에 대한 상태값을 가져오는 방법은
//1)세션, 2)query string, 3)localStoreage
router.get('/maker', function(req, res, next){
  const userId = req.query.id
  console.log(userId);
  if(!userId){
    return res.redirect('/')
  }
  res.render('index', { title: 'Maker', pageName: 'maker.ejs', userId:userId })
})

module.exports = router;
