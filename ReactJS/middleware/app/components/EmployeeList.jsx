import React from 'react';
import Employee from './Employee.jsx';
import {fetchEmployees} from '../actions/action-creators';
import store from '../store/store';

class EmployeeList extends React.Component {
   componentDidMount(){
      store.subscribe(()=> this.forceUpdate());
      store.dispatch(fetchEmployees());
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