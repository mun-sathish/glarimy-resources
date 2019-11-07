import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 150px;
  padding-right: 150px;
  box-shadow: 0px 0px 10px gray;
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