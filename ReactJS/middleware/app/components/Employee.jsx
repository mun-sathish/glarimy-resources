import React from 'react';
import {removeEmployee} from '../actions/action-creators';
import store from '../store/store';

class Employee extends React.Component {
   constructor(props){
      super(props);
      this.onRemove = e => {
         store.dispatch(removeEmployee(this.props.data.id));
      }
   }
   render() {
      return (
        <tr key={this.props.data.id}>
         <td>{this.props.data.id}</td>
         <td>{this.props.data.name}</td>
         <td>{this.props.data.email}</td>
         <td><button onClick={this.onRemove}>Remove</button></td>
        </tr>
      )
   }
}

export default Employee;