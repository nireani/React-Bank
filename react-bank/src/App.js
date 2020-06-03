import React, { Component } from 'react';
import Operetions from './componenets/Opertions';
import Transactions from './componenets/transactions';
import Cat from './componenets/Cat';
import './App.css';


const axios = require('axios');

class App extends Component {

  constructor() {
    super()
    this.state = {
      info: [],
      balance: 0
    }

  }

  async getTransactions() {
    return await axios.get("http://localhost:8000/transactions")
  }

  updateInfo = async (newInfo) => {
    await axios.post("http://localhost:8000/transaction", newInfo)

    const res = await this.getTransactions()
    let sum = 0
    for (let i = 0; i < res.data.length; i++) {
      sum += res.data[i].amount
    }
    this.setState({
      info: res.data,
      balance: sum
    })
  }


  delete = async (id) => {
    await axios.delete(`http://localhost:8000/transaction/${id}`)
    const res = await this.getTransactions()
    let sum = 0
    for (let i = 0; i < res.data.length; i++) {
      sum += res.data[i].amount
    }
    await this.setState({
      info: res.data,
      balance: sum
    })
  }


  componentDidMount = async () => {
    const res = await this.getTransactions()

    let sum = 0
    for (let i = 0; i < res.data.length; i++) {
      sum += res.data[i].amount
    }
    this.setState({
      info: res.data,
      balance: sum
    })
  }

  render() {


    return (
      <div className="background">

        <div className="header">React Bank App</div>
        <div className="balance">Balance:{this.state.balance}</div>

        <Operetions update={this.updateInfo} state={this.state.info} />
        <div>Transactions List </div>
        <div className="App" id="people">
          {this.state.info.map((i, index) => {
            return <Transactions delete={this.delete} key={i.vendor} info={i} id={index} />
          })}
        </div>
        <Cat state={this.state.info} />

      </div >


    );
  }
}

export default App;
