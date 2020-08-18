import React, { Component } from 'react'
import Data from './Data'


export default function reportsHOC(InputComponent, inputData) {
   
    return class extends React.Component {

        constructor(props) {
        
            super(props);
        
            this.state = {
        
                data: [],
        
                columns: inputData.columns,
        
                header: inputData.header
        
            };
    
        }


        componentDidMount() {

            fetch(inputData.Url)
      
            .then(res => res.json())
      
            .then(
      
              (result) => {
      
                this.setState({
      
                  data: result
      
                });
      
              }
      
            );
      
        }
        render() {

            return (
      
            <Data data={this.state}></Data>
      
            );
      
          } 

    }
}