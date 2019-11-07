import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
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
`

const Logo = styled.div`
   font-size: 3em;
   color: #0BB;
`;

const Menu = styled.div`

`;

const Buffer = styled.div`
   height: 60px;
`
const DirectoryWrapper = styled.div`
   margin: 40px;
`;

const DirectoryComponent = () => (
   <Router>
      <DirectoryWrapper>
         <Banner>
            <Logo>Employee Directory</Logo>
            <Menu><Link to='/form'>Add New Employee</Link> | <Link to='/list'>List Employees</Link></Menu>
         </Banner>
         <Buffer/>
         <Switch>
            <Route path='/form' component={EmployeeForm}/>
            <Route path='/list' component={EmployeeList}/>
         </Switch>
      </DirectoryWrapper>
   </Router>
);

export default DirectoryComponent;