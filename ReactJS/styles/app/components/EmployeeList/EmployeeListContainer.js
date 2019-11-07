import React from 'react';
import EmployeeListComponent from './EmployeeListComponent';
import { fetchEmployees } from '../../actions/action-creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

EmployeeListComponent.propTypes = {
   counter: PropTypes.number.isRequired,
   employees: PropTypes.array.isRequired,
}

EmployeeListComponent.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListComponent);
