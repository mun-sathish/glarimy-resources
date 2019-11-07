import React from 'react';

class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         p: undefined,
         perror: '',
         t: undefined,
         terror: '',
         r: undefined,
         rerror: '',
         i: undefined
      }
      this.onPrinciple = (e) => {
         let p = e.target.value;
         if (p == undefined || p == null || p.trim().length == 0 || isNaN(Number.parseInt(p)) || Number.parseInt(p) < 0)
            this.setState({
               perror: 'Invalid principle amount',
               i: ""
            });
         else {
            this.setState({
               p: e.target.value,
               perror: '',
               i: ""
            });
         }
      }
      this.onTime = (e) => {
         let t = e.target.value;
         if (t == undefined || t == null || t.trim().length == 0 || isNaN(Number.parseInt(t)) || Number.parseInt(t) < 0)
            this.setState({
               terror: 'Invalid time period',
               i: ""
            });
         else {
            this.setState({
               t: e.target.value,
               terror: '',
               i: ""
            });
         }
      }
      this.onRate = (e) => {
         let r = e.target.value;
         if (r == undefined || r == null || r.trim().length == 0 || isNaN(Number.parseInt(r)) || Number.parseInt(r) < 0)
            this.setState({
               rerror: 'Invalid rate of interest',
               i: ""
            });
         else {
            this.setState({
               r: e.target.value,
               rerror: '',
               i: ""
            });
         }
      }
      this.onCompute = (e) => {
         this.setState({
            i: this.state.p * this.state.t * this.state.r / 100
         });
      }
   }
   render() {
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td>Principle Amount (Rs.)</td>
                     <td><input defaultValue={this.state.p} onChange={this.onPrinciple} onBlur={this.onPrinciple} /></td>
                     <td>{this.state.perror}</td>
                  </tr>
                  <tr>
                     <td>Rate of Interest (%)</td>
                     <td><input defaultValue={this.state.r} onChange={this.onRate} onBlur={this.onRate} /></td>
                     <td>{this.state.rerror}</td>
                  </tr>
                  <tr>
                     <td>Time (in months)</td>
                     <td><input defaultValue={this.state.t} onChange={this.onTime} onBlur={this.onTime} /></td>
                     <td>{this.state.terror}</td>
                  </tr>
                  <tr>
                     <td><button onClick={this.onCompute}>Compute Interest</button></td>
                  </tr>
               </tbody>
            </table>
            <hr />
            Interest Amount: Rs. <span>{this.state.i}</span>
         </div>
      );
   }
}

export default Calculator;