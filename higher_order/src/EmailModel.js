import React, { Component } from 'react';
// fdv 



export default class EmailModel extends Component {
    render() {
      
                return(
                <div>
                    <h2>Employee Details...</h2>
                    <p>
                        <label>Employee ID : <input type="text" value={this.props.employees.id}></input></label>
                    </p>
                    <p>
                        <label>Employee Name : <input type="text" value={this.props.employees.name}></input></label>
                    </p>
                    <p>
                        <label>Employee Location : <input type="text" value={this.props.employees.username}></input></label>
                    </p>
                    <p>
                        <label>Employee Salary : <input type="text" value={this.props.employees.email}></input></label>
                    </p>
                    <input type="submit" value="Save"></input>
                </div>
    )
            
        
    }
}
