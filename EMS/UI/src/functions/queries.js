const queries = {
    "getEmployeeList" : `query Employees {
        employees {
          _id
          fname
          lname
          age
          date_of_joining
          title
          department
          employee_type
          current_status
        }
      }`,
    "createEmployee" : `mutation Mutation($employee: EmployeeInput!) {
      createEmployee(employee: $employee)
    }`,
    "getEmployee" : `query getEmployee($id : String!) {
        employee(id : $id) {
          _id
          fname
          lname
          age
          date_of_joining
          title
          department
          employee_type
          current_status
        }
      }`,
      "updateEmployee" : `mutation Mutation($updateEmployeeDataId: String!, $employee: EmployeeUpdate!) {
        updateEmployeeData(id: $updateEmployeeDataId, employee: $employee)
      }`,
      "deleteEmployee" : `mutation Mutation($deleteEmployeeDataId: String!) {
        deleteEmployeeData(id: $deleteEmployeeDataId)
      }`
}

module.exports = {queries}