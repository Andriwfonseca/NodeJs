const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Rotas
app.get("/", (req, res) =>{
    res.render("index");
    //res.send("teste");
})

app.get("/perguntar", (req, res)=>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    console.log(req.body)
    res.send(titulo);
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})