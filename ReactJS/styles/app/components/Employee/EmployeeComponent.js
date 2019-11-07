import React from 'react';
import { removeEmployee } from '../../actions/action-creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

const EmployeeComponent = (props) => (
   <tr key={props.data.id}>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td><button onClick={()=>props.removeEmployee(props.data.id)}>Remove</button></td>
   </tr>
);

export default EmployeeComponent;