SELECT *
FROM employee
JOIN employee_role ON employee.employee_role = employee_role.id
LEFT JOIN department ON employee_role.department= department.id;