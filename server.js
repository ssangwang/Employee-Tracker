const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Seeha@735637',
        database: 'employee_db'
    },
);

function startUp (){
inquirer
.prompt([
    {
        type: 'list',
        name: 'whatDo',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a department', 'Add an Employee', 'Update an Employee Role']
    }
]).then(function(answer){
    console.log(answer)
    if (answer.whatDo === 'Add a department') {
        addDepartment();
    }
    else if (answer.whatDo === 'Add an Employee') {
        addEmployee();
    }
    else if (answer.whatDo == 'View all Departments'){

    }
    else if (answer.whatDo === 'View all Roles'){

    }
    else if  (answer.whatDo === 'View all Employees'){
        
    }
});
}

startUp();

function addDepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'whatDepartment',
            message: 'What department would you like to add?',
        }
    ]).then(function(answer){
        console.log(answer);
    })
}

function addEmployee(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employees first name?',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?'
        },
        {
            type: 'list',
            name: 'whichDepartment',
            message: 'Which department does this employee work in?',
            choices: ['Engineering', 'Finance', "Legal", 'Sales'],
        },
        {
            type: 'list',
            name: 'whichTitle',
            message: 'What is this employees title?',
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        },
    ]).then(function(answer){
        console.log(answer);
    })
}