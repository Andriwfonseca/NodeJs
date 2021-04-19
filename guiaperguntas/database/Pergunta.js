const Sequelize = require("sequelize");
const connection = require("./database");

//cria a tabela e colunas do banco de dados
const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull : false
    }
});

//Sincronizar com o bd, se nao tiver essa tabela, ela será criada. Force false, pois se tiver nao precisa criar de novo
Pergunta.sync({force: false}).then(()=>{});

module.exports = Pergunta;