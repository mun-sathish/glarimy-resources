import React from 'react';
import EmployeeForm from '../EmployeeForm';
import EmployeeList from '../EmployeeList.jsx';

const DirectoryComponent = () => (
   <div>
   <EmployeeForm/>
   <hr />
   <EmployeeList/>
</div>
);

export default DirectoryComponent;