import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { getAll } from './Service';

const ServiceList = () => {
  const [data, setData] = useState();
  const [recordTotal, setRecordTotal] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const limitDefault = 9;


  useEffect(() => {
    loadData();
  }, [currentPage])

  const loadData = async () => {
    const result = await getAll(currentPage, limitDefault);
    setData(result[0]);
    setRecordTotal(result[1]);
    setTotalPages(Math.ceil(result[1] / limitDefault));
  }
  console.log(totalPages);

  const prePage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  return (
    <>

      <div className='main-container'>
        <img
          class="main-carousel"
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className='services'>
          {data && data.map((item) => {
            return (
              <div className='service'>
                <div className='image-area'>
                  <img className='service-avatar' src={item.image} />
                  <button class="overlay-button" role="button">Book Now</button>
                </div>
                <div className='service-content'>
                  <div className='service-top'>
                    <div className='service-title'>{item.name}</div>
                    <div className='service-price'>${item.cost}</div>
                  </div>
                  <div className='service-bottom'>
                    <div className='service-area'>Area: {item.area} m<sup>2</sup></div>
                    <div className='service-more-detail'>
                      <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                      <span className='more-detail'>Detail</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>


        {/* Paging */}

        <nav className="d-flex justify-content-center">
          <span className="result-style">Result: <b>{recordTotal}</b> record(s)</span>
          <MDBPagination className='mb-0'>
            <MDBPaginationItem className={`${currentPage <= 1 ? "disabled" : ""}`}>
              <MDBPaginationLink onClick={() => prePage()} tabIndex={-1} >
                Previous
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem active aria-current='page'>
              <MDBPaginationLink>
                {currentPage}
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem className={`${currentPage >= totalPages ? "disabled" : ""}`}>
              <MDBPaginationLink onClick={() => nextPage()}>Next</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
      </div>
    </>
  );
};

export default ServiceList;