import React from 'react';
import Employee from './Employee.jsx';
import store from '../store/store';
import {fetchEmployees} from '../actions/ajax';

class EmployeeList extends React.Component {
   componentDidMount(){
      store.subscribe(()=> this.forceUpdate());
      fetchEmployees();
   }
   render() {
      return (
         <div>
            Current Employee Strength: {store.getState().counter.count}
            <table>
               <tbody>
                  <tr>
                     <td>ID</td><td>Name</td><td>Email</td><td>Action</td>
                  </tr>
                  {
                     store.getState().employees.list.map(e => <Employee key={e.id} data={e}/>)
                  }
               </tbody>
            </table>
         </div>
      )
   }
}

export default EmployeeList;