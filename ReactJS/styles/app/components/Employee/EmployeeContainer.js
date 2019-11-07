import React from 'react';
import { removeEmployee } from '../../actions/action-creators';
import EmployeeComponent from './EmployeeComponent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

EmployeeComponent.propTypes = {
   data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
   })
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent);