const Sequelize = require("sequelize");
const connection = require("./database");



const Pergunta = connection.define('pergunta', {//Obs: o pergunta em letra minuscula é o nome que a tabela terá
    titulo:{  //nome de coluna
        type: Sequelize.STRING,
        allowNull: false,

    },
        descricao:{ //nome de coluna
            type: Sequelize.TEXT,
            allowNull: false

        }

});


Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;