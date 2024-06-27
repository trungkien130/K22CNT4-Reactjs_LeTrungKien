import React from 'react'

export default function LtkListUser({ dataUser }) {
    let dataUserElement = dataUser.map((item, index) => {
        return (
            <tr key={item + 1}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.UserName}</td>
                <td>{item.Password}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>Sửa | Xóa</td>

            </tr>
        )
    })
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUserElement}
                </tbody>
            </table>
        </div>
    )
}
