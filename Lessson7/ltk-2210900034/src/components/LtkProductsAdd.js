import React, { Component } from 'react'

export default class LtkProductsAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ltk_productId: 0,
            Ltk_productName: '',
            Ltk_quantity: 0,
            Ltk_price: 0
        }
    }
    ltkHandleChange = (event) => {
        let Ltk_name = event.target.name
        let Ltk_value = event.target.value
        this.setState({
            [Ltk_name]: Ltk_value
        })
    }
    ltkHandleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"> ID </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='Ltk_productId'
                            value={this.state.Ltk_productId}
                            onChange={this.ltkHandleChange}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2"> Tên sản phẩm </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='Ltk_productName'
                            value={this.state.Ltk_productName}
                            onChange={this.ltkHandleChange}
                        />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3"> Số lượng </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name='Ltk_quantity'
                            value={this.state.Ltk_quantity}
                            onChange={this.ltkHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3"> Giá </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name='Ltk_price'
                            value={this.state.Ltk_price}
                            onChange={this.ltkHandleChange}
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.ltkHandleSubmit}>Ghi lại</button>
                </form>
            </div>
        )
    }
}
