const {getEmployees, getEmployee, storeEmployee, updateEmployee, deleteEmployee} = require('./db')
const {UserInputError } = require('apollo-server-express')

function validateEmployee(employee){
    let errors = []
    let age = parseInt(employee.age)
    if(age < 20 || age > 70){
        errors.push("Age should be in 20-70 range")
    }
    if(!["Employee","Manager","Director","VP"].includes(employee.title)){
        errors.push("Employee Title : Incorrect Type")
    }
    if(!["Engineering","Marketing","HR","IT"].includes(employee.department)){
        errors.push("Employee Department : Incorrect Type")
    }
    if(!["Fulltime","Parttime","Seasonal","Contract"].includes(employee.employee_type)){
        errors.push("Employee Type : Incorrect Type")
    }
    if(errors.length > 0){
        throw new UserInputError("Invalid Input",{errors})
    }
}


async function createEmployee(_,{employee}){
    validateEmployee(employee)
    employee.current_status = 1
    console.log(employee)
    await storeEmployee(employee)
    return 1
}


async function updateEmployeeData(_,{id, employee}){
    validateEmployee(employee)

    return await updateEmployee(id, employee)
}

async function deleteEmployeeData(_,{id}){
    return await deleteEmployee(id)
}

async function getEmployeeList(){
    return await getEmployees()
}

async function getEmployeeData(_,{id}){
    return await getEmployee(id)
}

module.exports = {getEmployeeData, getEmployeeList, deleteEmployeeData, updateEmployeeData, createEmployee}