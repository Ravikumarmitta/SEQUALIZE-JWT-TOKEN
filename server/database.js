
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jwtdb', 'postgres', 'Balu@123', {
    host: 'localhost',
    dialect: 'postgres'
  });

  

  sequelize.authenticate().then(()=>{
    console.log("connection successfull")
  }).catch((err)=>{
    console.log("Error connection to database")
  })
console.log("Another Task");

 module.exports =  sequelize;


