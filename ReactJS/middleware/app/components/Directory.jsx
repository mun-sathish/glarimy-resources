import React from 'react';
import EmployeeForm from './EmployeeForm.jsx';
import EmployeeList from './EmployeeList.jsx';

class Directory extends React.Component {
   render() {
      return (
         <div>
            <EmployeeForm/>
            <hr />
            <EmployeeList/>
         </div>
      )
   }
}

export default Directory;