import React from "react";

function CustomerEditing(){

    return (
        <div className>
        <h1>Chỉnh sửa khách hàng</h1>
        <div>Tên</div>
        <input type="text" name="name" />
        <div>Ngày sinh</div>
        <input type="date" name="dob" />
        <div htmlFor="gender">Giới tính</div>
        <select name="gender" id="gender">
          <option value>Nam</option>
          <option value>Nữ</option>
        </select>
        <div>CMND</div>
        <input type="text" name="identity-id" />
        <div>Số điện thoại</div>
        <input type="text" name="phone-number" />
        <div>Email</div>
        <input type="email" name="email" />
        <div>
          <div htmlFor="customer-type">Loại khách</div>
          <select name="customer-type" id="customer-type">
            <option value>Member</option>
            <option value>Silver</option>
            <option value>Golde</option>
            <option value>Platinum</option>
            <option value>Diamond</option>
          </select>
        </div>
        <div>Địa chỉ</div>
        <input type="text" name="address" />
      </div>
    )
}
export default CustomerEditing;