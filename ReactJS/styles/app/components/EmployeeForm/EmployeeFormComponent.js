import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   float: left;
   margin-right: 20px;
   padding: 10px;
   background-color: #EEE;
   border: 1px #CCC solid;

   &:hover {
      background-color: #DDD;
   }
`;

const Title = styled.div`
   font-size: 1.5em;
`;

const Button = styled.button`
   padding: 5px;
   background-color: black;
   color: white;
   border: none;
`;


const EmployeeFormComponent = (props) => (
   <Wrapper>
      <Title>Add New Employee</Title>
      <table>
         <tbody>
            <tr>
               <td>Employee ID</td>
               <td><input value={props.id} onChange={props.onId} placeholder='Employee Id'/></td>
            </tr>
            <tr>
               <td>Name</td>
               <td><input value={props.name} onChange={props.onName} placeholder='Full Name' /></td>
            </tr>
            <tr>
               <td>Email</td>
               <td><input value={props.email} onChange={props.onEmail} placeholder='Official Email ID'/></td>
            </tr>
            <tr><td colSpan='2' align='right'><Button onClick={props.onAdd}>Add Employee</Button></td></tr>
         </tbody>
      </table>
   </Wrapper>
);
export default EmployeeFormComponent;