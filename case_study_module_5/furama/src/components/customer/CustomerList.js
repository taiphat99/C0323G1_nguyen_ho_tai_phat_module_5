import React from "react";

function CustomerList() {
    function sendInfoToModal(id, name) {
        document.getElementById("deleteId").value = id;
        document.getElementById("bookTitle").innerText = name;
    }

    return (
        <div>
            <h1 className="text-center m-4">Danh sách khách hàng</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">CMND</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại khách</th>
                        <th scope="col">Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td><a className="btn btn-outline-warning" href>Sửa</a></td>
                        <td><a className="btn btn-outline-danger" onclick="sendInfoToModal" data-bs-toggle="modal" data-bs-target="#deleteModal">Xoá</a></td>
                    </tr>
                </tbody>
            </table>
            {/* Paging */}
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
            {/*Delete Modal*/}
            <div className="modal fade" id="deleteModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            Bạn có chắc xoá <b id="bookTitle" /> không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onclick="confirmedDelete()">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default CustomerList;
