import React, { useState } from 'react'

export default function LtkAddOrEddit({ ltkOnSubmit }) {
    const [Ltk_productId, setLtk_productId] = useState('')
    const [Ltk_productName, setLtk_productName] = useState('')
    const [Ltk_quantity, setLtk_quantity] = useState(0)
    const [Ltk_price, setLtk_price] = useState(0)
    const ltkHandleSubmit = (ltkEvent) => {
        ltkEvent.preventDefault()
        let LtkProduct = {
            Ltk_productId: Ltk_productId,
            Ltk_productName: Ltk_productName,
            Ltk_quantity: Ltk_quantity,
            Ltk_price: Ltk_price,
        }
        ltkOnSubmit(LtkProduct)
    }

    return (
        <div className='col-md-6'>
            <h2>Thêm mới sản phẩm /sửa đổi</h2>
            <hr />
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                    <input type="text" className="form-control" placeholder="Mã sản phẩm" name='Ltk_productId' value={Ltk_productId} onChange={(e) => setLtk_productId(e.target.value)} aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                    <input type="text" className="form-control" placeholder="Tên sản phẩm" name='Ltk_productName' value={Ltk_productName} onChange={(e) => setLtk_productName(e.target.value)} aria-describedby="basic-addon2" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm </span>
                    <input type="number" className="form-control" placeholder="Số lượng" name='Ltk_quantity' value={Ltk_quantity} onChange={(e) => setLtk_quantity(e.target.value)} aria-describedby="basic-addon3" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon4">Đơn giá sản phẩm</span>
                    <input type="number" className="form-control" placeholder="Đơn giá" name='Ltk_price' value={Ltk_price} onChange={(e) => setLtk_price(e.target.value)} aria-describedby="basic-addon4" />
                </div>
                <button className='btn btn-primary' name='ltkBtnAdd' onClick={ltkHandleSubmit}>Thêm mới </button>
            </form>
        </div>
    )
}
