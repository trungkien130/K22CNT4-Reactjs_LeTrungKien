import React, { Component } from 'react'
import LtkListProducts from './components/LtkListProducts';
import LtkProductsAdd from './components/LtkProductsAdd';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Ltk_Products: [
        {
          Ltk_productId: "2210900034",
          Ltk_productName: "Lê Trung Kiên",
          Ltk_quantity: 15,
          Ltk_price: 1000
        },
        {
          Ltk_productId: "P002",
          Ltk_productName: "IPhone 12",
          Ltk_quantity: 20,
          Ltk_price: 1250
        },
        {
          Ltk_productId: "P003",
          Ltk_productName: "IPhone 13",
          Ltk_quantity: 10,
          Ltk_price: 1500
        }
      ]
    };
  }
  ltkHandleSubmit = (param) => {
    let { Ltk_Products } = this.state
    Ltk_Products.push(param)
    this.setState({
      Ltk_Products: Ltk_Products
    })
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 className="display-4">Lê Trung Kiên - 2210900034</h1>
        </div>
        <LtkListProducts ltk_ListProducts={this.state.Ltk_Products} />
        <hr />
        <LtkProductsAdd onSubmit={this.ltkHandleSubmit} />
      </div>
    )
  }
}
