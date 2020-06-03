import React, { Component } from 'react';
import './Opertions.css'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: null,
            vendor: "",
            category: ""
        }

    }

    deposit = () => {

        this.props.update(this.state)
        this.setState({
            amount: "",
            vendor: "",
            category: ""
        })

    }
    Withdraw = () => {

        
        this.setState({
            amount : this.state.amount * -1
            
        },()=>{
            this.props.update(this.state)
            this.setState({
                amount:"",
                vendor: "",
                category: ""
            })
        })

    }


    updateAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }
    updateVendor = (e) => {
        this.setState({
            vendor: e.target.value
        })
    }
    updateCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    render() {

        return (
            <div>
                <div className="input">
                <input className="amount" placeholder="amount" value={this.state.amount} onChange={this.updateAmount}></input>
                <input className="vendor" placeholder="Vendor" value={this.state.vendor} onChange={this.updateVendor}></input>
                <input className="category" placeholder="Category" value={this.state.category} onChange={this.updateCategory}></input>
                </div>
                <div className="button">
                <button className="deposit" value={this.state} onClick={this.deposit} >Deposit</button>
                <button className="withdraw" value={this.state} onClick={this.Withdraw}>Withdraw</button>
                </div>
            </div>

        )
    }


}


export default Operations

