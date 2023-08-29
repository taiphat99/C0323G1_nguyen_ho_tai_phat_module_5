import React from "react";

function ContractCreating (){
    return(
        <div className>
        <h1>Tạo hợp đồng</h1>
        <div>Số hợp đồng</div>
        <input type="text" name="contract" />
        <div>Ngày bắt đầu</div>
        <input type="text" name="started-date" />
        <div>Ngày kết thúc</div>
        <input type="text" name="ended-date" />
        <div>Số tiền cọc trước</div>
        <input type="text" name="deposit" />
        <div>Tổng số tiền thanh toán</div>
        <input type="text" name="total" />
      </div>
    )
}
export default ContractCreating;