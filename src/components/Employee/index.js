import React from "react";

function Employee(props) {
    return (
        <tr>
            <th scope="row">
                <img src={props.picture} alt=""/>
            </th>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
}
export default Employee;