const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Rotas
app.get("/", (req, res) =>{
    res.render("index");
    //res.send("teste");
})
app.get("/perguntar", (req, res)=>{
    res.render("perguntar");
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})