import React from 'react';

class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.simple = React.createRef();
      this.compound = React.createRef();
      this.defaults = {
         simple: true,
         compound: false
      }
      this.state = {
         p: undefined,
         perror: '',
         t: undefined,
         terror: '',
         r: undefined,
         rerror: '',
         si: undefined,
         ci: undefined
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
         if(this.simple.current.checked)
            this.setState({
               si: this.state.p * this.state.t * this.state.r / 100
            });
         if(this.compound.current.checked)
            this.setState({
               ci: this.state.p * this.state.t * this.state.r / 10
            });
      }
      this.onReset = () => {
            this.simple.current.checked = this.defaults.simple,
            this.compound.current.checked = this.defaults.compound
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
                     <td>Simple Interest</td>
                     <td><input type='checkbox' defaultChecked={this.defaults.simple} ref={this.simple}/></td>
                  </tr>
                  <tr>
                     <td>Compound Interest</td>
                     <td><input type='checkbox' defaultChecked={this.defaults.compound} ref={this.compound} /></td>
                  </tr>
                  <tr>
                     <td>
                        <button onClick={this.onCompute}>Compute Interest</button>
                        <button onClick={this.onReset}>Reset</button>
                     </td>
                  </tr>
               </tbody>
            </table>
            <hr />
            Simple Interest Amount: Rs. <span>{this.state.si}</span><br/>
            Compound Interest Amount: Rs. <span>{this.state.ci}</span>
         </div>
      );
   }
}

export default Calculator;