import React from 'react';

const EmployeeFormComponent = (props) => (
   <div>
      <table>
         <tbody>
            <tr>
               <td>Employee ID</td>
               <td><input value={props.id} onChange={props.onId} /></td>
            </tr>
            <tr>
               <td>Name</td>
               <td><input value={props.name} onChange={props.onName} /></td>
            </tr>
            <tr>
               <td>Official Email</td>
               <td><input value={props.email} onChange={props.onEmail} /></td>
            </tr>
            <tr><td><button onClick={props.onAdd}>Add Employee</button></td></tr>
         </tbody>
      </table>
   </div>
);
export default EmployeeFormComponent;