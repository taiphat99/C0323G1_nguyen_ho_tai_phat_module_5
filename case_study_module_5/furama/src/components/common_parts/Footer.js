import React from "react";

function Footer() {
  return (
    <div>
      <div style={{ height: "240px" }} />
      <footer>
        <div className="first-part">
          <p className="title-1">Giới Thiệu</p>
          <p className="intro">
            Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những
            điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn
            là bốn Di sản Văn hóa Thế giới được UNESCO công nhận
          </p>
          <p className="title-2">Địa Điểm</p>
          <ol>
            <li>
              1. Cố đô Huế <span>2 tiếng</span>
            </li>
            <li>
              2. Phố cổ Hội An<span>20 phút</span>
            </li>
            <li>
              3. Thánh địa Mỹ Sơn<span>90 phút</span>
            </li>
            <li>
              4. Động Phong Nha<span>3 tiếng</span>
            </li>
          </ol>
        </div>
        <div className="second-part">
          <p className="title-1">Công Ty</p>
          <ul>
            <li>
              <a href="">Giá công bố</a>
            </li>
            <li>
              <a href="">Chính sách công ty</a>
            </li>
            <li>
              <a href="">Tuyển dụng</a>
            </li>
            <li>
              <a href="">Liên hệ</a>
            </li>
            <li>
              <a href="">Lifestyle Blog</a>
            </li>
          </ul>
        </div>
        <div className="third-part">
          <p className="title-1">Liên Hệ</p>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot" />
              <span>
                103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành
                Sơn, Tp. Đà Nẵng, Việt Nam
              </span>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <span>84-236-3847 333/888</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <span>reservation@furamavietnam.com</span>
            </li>
          </ul>
        </div>
        <div className="fourth-part" />
      </footer>
    </div>
  );
}
export default Footer;
