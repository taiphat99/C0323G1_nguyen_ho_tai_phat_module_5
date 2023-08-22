import React from "react";

function ContractList(){

    return (
        <div>
        <h1 className="text-center m-4">Danh sách hợp đồng</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Số hợp đồng</th>
              <th scope="col">Ngày bắt đầu</th>
              <th scope="col">Ngày kết thúc</th>
              <th scope="col">Tiền cọc</th>
              <th scope="col">Tổng tiền thanh toán</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item ">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" /></li>
              <li className="page-item"><span className="page-link">/</span></li>
              <li className="page-item"><a className="page-link" /></li>
              <li className="page-item">
                <a className="page-link">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}
export default ContractList;