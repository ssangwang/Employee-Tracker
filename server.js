const mysql = require('mysql2');
const inquirer = require('inquirer');
const sequelize = require('./config/connections.js');
const PORT = process.env.PORT || 3001;


sequelize.sync({ force: false }).then(() => {
    console.log('Now listening');
  });

inquirer
.prompt([
    {
        type: 'list',
        name: 'whatDo',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a department', 'Add an Employee', 'Update an Employee Role']
    }
]).then(function(answer){
    console.log(answer);
})
  