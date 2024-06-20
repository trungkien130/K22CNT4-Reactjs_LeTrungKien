import React, { useState, useEffect } from 'react';
import { instance } from '../api/LtkApi';

export default function LtkCategoryEditForm({ closeForm, getData, ltkCategory }) {
    const [ltkCategoryName, setLtkCategoryName] = useState("");
    const [ltkCategoryStatus, setLtkCategoryStatus] = useState(true);
    const [ltkCategoryId, setltkCategoryId] = useState(0);

    useEffect(() => {
        if (ltkCategory) {
            setltkCategoryId(ltkCategory.ltkid);
            setLtkCategoryName(ltkCategory.ltkCategoryName);
            setLtkCategoryStatus(ltkCategory.ltkCategoryStatus);
        }
    }, [ltkCategory]);

    const ltkHandleSubmit = async (event) => {
        event.preventDefault();
        let ltkCategory = {
            ltkId: ltkCategoryId,
            ltkCategoryName: ltkCategoryName,
            ltkCategoryStatus: ltkCategoryStatus
        };
        try {
            await instance.put(`/LtkCategory/${ltkCategory.ltkId}`, ltkCategory);
            getData();
            closeForm(false);
            console.log(ltkCategory);
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    return (
        <div>
            <form onSubmit={ltkHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryId" className="form-label">Category Id</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryId"
                        name="categoryId"
                        value={ltkCategoryId}
                        onChange={(ev) => setltkCategoryId(ev.target.value)}
                        placeholder="Category Id"
                        aria-label="Category Id"
                    />
                </div>
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
                        onChange={(ev) => setLtkCategoryStatus(ev.target.value === 'true')}
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
