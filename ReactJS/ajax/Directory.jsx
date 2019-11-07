import React from 'react';
import EmployeeForm from './EmployeeForm.jsx';
import EmployeeList from './EmployeeList.jsx';

class Directory extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         employees: []
      }
      this.onAdd = (employee) => {
         this.setState({
            employees: [...this.state.employees, employee]
         });
      }
   }
   componentDidMount() {
      fetch('employees.json').then(response => {
         response.json().then(data => {
            let employees = data.employees;
            this.setState({
               employees: employees
            });
         })
      });
   }
   render() {
      return (
         <div>
            <EmployeeForm add={this.onAdd} />
            <hr />
            <EmployeeList list={this.state.employees} />
         </div>
      )
   }
}

export default Directory;