import React from "react";
function FooterTableau(props){
    return(
        <tfoot>
        <tr>
            <th>Name,{props.Name}</th>
            <th>Position,{props.Position}</th>
            <th>Office,{props.Office}</th>
            <th>Age,{props.Age}</th>
            <th>Start date,{props.StartDate}</th>
            <th>Salary,{props.Salary}</th>
        </tr>
        </tfoot>
    );
};
export default FooterTableau;