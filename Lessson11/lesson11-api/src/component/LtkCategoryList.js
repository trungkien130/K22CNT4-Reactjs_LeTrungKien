import React from 'react'
import { instance } from '../api/LtkApi';

export default function LtkCategoryList({ renderLtkCategories, openForm, getCategories, onEditClick, openEditForm }) {
    console.log(renderLtkCategories)
    let LtkCategoryElement = renderLtkCategories.map((ltkCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{ltkCategory.ltkid}</td>
                <td>{ltkCategory.ltkCategoryName}</td>
                <td>{ltkCategory.ltkCategoryStatus === true ? "Hiển thị" : "Tạm Khóa"}</td>
                <td>
                    <button className="btn btn-success" onClick={() => { onEditClick(ltkCategory); openEditForm(true); }}>Edit</button>
                    <button className="btn btn-danger" onClick={() => ltkHandleDelete(ltkCategory.ltkid)} >Delete</button>
                </td>
            </tr>
        )
    })

    const ltkHandleDelete = async (ltkid) => {
        if (window.confirm(`Bạn có thực sự muốn xóa Category có mã ${ltkid} không`)) {
            try {
                await instance.delete(`/LtkCategory/${ltkid}`);
                getCategories()
            } catch (error) {
                console.error("Error deleting data:", error);
            }
        };
    }
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
