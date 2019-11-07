import React from 'react';
import Employee from './Employee.jsx';
import { fetchEmployees } from '../actions/action-creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EmployeeList = (props) => (
   <div>
      Current Employee Strength: {props.count}
      <table>
         <tbody>
            <tr>
               <td>ID</td><td>Name</td><td>Email</td><td>Action</td>
            </tr>
            {
               props.employees.map(e => <Employee key={e.id} data={e} />)
            }
         </tbody>
      </table>
   </div>
);

Employee.propTypes = {
   counter: PropTypes.number.isRequired,
   employees: PropTypes.array.isRequired,
}

Employee.defaultProps = {
   counter: 0,
   employees: []
}

const mapStateToProps = (state) => {
   return {
      count: state.counter.count,
      employees: state.employees.list
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchEmployees: () => dispatch(fetchEmployees())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
