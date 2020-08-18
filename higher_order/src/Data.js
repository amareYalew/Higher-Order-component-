import React, { Component } from 'react'

export default class Data extends Component {



    render() {
        console.log(this.props.data)
        return (
            <div>
                <h2>{this.props.data.header}...</h2>
                <table>
                    <thead>
                        <tr>
                            {this.props.data.columns.map(data => (
                                <th>{data}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.data.map(emp => (
                            <tr key={emp.id}>

                                {this.props.data.columns.map(c => (
          
                                    <td>{emp[c]}</td>
          
                                ))}
          
                            </tr>
                        ))}      
                    </tbody>
                </table>

            </div>
        )
    }
}
