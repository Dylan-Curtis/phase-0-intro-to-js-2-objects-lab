 const employee = {
    name:'John', 
 streetAddress:'D'
};

function updateEmployeeWithKeyAndValue(employee,key,value){
      const newEmployee = {...employee};

      newEmployee [key] = value;

      console.log(newEmployee)

      return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value; 
    console.log(employee)
    return employee;
}

function deleteFromEmployeeByKey(employee,key,value){
const newEmployee = {...employee};
newEmployee.shift
console.log(newEmployee)

      newEmployee[key] = value;
      return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
      employee[key] = value; 
      employee.shift
      console.log(employee)
      return employee;
}