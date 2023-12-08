const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    "fname" : {
        type : String,
        required : true,
    },
    "lname" : {
        type : String,
        required : true,
    },
    "age" : {
        type : "Number",
        required : true,
    },
    "date_of_joining" : {
        type : String,
        required : true,
    },
    "title" : {
        type : String,
        required : true,
    },
    "department" : {
        type : String,
        required : true,
    },
    "employee_type" : {
        type : String,
        required : true
    },
    "current_status" : {
        type : String,
        required : true,
        default : 1
    }
})


const employeeModel = mongoose.model("employees",EmployeeSchema)

module.exports = { employeeModel }