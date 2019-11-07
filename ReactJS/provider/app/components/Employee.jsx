import React from 'react';
import { removeEmployee } from '../actions/action-creators';
import { connect } from 'react-redux';

class Employee extends React.Component {
   constructor(props){
      super(props);
      this.onRemove = e => {
         this.props.removeEmployee(this.props.data.id);
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

const mapStateToProps = (state) => {
   return {
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      removeEmployee: (id) => dispatch(removeEmployee(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);