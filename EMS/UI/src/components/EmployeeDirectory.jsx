import EmployeeFilter from "./EmployeeFilter.jsx"
import EmployeeCreate from "./EmployeeCreate.jsx"
import EmployeeTable from "./EmployeeTable.jsx"
import { runGraphQLQuery } from "../functions/graphQLquery"
import { queries } from "../functions/queries"
import React from "react"
import { Link } from "react-router-dom"
export default class EmployeeDirectory extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [],
            filteredData : [],
        }
        this.createEmployee = this.createEmployee.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleView = this.handleView.bind(this)
        this.handleFilter = this.handleFilter.bind(this)

    }
    async loadData(){
        let response = await runGraphQLQuery(queries.getEmployeeList)
        this.setState({data : response, filteredData : response})
    }
    async componentDidMount(){
        await this.loadData()
    }
    
    async createEmployee(employee){
        console.log(employee)
        let query = `mutation AddEmployee($employee: EmployeeInput!) {
            addEmployee(employee: $employee) {
              id    
            }
          }`
        console.log(query)
        employee.age = parseInt(employee.age)
        let variables = {employee}
        let response = await fetch('http://localhost:3000/graphql',{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({query, variables})
        })
        let data = await response.json()
        await this.loadData()
    }
    handleEdit(id){
        console.log(id)
    }
    handleView(id){
        console.log(id)
    }
    async handleDelete(id){
        console.log(id)
        let variables = {deleteEmployeeDataId : id}
        let result = await runGraphQLQuery(queries.deleteEmployee,variables)
        if(result){
            alert("Data successfully deleted")
            await this.loadData()
        }
    }
    handleFilter(args){
        let data = this.state.data.filter(v=>{
           for(var key in args){
            console.log(key,args[key],v[key])
            if(key === "current_status"){
                if(args[key] !== "" && parseInt(args[key]) !== parseInt(v[key]))
                    return false
            }
            else if (args[key] !== "" && args[key]!== v[key]){
                return false;
            }
           }
           return true
        })
        this.setState({
            filteredData : data
        })
    }
    render(){
        return <div>
            <ul><li><a href="/">Home</a></li><li><Link to="/create">Create Employee</Link></li></ul>
            <hr/>
            <EmployeeFilter filter={this.handleFilter}></EmployeeFilter>
            <hr/>
            <div>
                <EmployeeTable data={this.state.filteredData} handleEdit={this.handleEdit} handleDelete={this.handleDelete} handleView={this.handleView}></EmployeeTable>
            </div>
            <hr/>
            {/* <EmployeeCreate createFunction={this.createEmployee}/> */}
        </div>
    }
}