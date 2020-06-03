import React, { Component } from 'react';
import Transaction from './transaction'

class Transactions extends Component {



    render() {
console.log(this.props);

        return (
            
                
                    <Transaction id={this.props.info._id} delete={this.props.delete} key={this.props.info.vendor} info={this.props.info} />
                
           
        );
    }
}

export default Transactions;