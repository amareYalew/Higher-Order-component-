import React, { Component } from 'react'
import Model from './Model';
import EmailModel from './EmailModel';

export default class Employee extends Component {
 

        constructor(props) {
      
          super(props);
      
          this.state = {
      
              employees: [],
              showModal:false
      
          };
      
        }
      
        componentDidMount() {
      
          fetch("https://jsonplaceholder.typicode.com/users")
      
            .then(res => res.json())
      
            .then(
      
              (result) => {
      
                this.setState({
      
                  employees: result
      
                });
      
              }
      
            );
      
    }
    
    editEmployee=()=>{
        this.setState({showModal:!this.state.showModal});
      }
      
        render() {
      
          return (
      
            <div>
      
              <h2>Employees Data...</h2>
      
              <table>
      
                <thead>
      
                  <tr>
      
                    <th>id</th>
      
                    <th>Name of Employee </th>
      
                    <th>User Name</th>
      
                    <th>email</th>
      
                  </tr>
      
                </thead>
      
                <tbody>
      
                {this.state.employees.map(emp => (
      
                  <tr key={emp.id}>
      
                    <td>{emp.id}</td>
      
                    <td>{emp.name}</td>
      
                    <td>{emp.username}</td>
      
                        <td>{emp.email}</td>
                        <td><button onClick={this.editEmployee}>Edit</button> </td>
                        <Model open={this.state.showModal} close={this.editEmployee}>
                            <EmailModel employees={emp}></EmailModel>
                        </Model>
      
                    </tr>
      
                ))}
      
                </tbody>
      
              </table>
      
            </div>
      
            );
      
          }
      
      }
      
