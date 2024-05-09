import React, { Component } from 'react'
import LtkProductList from './components/LtkProductList'
import LtkProductAdd from './components/LtkProductAdd'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { title: 'Lê Trung Kiên', id: 2210900034, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 1 },
        { title: 'SamSung', id: 4, status: 0 },
      ]
    }
  }
  ltkHandleSubmit = (param) => {
    console.log('App:', param)
    let { products } = this.state
    products.push(param)
    this.setState({
      products: products
    })
  }
  render() {
    return (
      <div className="container border mt-5">
        <h1>Lê Trung Kiên - Render Data - Event Form</h1>
        <hr />
        <LtkProductList renderProducts={this.state.products} />
        <hr />
        <LtkProductAdd onSubmmit={this.ltkHandleSubmit} />
      </div>
    )
  }
}
