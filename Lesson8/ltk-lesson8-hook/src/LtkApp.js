import { useState } from 'react';
import './App.css';
import LtkListProduct from './Component/LtkListProduct';
import LtkAddOrEddit from './Component/LtkAddOrEddit';

function LtkApp() {
  const Ltk_Products = [
    {
      Ltk_productId: "2210900034"
      , Ltk_productName: "Lê TRung Kiên"
      , Ltk_quantity: 15
      , Ltk_price: 1000
    },
    {
      Ltk_productId: "P002"
      , Ltk_productName: "IPhone 12"
      , Ltk_quantity: 20
      , Ltk_price: 1250
    },
    {
      Ltk_productId: "P003"
      , Ltk_productName: "IPhone 13"
      , Ltk_quantity: 10
      , Ltk_price: 1500
    },
  ]
  const [ltkListProduct, setLtkListProducts] = useState(Ltk_Products)
  const ltkHandleSubmit = (LtkProduct) => {
    Ltk_Products.push(LtkProduct)
  }
  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - Hook</h1>
      <LtkListProduct ListProduct={ltkListProduct} />
      <LtkAddOrEddit ltkOnSubmit={ltkHandleSubmit} />
    </div>
  );
}

export default LtkApp;
