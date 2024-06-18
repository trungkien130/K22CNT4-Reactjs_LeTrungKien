import React from 'react'

export default function LtkCategoryList({ renderLtkCategories, openForm }) {
    console.log(renderLtkCategories)
    let LtkCategoryElement = renderLtkCategories.map((ltkCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{ltkCategory.ltkid}</td>
                <td>{ltkCategory.ltkCategoryName}</td>
                <td>{ltkCategory.ltkCategoryStatus === true ? "Hiển thị" : "Tạm Khóa"}</td>
            </tr>
        )
    })
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã loại</th>
                        <th>Tên loại</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {LtkCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={() => openForm(true)}>Thêm mới</button>
        </div>
    )
}
