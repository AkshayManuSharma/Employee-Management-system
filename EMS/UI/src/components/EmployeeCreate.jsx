import { withRouter } from "react-router"
import React from "react"
import { Link } from "react-router-dom"
import { runGraphQLQuery } from "../functions/graphQLquery"
import { queries } from "../functions/queries"
class EmployeeCreate extends React.Component{
    constructor(){
        super()
        this.state = {
            fname : "",
            lname : "",
            age : "",
            date_of_joining : "",
            title : "",
            department : "",
            employee_type : "",
            current_status : "",
            mode : "",
        }
        this.handleFNameChange = this.handleFNameChange.bind(this)
        this.handleLNameChange = this.handleLNameChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleDOJChange = this.handleDOJChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleEmployeeTypeChange = this.handleEmployeeTypeChange.bind(this)
        this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    async componentDidMount(){
        let mode = this.props.match.params.mode
        console.log(mode)
        if(mode === "view" || mode === "edit"){
            let params = this.props.match.params
            console.log(this.props.match.params.id)
            console.log(params)
            this.setState({
                _id : params.id
            })
            let variables = {id : params.id}
            let data = await runGraphQLQuery(queries.getEmployee,variables)
            console.log(data)
            this.setState({
                fname : data.fname,
                lname : data.lname,
                age : data.age,
                date_of_joining : data.date_of_joining.split("T")[0],
                title : data.title,
                department : data.department,
                employee_type : data.employee_type,
                current_status : data.current_status,
            })
        }
        else if(mode === "create"){
            this.setState({
                fname : "",
                lname : "",
                age : "",
                date_of_joining : "",
                title : "",
                department : "",
                employee_type : "",
            })
        }
    }
    handleFNameChange(e){
        this.setState({"fname" : e.target.value})
    }
    handleLNameChange(e){
        this.setState({"lname" : e.target.value})
    }
    handleAgeChange(e){
        this.setState({"age" : parseInt(e.target.value)})
    }
    handleDOJChange(e){
        this.setState({"date_of_joining" : e.target.value})
    }
    handleTitleChange(e){
        this.setState({"title" : e.target.value})
    }
    handleDepartmentChange(e){
        this.setState({"department" : e.target.value})
    }
    handleEmployeeTypeChange(e){
        this.setState({"employee_type" : e.target.value})
    }
    async handleSubmit(e){
        e.preventDefault()
        let {id, current_status, mode, ...data} = this.state
        console.log(data)
        let variables = {employee : data}
        let result = await runGraphQLQuery(queries.createEmployee,variables)
        if(result){
            alert("Employee Successfully Created")
        }
    }
    async handleEdit(e){
        e.preventDefault()
        let {mode, ...employee} = this.state
        console.log(employee)
        let variables = {updateEmployeeDataId : this.state._id,employee : employee}
        console.log(variables)
        let result = await runGraphQLQuery(queries.updateEmployee,variables)
        if(result){
            alert("Data successfully updated")
        }
    }
    handleCurrentStatusChange(e){
        this.setState({"current_status" : parseInt(e.target.value)})
    }
    render(){
        return <div>
                <ul><li><a href="/">Home</a></li><li><Link to="/create">Create Employee</Link></li></ul>
            <hr/>
            <form>
                <input type="text" id="fname" placeholder="Enter First Name" value={this.state.fname} onChange={this.handleFNameChange} required disabled={this.props.match.params.mode ==="view"}/>
                <input type="text" id="lname" placeholder="Enter Last Name" value={this.state.lname} onChange={this.handleLNameChange} required disabled={this.props.match.params.mode ==="view"}/>
                <input type="number" id="age" placeholder="Enter Age" value={this.state.age} onChange={this.handleAgeChange} required disabled={this.props.match.params.mode ==="view"}/>
                <input type="date" id="date_of_joining"  value={this.state.date_of_joining} onChange={this.handleDOJChange} required disabled={this.props.match.params.mode ==="view"}/>
                <select id="title" value={this.state.title} onChange={this.handleTitleChange} required disabled={this.props.match.params.mode ==="view"}>
                    <option disabled value={""}>Select title</option>
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>Director</option>
                    <option>VP</option>
                </select>
                <select id="department" value={this.state.department} onChange={this.handleDepartmentChange} required disabled={this.props.match.params.mode ==="view"}>
                    <option disabled value={""}>Select department</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>HR</option>
                    <option>IT</option>
                </select>
                <select id="employee_type" value={this.state.employee_type} onChange={this.handleEmployeeTypeChange} required disabled={this.props.match.params.mode ==="view"}>
                    <option disabled value={""}>Select Employee Type</option>
                    <option>Fulltime</option>
                    <option>Parttime</option>
                    <option>Seasonal</option>
                    <option>Contract</option>
                </select>
                {this.props.match.params.mode !== "create" ? <select id="employee_type" value={this.state.current_status} onChange={this.handleCurrentStatusChange} required disabled={this.props.match.params.mode ==="view"}>
                    <option disabled value={""}>Select Current Status</option>
                    <option value={1}>Employed</option>
                    <option value={0}>Retired</option>
                </select> : <></>}
                {this.props.match.params.mode === "create" ? <button type="submit" onClick={this.handleSubmit}>Create Employee Record</button> : this.props.match.params.mode === "edit" ? <button type="submit" onClick={this.handleEdit}>Update Employee Record</button> : <></>}
            </form>
        </div>
    }
}

export default withRouter(EmployeeCreate)