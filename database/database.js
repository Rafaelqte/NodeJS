const Sequelize = require('sequelize');
const connection = new Sequelize('pergs', 'postgres', /*'coloque a senha de seu usuário aqui'*/'a', {
    host: '127.0.0.1',
    dialect: "postgres",
  });

module.exports = connection;