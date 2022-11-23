INSERT INTO department (department_name)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO employee_role (title, salary, department)
VALUES ('Sales Lead', 100000, 4),
('Salesperson', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2),
("Legal Team Lead", 250000, 3),
('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, employee_role)
VALUES ('Ben', 'Dover', 1),
('Lisa', 'Newcar', 2),
('Jie', 'Normus', 3),
('Justin', 'Case', 3),
('Gerry', 'Atrick', 3),
('Yul B.', 'Allwright', 6),
('Upto', 'Nogood', 7),
('Anita', 'Bath', 8);
