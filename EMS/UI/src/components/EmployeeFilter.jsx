import React from "react"
export default class EmployeeFilter extends React.Component{
    constructor(){
        super()
        this.state = {
            title : "",
            department : "",
            employee_type : "",
            current_status : "",
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleEmployeeTypeChange = this.handleEmployeeTypeChange.bind(this)
        this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
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
    handleCurrentStatusChange(e){
        this.setState({"current_status" : e.target.value})
    }
    handleFilter(){
        console.log(this.state)
        this.props.filter(this.state)
    }
    render(){
        return <div>
            <select id="title" value={this.state.title} onChange={this.handleTitleChange} required>
                    <option value={""}>Select All</option>
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>Director</option>
                    <option>VP</option>
                </select>
                <select id="department" value={this.state.department} onChange={this.handleDepartmentChange} required>
                    <option value={""}>Select All</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>HR</option>
                    <option>IT</option>
                </select>
                <select id="employee_type" value={this.state.employee_type} onChange={this.handleEmployeeTypeChange} required>
                    <option value={""}>Select All</option>
                    <option>Fulltime</option>
                    <option>Parttime</option>
                    <option>Seasonal</option>
                    <option>Contract</option>
                </select>
                <select id="employee_type" value={this.state.current_status} onChange={this.handleCurrentStatusChange} required>
                    <option value={""}>Select All</option>
                    <option value={1}>Employed</option>
                    <option value={0}>Retired</option>
                </select>
                <button onClick={this.handleFilter} style={{marginLeft:"10px"}}>Filter</button>
        </div>
    }
}