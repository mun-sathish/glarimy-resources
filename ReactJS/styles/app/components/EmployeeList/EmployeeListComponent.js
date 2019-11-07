import React from 'react';
import Employee from '../Employee';
import { fetchEmployees } from '../../actions/action-creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
   margin-left: 300px;
`;

const Table = styled.table`
   width: 100%;
   
   tbody tr th {
      background-color: black;
      color: white;
      padding: 10px;
   }

   tbody tr td {
      border-bottom: 1px dashed gray;
   }

   tbody tr td {
      padding: 10px;
   }

   tbody tr {
      &:hover {
         cursor: pointer;
         background-color: #DDD;
      }
   }
`;

const status = {
   color: 'gray',
   fontSize: '1.5em'
}

const EmployeeListComponent = (props) => (
   <Wrapper>
      <div style={status}>Current Employee Strength: {props.count}</div>
      <Table>
         <tbody>
            <tr>
               <th>ID</th><th>Name</th><th>Email</th><th>Action</th>
            </tr>
            {
               props.employees.map(e => <Employee key={e.id} data={e} />)
            }
         </tbody>
      </Table>
   </Wrapper>
);

export default EmployeeListComponent;
