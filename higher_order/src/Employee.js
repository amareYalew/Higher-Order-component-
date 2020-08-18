// import React, { Component } from 'react'

// export default class Employee extends Component {
 

//         constructor(props) {
      
//           super(props);
      
//           this.state = {
      
//             employees: []
      
//           };
      
//         }
      
//         componentDidMount() {
      
//           fetch("https://jsonplaceholder.typicode.com/users")
      
//             .then(res => res.json())
      
//             .then(
      
//               (result) => {
      
//                 this.setState({
      
//                   employees: result
      
//                 });
      
//               }
      
//             );
      
//         }
      
//         render() {
      
//           return (
      
//             <div>
      
//               <h2>Employees Data...</h2>
      
//               <table>
      
//                 <thead>
      
//                   <tr>
      
//                     <th>id</th>
      
//                     <th>Name</th>
      
//                     <th>User Name</th>
      
//                     <th>email</th>
      
//                   </tr>
      
//                 </thead>
      
//                 <tbody>
      
//                 {this.state.employees.map(emp => (
      
//                   <tr key={emp.id}>
      
//                     <td>{emp.id}</td>
      
//                     <td>{emp.name}</td>
      
//                     <td>{emp.username}</td>
      
//                     <td>{emp.email}</td>
      
//                     </tr>
      
//                 ))}
      
//                 </tbody>
      
//               </table>
      
//             </div>
      
//             );
      
//           }
      
//       }
      
