import React from 'react';

class EmployeeList extends React.Component {
   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td>ID</td><td>Name</td><td>Email</td>
               </tr>
               {
                  this.props.list.map(e => <tr key={e.id}><td>{e.id}</td><td>{e.name}</td><td>{e.email}</td></tr>)
               }
            </tbody>
         </table>
      )
   }
}

export default EmployeeList;