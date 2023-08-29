import React, { useEffect, useState } from "react";
import { MDBTable, MDBContainer, MDBRow, MDBCol, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBInput, MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { getAll } from "./Service";



function CustomerList() {


    const [data, setData] = useState();

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const res = await getAll();
        setData(res);
    }

    return (
        <MDBContainer>
            <div className="text-center mt-4">
                <h2 className="">Customer List</h2>
                <div className="my-3 d-flex justify-content-between">
                    <MDBBtn className='me-1 d-content' color='success'>
                        <MDBIcon fas icon="user-plus" />
                    </MDBBtn>
                    <div className="d-inline-block w-25 h-100 position-relative">
                        <MDBInput style={{ "height": "40px" }} label='Seach' id='form1' type='text' />
                        <MDBIcon className="position-absolute" style={{
                            "top": "2px",
                            "right": "4px",
                            "padding": "18px"
                        }} fas icon="search" size="lg" />

                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBTable>
                            <MDBTableHead className="table-success">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Card ID</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {data ? (data.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.gender ? "Male" : "Female"}</td>
                                            <td>{item.identity_number}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.customer_type}</td>
                                            <td>{item.address}</td>
                                        </tr>
                                    )
                                })) : <div>loading ...</div>}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>

                </MDBRow>
            </div>
            <nav className="d-flex justify-content-center">
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem disabled>
                        <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem active aria-current='page'>
                        <MDBPaginationLink href='#'>
                            2 <span className='visually-hidden'>(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
        </MDBContainer>
    )
}
export default CustomerList;
