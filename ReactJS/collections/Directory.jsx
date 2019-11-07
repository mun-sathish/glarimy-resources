import React from 'react';

class Directory extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         name: '',
         email: '',
         employees: []
      }
      this.onId = (e) => {
         this.setState({
            id: e.target.value
         });
      }
      this.onName = (e) => {
         this.setState({
            name: e.target.value
         });

      }
      this.onEmail = (e) => {
         this.setState({
            email: e.target.value
         });

      }
      this.onAdd = () => {
         this.setState({
            employees: [...this.state.employees, {
               id: this.state.id,
               name: this.state.name,
               email: this.state.email
            }],
            id: '',
            name: '',
            email: ''
         });
      }
   }
   render() {
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td>Employee ID</td>
                     <td><input value={this.state.id} onChange={this.onId} /></td>
                  </tr>
                  <tr>
                     <td>Name</td>
                     <td><input value={this.state.name} onChange={this.onName} /></td>
                  </tr>
                  <tr>
                     <td>Official Email</td>
                     <td><input value={this.state.email} onChange={this.onEmail} /></td>
                  </tr>
                  <tr><td><button onClick={this.onAdd}>Add Employee</button></td></tr>
               </tbody>
            </table>
            <hr />
            <table>
               <tbody>
                  <tr>
                     <td>ID</td><td>Name</td><td>Email</td>
                  </tr>
                  {
                     this.state.employees.map(e => <tr key={e.id}><td>{e.id}</td><td>{e.name}</td><td>{e.email}</td></tr>)
                  }
               </tbody>
            </table>
         </div>
      )
   }
}

export default Directory;