import React from "react";

function Navigation(){
    return (
        <header>
        <img className="logo" src="./image/furama_logo.png" alt="" /> 
        <nav>
          <ul className="nav__links">
            <li><a href>Giới Thiệu</a></li>
            <li><a href>Loại Phòng</a></li>
            <li><a href>Ẩm Thực</a></li>
            <li><a href>Giải Trí</a></li>
            <li><a href>Ưu Đãi</a></li>
          </ul>
        </nav>
      </header>
    )
}
export default Navigation;