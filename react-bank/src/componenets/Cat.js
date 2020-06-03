import React, { Component } from 'react';

class Cat extends Component {

    constructor() {
        super()
        this.state = {
            amount: null,
            vendor: "",
            category: ""
        }

    }


    CatMaker = (trans) => {
        const transByCat = {}
        for (let i = 0; i < trans.length; i++) {
            if (transByCat[trans[i].category]) {
                transByCat[trans[i].category] = transByCat[trans[i].category] + trans[i].amount
            } else {
                transByCat[trans[i].category] = trans[i].amount
            }
        }
        return transByCat
    }


    render() {
        let transByCat = this.CatMaker(this.props.state)
        let transArr = [<div>By Category</div>]
        for (let key in transByCat) {
            transArr.push(<div>
                <div>{key}</div>
                <div>{transByCat[key]}</div>
            </div>)
        }
        return transArr
    }
}










export default Cat;

