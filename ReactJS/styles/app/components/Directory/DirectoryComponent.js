import React from 'react';
import EmployeeForm from '../EmployeeForm';
import EmployeeList from '../EmployeeList';
import styled from 'styled-components';

const Banner = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   padding-left: 40px;
   padding-top: 10px;
   padding-bottom: 10px;
   background-color: white;
   border-bottom: gray solid 1px;
   box-shadow: 1px 1px 2px #DDD;
   font-size: 3em;
   color: #0BB;
`

const Buffer = styled.div`
   height: 60px;
`
const DirectoryWrapper = styled.div`
   margin: 40px;
`;

const DirectoryComponent = () => (
   <DirectoryWrapper>
      <Banner>Employee Directory</Banner>
      <Buffer/>
      <EmployeeForm/>
      <EmployeeList/>
   </DirectoryWrapper>
);

export default DirectoryComponent;