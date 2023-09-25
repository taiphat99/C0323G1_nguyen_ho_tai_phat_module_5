import React from "react";

function Create() {
    return (
        <div className>
            <h1>Thêm mới dịch vụ</h1>
            <div>Tên dịch vụ</div>
            <input type="text" name="service-name" />
            <div>Diện tích sử dụng</div>
            <input type="text" name="use-area" />
            <div>Chi phí thuê</div>
            <input type="text" name="rental-cost" />
            <div>Số lượng người tối đa</div>
            <input type="text" name="capacity" />
            <div>
                <div htmlFor="rental-type">Kiểu thuê</div>
                <select name="rental-type" id="rental-type">
                    <option value>Giờ</option>
                    <option value>Ngày</option>
                    <option value>Tháng</option>
                    <option value>Năm</option>
                </select>
            </div>
        </div>
    )
}
export default Create;