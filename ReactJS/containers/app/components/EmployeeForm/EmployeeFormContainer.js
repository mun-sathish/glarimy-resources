import React from 'react';
import { addEmployee } from '../../actions/action-creators';
import { connect } from 'react-redux';
import EmployeeFormComponent from './EmployeeFormComponent';

class EmployeeFormContainer extends React.Component {
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
         <EmployeeFormComponent 
            onAdd={this.onAdd} 
            onId={e=>this.setState({id: e.target.value})}
            onName={e=>this.setState({name: e.target.value})}
            onEmail={e=>this.setState({email: e.target.value})}
         />
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       addEmployee: (employee) => dispatch(addEmployee(employee))
   };
};

export default connect(null, mapDispatchToProps)(EmployeeFormContainer);