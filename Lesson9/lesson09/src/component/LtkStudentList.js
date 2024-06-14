import React from 'react'
import axios from 'axios';

export default function LtkStudentList({ renderLtkStudentList, setLtkStudentList, onEditClick, ltkGetStudent }) {
    // console.log(renderLtkStudentList)

    let ltkElement = renderLtkStudentList.map((ltkStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{ltkStudent.Ltkid}</td>
                <td>{ltkStudent.Ltkname}</td>
                <td>{ltkStudent.LtkAge}</td>
                <td>{ltkStudent.LtkPhone}</td>
                <td>{ltkStudent.LtkEmail}</td>
                <td>{ltkStudent.LtkStatus ? 'Online' : 'Offline'}</td>
                <td>
                    <button onClick={() => onEditClick(ltkStudent)}>Edit</button>
                    <button onClick={() => ltkHandleDelete(ltkStudent.Ltkid)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    });
    const ltkHandleDelete = async (Ltkid) => {
        try {
            await axios.delete(`https://666a97027013419182cfef1c.mockapi.io/api/ltkv1/LtkSTUDENTS/${Ltkid}`);
            setLtkStudentList(prevList => prevList.filter(ltkStudent => ltkStudent.Ltkid !== Ltkid));
            ltkGetStudent()
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };
    return (
        <div>
            <h2>Danh sách sinh viên </h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên sinh viên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {ltkElement}

                </tbody>
            </table>
        </div>
    )
}
