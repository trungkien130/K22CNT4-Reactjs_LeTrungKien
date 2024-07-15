import React from "react";
function LtkListTableName({
    renderLtkListTableName,
    onLtkDelete,
    onLtkEdit,
    onLtkAddNew,
    onLtkEditObject,
}) {
    console.log(renderLtkListTableName);
    const LtkElementTableName = renderLtkListTableName.map((LtkEl, LtkIndex) => {
        return (
            <tr key={LtkIndex}>
                <td>{LtkEl.Ltkid}</td>
                <td>{LtkEl.LtkName}</td>
                <td>{LtkEl.LtkEmail}</td>
                <td>{LtkEl.LtkPhone}</td>
                <td>{LtkEl.LtkStatus == "true" ? "Active" : "Non-active"}</td>
                <td>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            LtkHandleEdit(LtkEl);
                        }}
                    >
                        Edit
                    </button>
                    |
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            LtkHandleDelete(LtkEl.Ltkid);
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });
    const LtkHandleDelete = (Ltkid) => {
        window.confirm("Bạn có muốn xóa dữ liệu có Ltkid= " + Ltkid) &&
            onLtkDelete(Ltkid);
    };
    const LtkHandleEdit = (LtkObjectTable) => {
        onLtkEdit("edit");
        onLtkEditObject(LtkObjectTable);
    };
    const LtkHandleAddNew = () => {
        onLtkAddNew("add new");
    };
    return (
        <div>
            <div>
                <h2>Danh sách thông tin...</h2>
                <hr />
                <button
                    className="btn btn-primary my-2"
                    onClick={() => {
                        LtkHandleAddNew();
                    }}
                >
                    Add New
                </button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Ltkid</th>
                            <th>LtkName</th>
                            <th>LtkEmail</th>
                            <th>LtkPhone</th>
                            <th>LtkStatus</th>
                            <th>Ltk: Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>{LtkElementTableName}</tbody>
                </table>
            </div>
        </div>
    );
}

export default LtkListTableName;