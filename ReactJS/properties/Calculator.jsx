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
         if (this.props.isInvalidPrinciple(p))
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
         if (this.props.isInvalidTime(t))
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
         if (this.props.isInvalidRate(r))
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
                     <td>Principle Amount ({this.props.currency})</td>
                     <td><input defaultValue={this.state.p} onChange={this.onPrinciple} onBlur={this.onPrinciple} /></td>
                     <td style={this.props.styles.error}>{this.state.perror}</td>
                  </tr>
                  <tr>
                     <td>Rate of Interest (%)</td>
                     <td><input defaultValue={this.state.r} onChange={this.onRate} onBlur={this.onRate} /></td>
                     <td style={this.props.styles.error}>{this.state.rerror}</td>
                  </tr>
                  <tr>
                     <td>Time (in months)</td>
                     <td><input defaultValue={this.state.t} onChange={this.onTime} onBlur={this.onTime} /></td>
                     <td style={this.props.styles.error}>{this.state.terror}</td>
                  </tr>
                  <tr>
                     <td><button onClick={this.onCompute}>Compute Interest</button></td>
                  </tr>
               </tbody>
            </table>
            <hr />
            Interest Amount: {this.props.currency} <span>{this.state.i}</span>
         </div>
      );
   }
}

export default Calculator;