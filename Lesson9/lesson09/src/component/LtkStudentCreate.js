import React from 'react'
import { instance } from '../Api/LtkAPI'
import { useForm } from "react-hook-form";
export default function LtkStudentCreate({ ltkGetStudent }) {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await instance.post('/LtkSTUDENTS', data);
            ltkGetStudent()
            // console.log('data:', response.data);
        } catch (error) {
            // console.error('Error :', error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Họ và tên</span>
                <input type="text" className="form-control" aria-label="Ltkname" aria-describedby="basic-addon1" {...register("Ltkname")} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Tuổi</span>
                <input type="number" className="form-control" aria-label="LtkAge" aria-describedby="basic-addon2"{...register("LtkAge")} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Số điện thoại</span>
                <input type="number" className="form-control" aria-label="LtkPhone" aria-describedby="basic-addon3"{...register("LtkPhone")} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" aria-label="LtkEmail" aria-describedby="basic-addon4"{...register("LtkEmail")} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Trạng thái</span>
                <select className="form-select" aria-label="LtkStatus" {...register("LtkStatus")}>
                    <option value="true">Online</option>
                    <option value="false">Offline</option>
                </select>
            </div>

            <input type="submit" />
        </form>
    );
}