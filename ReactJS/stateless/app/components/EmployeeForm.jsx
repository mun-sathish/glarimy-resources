import React from 'react';
import { addEmployee } from '../actions/action-creators';
import { connect } from 'react-redux';

class EmployeeForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         name: '',
         email: ''
      }
      this.onAdd = () => {
         this.setState({
            id: '',
            name: '',
            email: ''
         });
         this.props.addEmployee({
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
         });
      }
   }

   render() {
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td>Employee ID</td>
                     <td><input value={this.state.id} onChange={e=>this.setState({id: e.target.value})} /></td>
                  </tr>
                  <tr>
                     <td>Name</td>
                     <td><input value={this.state.name} onChange={e=>this.setState({name: e.target.value})} /></td>
                  </tr>
                  <tr>
                     <td>Official Email</td>
                     <td><input value={this.state.email} onChange={e=>this.setState({email: e.target.value})} /></td>
                  </tr>
                  <tr><td><button onClick={this.onAdd}>Add Employee</button></td></tr>
               </tbody>
            </table>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
       addEmployee: (employee) => dispatch(addEmployee(employee))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);