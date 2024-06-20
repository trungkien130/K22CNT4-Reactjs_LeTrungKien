import React, { useState } from 'react';
import { instance } from '../api/LtkApi';


export default function LtkCategoryForm({ closeForm, getCategories }) {
    const [ltkCategoryName, setLtkCategoryName] = useState("");
    const [ltkCategoryStatus, setLtkCategoryStatus] = useState(true);

    const ltkHandleSubmit = async (event) => {
        event.preventDefault();
        let ltkCategory = {
            ltkId: 0,
            ltkCategoryName: ltkCategoryName,
            ltkCategoryStatus: ltkCategoryStatus
        };
        await instance.post('/LtkCategory', ltkCategory);
        getCategories();
        console.log(ltkCategory)
    };

    return (
        <div>
            <form onSubmit={ltkHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        name="categoryName"
                        value={ltkCategoryName}
                        onChange={(ev) => setLtkCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoryStatus" className="form-label">Category Status</label>
                    <select
                        id="categoryStatus"
                        name="ltkCategoryStatus"
                        value={ltkCategoryStatus}
                        onChange={(ev) => setLtkCategoryStatus(ev.target.value)}
                        className="form-control"
                    >
                        <option value={true}>Hiển thị</option>
                        <option value={false}>Tạm Khóa</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Ghi lại</button>
                <button type="button" className="btn btn-danger" onClick={() => closeForm(false)}>Đóng</button>
            </form>
        </div>
    );
}
