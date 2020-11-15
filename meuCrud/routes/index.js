var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Crud' });
});

router.get('/usuarios', (req,res,next)=>{
  var db = require('../db');
  var Users = db.Mongoose.model('dadosPessoais', db.DadoPessoaisSchema, 'dadosPessoais');
  Users.find({}).lean().exec((e,docs)=>{
      res.render('usuarios', {"usuarios" : docs});
    }
  )
})

module.exports = router;
