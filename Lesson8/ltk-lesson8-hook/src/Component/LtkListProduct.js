import React, { useState } from 'react'

export default function LtkListProduct({ ListProduct }) {
    let ltkTong = 0
    let ltkListProduct = ListProduct.map((item, index) => {
        ltkTong += item.Ltk_quantity * item.Ltk_price
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Ltk_productId}</td>
                    <td>{item.Ltk_productName}</td>
                    <td>{item.Ltk_quantity}</td>
                    <td>{item.Ltk_price}</td>
                    <td>{item.Ltk_quantity * item.Ltk_price}</td>
                    <td>
                        <button className='btn btn-success mx-1'><i className="fa-solid fa-pen-to-square"></i></button>
                        <button className='btn btn-danger mx-1'><i className="fa-solid fa-trash"></i></button>
                    </td>
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
                        <th>#</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {ltkListProduct}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5} className='text-right'>Tổng cộng:</th>
                        <th colSpan={2} className='text-start'>{ltkTong}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
