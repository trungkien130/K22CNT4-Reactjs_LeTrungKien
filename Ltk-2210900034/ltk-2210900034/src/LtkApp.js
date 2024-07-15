
import { useState, useEffect } from "react";
import LtkFormTableName from "./component/LtkFormTableName"
import LtkListTableName from "./component/LtkListTableName";
import axios from "./Ltk-2210900034-API/Ltk-2210900034"
export default function LtkApp() {
  // Đọc dữ liệu từ api
  const [ltkListTableName, setLtkListTableName] = useState([]);
  const LtkGetTableName = async () => {
    let LtkResp = await axios.get("/ltkTableName");
    setLtkListTableName(LtkResp.data);
  };

  useEffect(() => {
    LtkGetTableName();
  }, []);

  const LtkObjTableName = {
    LtkTbName: "Lê Trung Kiên",
    LtkTbEmail: "kienlee14@gmail.com",
    LtkTbPhone: "0913088169",
    LtkTbStatus: true,
    LtkId: "2210900034",
  };

  const [ltkTableName, setLtkTableName] = useState(LtkObjTableName);

  //Hàm xóa
  const LtkHandleDelete = async (LtkId) => {
    // console.log(LtkId);
    await axios.delete(`/ltkTableName/${LtkId}`);
    LtkGetTableName();
  };

  const [LtkHandleFunctionality, setLtkHandleFunctionality] = useState("");
  // Hàm Chức năng:  Thêm , Sửa
  const LtkHandleAddNew = (LtkFunc) => {
    setLtkHandleFunctionality(LtkFunc);
  };

  const LtkHandleEdit = (LtkFunc) => {
    setLtkHandleFunctionality(LtkFunc);
  };
  const LtkHandleObjEdit = (LtkObjEdit) => {
    setLtkTableName(LtkObjEdit);
  };

  const LtkReload = () => {
    LtkGetTableName();
  };

  console.log(LtkHandleFunctionality);
  return (
    <div className="container border my-3">
      <h1>Bài đánh giá hết học phần - Lê Trung Kiên: 2210900034</h1>
      <hr />
      <LtkListTableName
        renderLtkListTableName={ltkListTableName}
        onLtkDelete={LtkHandleDelete}
        onLtkEdit={LtkHandleEdit}
        onLtkAddNew={LtkHandleAddNew}
        onLtkEditObject={LtkHandleObjEdit}
      />
      {LtkHandleFunctionality && (
        <LtkFormTableName
          renderLtkTableName={ltkTableName}
          renderLtkHandleFunctionality={LtkHandleFunctionality}
          onLtkReload={LtkReload}
          onLtkHandleFunctionality={setLtkHandleFunctionality}
        />
      )}
    </div>
  );
}

