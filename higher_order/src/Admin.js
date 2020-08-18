import React, { Component } from 'react'
import Employee from './Employee'

import reportsHOC from './ReportHoc'


const EmployeeReports=reportsHOC(Employee,

    {Url:'https://jsonplaceholder.typicode.com/users', 
  
    columns:['id','name','username','email'],header:'Employee Data'});
  
  
  
//   const DeptReports=reportsHOC(Employee,{Url:'https://localhost:44306/api/Dept',
  
//   columns:['Id','Name','Revenue'],header:'Dept Data'});

export default class Admin extends Component {

    // constructor(props){

    //     super(props);
    
    //   }
    
      render(){
    
        return (
    
          <React.Fragment>
    
            <EmployeeReports></EmployeeReports>
    
            {/* <DeptReports></DeptReports> */}
    
          </React.Fragment>
    
        );
    
      }
}
