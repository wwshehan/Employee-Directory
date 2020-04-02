import React from "react";
import Employee from "../Employee";

function EmployeeWrapper (props) {
    return (
        <table className= "table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">D.O.B.</th>
            </tr>
            </thead>
            <tbody>
            {props.employees.map(employee => (
        <Employee
            key={employee.login.uuid}
            picture={employee.picture.thumbnail}
            first={employee.name.first}
            last={employee.name.last}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.date}
            />
            ))}    
        </tbody>
     </table>
 );
}
export default EmployeeWrapper;