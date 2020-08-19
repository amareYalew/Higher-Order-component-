import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Model extends Component {
    render(){
        return(
          this.props.open?ReactDOM.createPortal(
            <div >
              <button onClick={this.props.close}>X</button>
              {this.props.children}
            </div>,document.body):null
          );
      }
}

