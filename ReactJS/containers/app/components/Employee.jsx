import React from 'react';
import { removeEmployee } from '../actions/action-creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

const Employee = (props) => (
   <tr key={props.data.id}>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td><button onClick={()=>props.removeEmployee(props.data.id)}>Remove</button></td>
   </tr>
);

Employee.propTypes = {
   data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
   })
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeEmployee: (id) => dispatch(removeEmployee(id))
   };
};

export default connect(null, mapDispatchToProps)(Employee);