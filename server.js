const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
);


function startUp (){
inquirer
.prompt([
    {
        type: 'list',
        name: 'whatDo',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a department', 'Add an Employee', 'Update an Employee Role', 'Quit']
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
        db.query("SELECT * from department", function(err, results){
            console.log(results);
            startUp();
        })
    }
    else if (answer.whatDo === 'View all Roles'){
        db.query("SELECT * from employee_role", function(err, results){
            console.log(results);
            startUp();
        })
    }
    else if  (answer.whatDo === 'View all Employees'){
        db.query("SELECT * from employee", function(err, results){
            console.log(results);
            startUp();
        })
    }
    else if (answer.whatDo === "Quit"){
        prompt.ui.close();
    }
});
}

startUp();

//FUNCTION TO ADD A DEPARTMENT

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
        db.query("INSERT INTO department SET ?", {
            department_name: answer.whatDepartment,
        })
        startUp();
    })
}

//FUNCTION TO ADD AN EMPLOYEE

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
            name: 'whichTitle',
            message: 'What is this employees title?',
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        },
    ]).then(function(answer){
        console.log(answer);
    if (answer.whichTitle === 'Sales Lead') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 1,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Salesperson') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 2,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Lead Engineer') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 3,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Software Engineer') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 4,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Account Manager') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 5,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Accountant') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 6,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    if (answer.whichTitle === 'Legal Team Lead') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 7,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
    else if (answer.whichTitle === 'Lawyer') {
        db.query("INSERT INTO employee SET ?", {
            employee_role: 8,
            first_name: answer.firstName,
            last_name: answer.lastName,
        })
    }
        startUp();
        })
}
