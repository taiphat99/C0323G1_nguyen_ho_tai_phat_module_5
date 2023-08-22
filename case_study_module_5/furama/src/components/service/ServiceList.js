import React from "react";

function ServiceList(){

    return  (
<div className="d-flex justify-content-around">
        <div className="card" style={{width: '18rem'}}>
          <img src="./image/maldives.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Villa</h5>
            <p className="card-text">
            </p>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">Edit</a>
              <a href="#" className="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="./image/maldives.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">House</h5>
            <p className="card-text">
            </p>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">Edit</a>
              <a href="#" className="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="./image/maldives.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Room</h5>
            <p className="card-text">
            </p>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">Edit</a>
              <a href="#" className="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
      </div>

    )
}
export default ServiceList;