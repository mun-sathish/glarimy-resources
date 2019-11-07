import React from 'react';
import Employee from './Employee.jsx';
import { fetchEmployees } from '../actions/action-creators';
import { connect } from 'react-redux';

class EmployeeList extends React.Component {
   render() {
      return (
         <div>
            Current Employee Strength: {this.props.count}
            <table>
               <tbody>
                  <tr>
                     <td>ID</td><td>Name</td><td>Email</td><td>Action</td>
                  </tr>
                  {
                     this.props.employees.map(e => <Employee key={e.id} data={e}/>)
                  }
               </tbody>
            </table>
         </div>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      count: state.counter.count,
      employees: state.employees.list
   };
};

const mapDispatchToProps = (dispatch) => {
   return { 
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
