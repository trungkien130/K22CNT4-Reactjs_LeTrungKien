import axios from "../Ltk-2210900034-API/Ltk-2210900034"
import React, { useEffect, useState } from "react";
function LtkFormTableName({
    renderLtkTableName,
    onLtkReload,
    renderLtkHandleFunctionality,
    onLtkHandleFunctionality,
}) {
    const [Ltkid, setLtkid] = useState(renderLtkTableName.Ltkid);
    const [LtkName, setLtkName] = useState(renderLtkTableName.LtkName);
    const [LtkEmail, setLtkEmail] = useState(renderLtkTableName.LtkEmail);
    const [LtkPhone, setLtkPhone] = useState(renderLtkTableName.LtkPhone);
    const [LtkStatus, setLtkStatus] = useState(
        renderLtkTableName.LtkStatus
    );
    let methodTitle;

    if (renderLtkHandleFunctionality === "add new") methodTitle = "thêm mới";
    if (renderLtkHandleFunctionality === "edit") methodTitle = "sửa";

    useEffect(() => {
        setLtkid(renderLtkTableName.Ltkid);
        setLtkName(renderLtkTableName.LtkName);
        setLtkEmail(renderLtkTableName.LtkEmail);
        setLtkPhone(renderLtkTableName.LtkPhone);
        setLtkStatus(renderLtkTableName.LtkStatus);
    }, [renderLtkTableName]);

    const LtkHandleSubmit = async (LtkEvent) => {
        LtkEvent.preventDefault();
        const LtkObjTableName = {
            LtkName: LtkName,
            LtkEmail: LtkEmail,
            LtkPhone: LtkPhone,
            LtkStatus: LtkStatus,
            Ltkid: Ltkid,
        };

        try {
            if (renderLtkHandleFunctionality === "edit") {
                // Sửa Thêm dữ liệu trong api
                await axios.put(
                    `/ltkTableName/${LtkObjTableName.Ltkid}`,
                    LtkObjTableName
                );
            } else if (renderLtkHandleFunctionality === "add new") {
                // Thêm dữ liệu trong api
                await axios.post("/ltkTableName", LtkObjTableName);
            }
            onLtkReload();
            onLtkHandleFunctionality("");
        } catch (error) {
            console.error("There was an error updating or adding the data:", error);
        }
    };

    return (
        <div>
            <h2>Form xử lý dữ liệu {methodTitle}</h2>

            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Ltkid">
                        Ltkid
                    </span>
                    <input
                        type="text"
                        value={Ltkid}
                        onChange={(LtkEv) => setLtkid(LtkEv.target.value)}
                        className="form-control"
                        placeholder="Ltkid"
                        aria-label="Ltkid"
                        aria-describedby="Ltkid"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="LtkName">
                        LtkName
                    </span>
                    <input
                        type="text"
                        onChange={(LtkEv) => setLtkName(LtkEv.target.value)}
                        value={LtkName}
                        className="form-control"
                        placeholder="LtkName"
                        aria-label="LtkName"
                        aria-describedby="LtkName"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="LtkEmail">
                        LtkEmail
                    </span>
                    <input
                        type="text"
                        value={LtkEmail}
                        onChange={(LtkEv) => setLtkEmail(LtkEv.target.value)}
                        className="form-control"
                        placeholder="kienlee14@gmail.com"
                        aria-label="LtkEmail"
                        aria-describedby="LtkEmail"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="LtkPhone">
                        LtkPhone
                    </span>
                    <input
                        type="text"
                        value={LtkPhone}
                        onChange={(LtkEv) => setLtkPhone(LtkEv.target.value)}
                        className="form-control"
                        placeholder="0913088169"
                        aria-label="LtkPhone"
                        aria-describedby="LtkPhone"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="LtkStatus">
                        LtkStatus
                    </span>
                    <select
                        className="form-control"
                        value={LtkStatus}
                        name="LtkStatus"
                        id="LtkStatus"
                        onChange={(LtkEv) => setLtkStatus(LtkEv.target.value)}
                    >
                        <option value="true">Active</option>
                        <option value="false">Non-Active</option>
                    </select>
                </div>
                <button
                    onClick={LtkHandleSubmit}
                    className="btn btn-success my-2"
                    name="btnLtkSave"
                >
                    Ltk: Save
                </button>
            </form>
        </div>
    );
}

export default LtkFormTableName;