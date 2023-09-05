import React, { useEffect, useState } from 'react';
import { MDBTable, MDBContainer, MDBRow, MDBCol, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBInput, MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { getAll } from './Service';
import { Link, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const List = () => {
    const [data, setData] = useState();
    const [searchName, setSearchName] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [currentPage,setCurrentPage] = useState(0);
    const [totalPages,setTotalPages] = useState();
    const [records,setRecords] = useState("");

    const limit = 5;
    useEffect(() => {
        loadData();
    }, [refresh])


    const loadData = async () => {
        const result = await getAll(searchName,currentPage,limit);
        setData(result.content);
        const totalPages = result.totalPages;
        setTotalPages(totalPages);
        const records = result.totalElements
        setRecords(records);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    const handleSearch = () => {
        setCurrentPage(0);
        loadData();
        setRefresh((refresh) => !refresh)
    }

    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh)
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh)
    }

    return (
        <div>
            <MDBContainer>
                <div className="text-center mt-4">
                    <h1 style={{ fontSize: "35px" }}>Clothing Store</h1>
                    <div className="my-3 d-flex justify-content-between">
                        <div className="d-inline-block w-25 h-100 position-relative" >
                            <MDBInput style={{ "height": "40px" }} onKeyDown={handleKeyDown} placeholder='Search ...' id='form1' type='text' onChange={(e) => setSearchName(e.target.value)} />
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
                                <MDBTable >
                                    <MDBTableHead className="table-success">
                                        <tr style={{padding: "30px"}}>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Type</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {data ? (data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.type.name}</td>
                                                    <td>
                                                        <Link to={`${item.id}/edit/`}>
                                                            <Button>Edit</Button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })) : <div>loading ...</div>}

                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                        </MDBCol>

                    </MDBRow>
                </div>



                <nav className="d-flex justify-content-center">
            <span className="result-style">Result: <b>{records}</b> record(s)</span>
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem className={`${currentPage+1 <= 1 ? "disabled" : ""}`}>
                        <MDBPaginationLink onClick={() => prePage()} tabIndex={-1} >
                            Previous
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem active aria-current='page'>
                        <MDBPaginationLink>
                            {currentPage+1}
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem className={`${currentPage+1 >= totalPages ? "disabled" : ""}`}>
                        <MDBPaginationLink onClick={() => nextPage()}>Next</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
            </MDBContainer>
        </div>
    );
};

export default List;