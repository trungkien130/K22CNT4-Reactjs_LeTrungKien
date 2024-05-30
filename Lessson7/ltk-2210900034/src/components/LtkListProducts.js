import React, { Component } from 'react'

export default class LtkListProducts extends Component {
    render() {
        let { ltk_ListProducts } = this.props
        let Ltk_Products = ltk_ListProducts.map((item, index) => {
            return (
                <>
                    <tr key={index}>
                        <td>{item.Ltk_productId}</td>
                        <td>{item.Ltk_productName}</td>
                        <td>{item.Ltk_quantity}</td>
                        <td>{item.Ltk_price}</td>
                    </tr>
                </>
            )
        })
        return (
            <div>
                <h2>Danh sách sản phẩm</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ltk_Products}
                    </tbody>
                </table>
            </div>
        )
    }
}
