import React from 'react';

class EmployeeForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         name: '',
         email: ''
      }
      this.onId = (e) => {
         this.setState({
            id: e.target.value
         });
      }
      this.onName = (e) => {
         this.setState({
            name: e.target.value
         });

      }
      this.onEmail = (e) => {
         this.setState({
            email: e.target.value
         });

      }
      this.onAdd = () => {
         this.props.add({
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
         });
         this.setState({
            id: '',
            name: '',
            email: ''
         });
      }
   }
   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td>Employee ID</td>
                  <td><input value={this.state.id} onChange={this.onId} /></td>
               </tr>
               <tr>
                  <td>Name</td>
                  <td><input value={this.state.name} onChange={this.onName} /></td>
               </tr>
               <tr>
                  <td>Official Email</td>
                  <td><input value={this.state.email} onChange={this.onEmail} /></td>
               </tr>
               <tr><td><button onClick={this.onAdd}>Add Employee</button></td></tr>
            </tbody>
         </table>
      )
   }
}

export default EmployeeForm;