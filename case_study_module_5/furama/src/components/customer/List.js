import React, { useEffect, useState } from "react";
import { MDBTable, MDBContainer, MDBRow, MDBCol, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBInput, MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { deleteCustomer, getAll } from "./Service";
import Modal from "../common_parts/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function CustomerList() {

    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState();
    const [searchName, setSearchName] = useState("");
    const [records, setRecords] = useState("");
    const navigate = useNavigate();
    const limit = 5;
    const [modal, setModal] = useState({
        status: false,
        data: null
    })


    useEffect(() => {
        loadData(currentPage, searchName);
        return () => {
            console.log("unmounted");
        }
    }, [refresh])

    const loadData = async (page, searchName) => {
        const res = (await getAll(page, limit, searchName));
        setData(res[0]);
        setRecords(res[1]);
        setTotalPages(Math.ceil(res[1] / limit));
    }

    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh)
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh)
    }

    const handleSearch = () => {
        setCurrentPage(1);
        loadData(currentPage, searchName);
        setRefresh((refresh) => !refresh)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    const handleShowModal = (item) => {
        setModal({
            status: true,
            data: item
        })
    }

    const handleCloseModal = () => {
        setModal({
            status: false,
            data: null
        })
    }

    const confirmDelete = async (id) => {
        await deleteCustomer(id);
        toast.success(`Delete successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
        handleCloseModal();
        setRefresh((refresh) => !refresh)
    }
    const headingToCreate = () => {
        navigate('add');
    }
    const headingToEdit = (id) => {
        navigate(`${id}/edit`);
    }
    return (
        <MDBContainer >
            <div className="text-center mt-4">
                <h2 className="">Customer List</h2>
                <div className="my-3 d-flex justify-content-between">
                    <MDBBtn className='me-1 d-content' color='success' onClick={headingToCreate}>
                        <ion-icon style={{ "fontSize": "20px", "color": "white" }} name="person-add-outline"></ion-icon>
                    </MDBBtn>
                    <div className="d-inline-block w-25 h-100 position-relative" >
                        <MDBInput style={{ "height": "40px" }} onKeyDown={handleKeyDown} label='Seach' id='form1' type='text' onChange={(e) => setSearchName(e.target.value)} />
                        <MDBIcon onClick={() => handleSearch} className="position-absolute" style={{
                            "top": "2px",
                            "right": "4px",
                            "padding": "18px"
                        }} fas icon="search" size="lg" />

                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="12">
                        <div style={{ minHeight: "450px" }}>
                            <MDBTable style={{ 'fontSize': '12px' }}>
                                <MDBTableHead className="table-success">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Card ID</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Address</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {data ? (data.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.gender ? "Male" : "Female"}</td>
                                                <td>{item.identity_number}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.email}</td>
                                                <td>{item.customer_type.name}</td>
                                                <td>{item.address}</td>
                                                <td><MDBBtn className='me-1' color='success' onClick={() => { headingToEdit(item.id) }}>Edit</MDBBtn></td>
                                                <td><MDBBtn className='me-1' color='danger' onClick={() => handleShowModal(item)}>Delete</MDBBtn></td>
                                            </tr>
                                        )
                                    })) : <div>loading ...</div>}

                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBCol>

                </MDBRow>
            </div>

            {/* Paging */}

            <nav className="d-flex justify-content-center">
                <span className="result-style">Result: <b>{records}</b> record(s)</span>
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem className={`${currentPage <= 1 ? "disabled" : ""}`}>
                        <MDBPaginationLink style={{ "user-select": "none" }} onClick={() => prePage()} tabIndex={-1} >
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem active aria-current='page'>
                        <MDBPaginationLink style={{ "user-select": "none" }}>
                            {currentPage}
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem className={`${currentPage >= totalPages ? "disabled" : ""}`}>
                        <MDBPaginationLink style={{ "user-select": "none" }} onClick={() => nextPage()}>Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>


            {
                modal.status && <Modal
                    target={modal.data.name}
                    onConfirm={() => confirmDelete(modal.data.id)}
                    handleShow={modal.status}
                    handleHide={handleCloseModal}
                />
            }


        </MDBContainer>
    )
}
export default CustomerList;
