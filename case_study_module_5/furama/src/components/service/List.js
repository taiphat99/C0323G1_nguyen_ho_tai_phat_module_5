import React, { useEffect, useState } from "react";
import { getAll } from "./Service";

function ServiceList() {

  const [data, setData] = useState();



  useEffect(() => {
    loadData();
  }, [])


  const loadData = async () => {
    const res = await getAll();
    setData(res);
  }

  return (
    <div className="container">
      <div className=" row ">
        {data && data.map((item) => {
          return (
            <div className="card col-4 my-3 mx-3" style={{ width: '18rem' }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-around">
                  <span className="card-title text-center">{item.name}</span>
                  <span className="card-text">{item.cost}$</span>
                </div>

                <div className="d-flex justify-content-around">
                  <a href="#" className="btn btn-primary">Edit</a>
                  <a href="#" className="btn btn-danger">Delete</a>
                </div>
              </div>
            </div>

          )
        })}


      </div>
    </div>
  )
}
export default ServiceList;