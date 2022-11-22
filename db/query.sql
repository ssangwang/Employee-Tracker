SELECT
  department.department_name as name
FROM employee_role
JOIN department ON employee_role.department_id = department.department_name;

SELECT
  employee_role.id as name
FROM employee
JOIN employee_role ON employee.role_id = employee_role.id;