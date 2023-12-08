const mongoose = require('mongoose')
const { employeeModel } = require('../models/EmployeeModel')

let db = null
async function connectoDB(dbUrl){
    try{
        db = await mongoose.connect(dbUrl);
        console.log(`Database connected successfully to ${dbUrl}`);
    }catch(err){
        console.log(err.message)
    }
}

async function storeEmployee(data){
    await employeeModel.create(data)
}

async function getEmployees(){
    let filter = {}
    let data = await employeeModel.find({})
    return data 
}

async function getEmployee(id){
    let emp = await employeeModel.findOne({_id : id})
    return emp
}
async function updateEmployee(id, newData){
    console.log(newData)
    let res = await employeeModel.updateOne({_id : id},{$set : {...newData}})
    console.log(res)
    return true
}

async function deleteEmployee(id){
    console.log(id)
    let data = await employeeModel.deleteOne({_id : id})
    console.log(data)
    return true
    
}

module.exports = {getEmployees, getEmployee, storeEmployee, updateEmployee, deleteEmployee, connectoDB}