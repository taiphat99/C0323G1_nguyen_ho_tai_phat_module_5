import React, { useEffect, useState } from "react";
import { MDBTable, MDBContainer, MDBRow, MDBCol, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBInput, MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { getAll } from "./Service";

function ContractList() {
  const [data,setData] = useState();
  
  useEffect(() => {
    loadData();
  },[])

  const loadData = async () => {
    const res = await getAll();
    setData(res);
  }


  return (

    <MDBContainer>
      <div className="text-center mt-4">
        <h2 className="">Contract List</h2>
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
                  <th scope="col">Contract Code</th>
                  <th scope="col">Effective Date</th>
                  <th scope="col">Termination Date</th>
                  <th scope="col">Deposit</th>
                  <th scope="col">Total Money</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {data ? (data.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.contract_code}</td>
                      <td>{item.start_date}</td>
                      <td>{item.end_date}</td>
                      <td>{item.deposit}$</td>
                      <td>{item.total_money}$</td>
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
export default ContractList;