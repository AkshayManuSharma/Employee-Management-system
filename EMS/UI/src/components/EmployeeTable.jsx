import { Link, BrowserRouter as Router } from "react-router-dom"
import React from "react";
export default function EmployeeTable(props){
    let rowStyle =  {border: "1px solid silver", padding: 4};

        
        return <table style={{borderCollapse : "separate"}}>
            <thead>
                <tr style={rowStyle}>
                    {/* <th style={rowStyle}>ID</th> */}
                    <th style={rowStyle}>First Name</th>
                    <th style={rowStyle}>Last Name</th>
                    <th style={rowStyle}>Age</th>
                    <th style={rowStyle}>Date Of Joining</th>
                    <th style={rowStyle}>Title</th>
                    <th style={rowStyle}>Department</th>
                    <th style={rowStyle}>Employee Type</th>
                    <th style={rowStyle}>Current Status</th>
                    <th style={rowStyle}>Edit</th>
                    <th style={rowStyle}>View</th>
                    <th style={rowStyle}>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((v,idx) => <EmployeeTableRow data={v} style={rowStyle} key={idx} edit={props.handleEdit} view={props.handleView} delete={props.handleDelete}></EmployeeTableRow>)}
            </tbody>
        </table>
}
function EmployeeTableRow(props){
    return <tr style={props.style}>
        {/*<td style={props.style}>{props.data.id}</td>*/}
        <td style={props.style}>{props.data.fname}</td>
        <td style={props.style}>{props.data.lname}</td>
        <td style={props.style}>{props.data.age}</td>
        <td style={props.style}>{props.data.date_of_joining.split("T")[0]}</td>
        <td style={props.style}>{props.data.title}</td>
        <td style={props.style}>{props.data.department}</td>
        <td style={props.style}>{props.data.employee_type}</td>
        <td style={props.style}>{props.data.current_status == 1 ? "Employed" : "Retired"}</td>
        <td style={props.style}><Link to={`/edit/${props.data._id}`}><button type="button">Edit Record</button></Link></td>
        <td style={props.style}><Link to={`/view/${props.data._id}`}><button type="button" >View Record</button></Link></td>
        <td style={props.style}><button type="button" onClick={()=>{props.delete(props.data._id)}}>Delete Record</button></td>
    </tr>
}