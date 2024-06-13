import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { instance } from '../Api/LtkAPI';

export default function LtkStudentEdit({ ltkStudent, onEditSuccess }) {
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (ltkStudent) {
            setValue("Ltkname", ltkStudent.Ltkname);
            setValue("LtkAge", ltkStudent.LtkAge);
            setValue("LtkPhone", ltkStudent.LtkPhone);
            setValue("LtkEmail", ltkStudent.LtkEmail);
            setValue("LtkStatus", ltkStudent.LtkStatus ? "true" : "false");
        }
    }, [ltkStudent, setValue]);

    const onSubmit = async (data) => {
        try {
            const response = await instance.put(`/LtkSTUDENTS/${ltkStudent.Ltkid}`, data);
            console.log('data:', response.data);
            onEditSuccess();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Họ và tên</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Ltkname"
                    aria-describedby="basic-addon1"
                    {...register("Ltkname")}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Tuổi</span>
                <input
                    type="number"
                    className="form-control"
                    aria-label="LtkAge"
                    aria-describedby="basic-addon2"
                    {...register("LtkAge")}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Số điện thoại</span>
                <input
                    type="number"
                    className="form-control"
                    aria-label="LtkPhone"
                    aria-describedby="basic-addon3"
                    {...register("LtkPhone")}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">Email</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="LtkEmail"
                    aria-describedby="basic-addon4"
                    {...register("LtkEmail")}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon5">Trạng thái</span>
                <select className="form-select" aria-label="LtkStatus" {...register("LtkStatus")}>
                    <option value="true">Online</option>
                    <option value="false">Offline</option>
                </select>
            </div>
            <input type="submit" className="btn btn-primary" />
        </form>
    );
}
