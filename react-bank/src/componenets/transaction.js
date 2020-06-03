import React, { Component } from 'react';
import "./transactio.css"

class Transaction extends Component {

    delete = () => {

        this.props.delete(this.props.id)

    }

    render() {

        return (
         <div >
             <span>{this.props.info.amount} {this.props.info.vendor}  {this.props.info.category}</span>
             <button className="delete" onClick={this.delete} >Delete</button>
             </div>
        )
    }
       
      
    }


export default Transaction;

