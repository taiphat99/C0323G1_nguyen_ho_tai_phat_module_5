import React, { useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const useInterval = (callback, delay, stop) => {
    const savedCallback = React.useRef();


    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null && stop < 100) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay, stop]);
};



const Main = () => {

    const [seconds, setSeconds] = React.useState(0);

    const useMagicColor = () => {
        const [color, setColor] = useState('green');
        useEffect(() => {
            const intervalColor = setInterval(() => {
                const newColor = Math.round(Math.random() * 999999);
                setColor(`#${newColor}`)
            }, 200)
            return () => clearInterval(intervalColor);
        }, [])
        return color;
    }

    const color = useMagicColor();


    useInterval(() => {
        setSeconds(seconds + 1);
    }, 100, seconds);


    return (
        <>


            <table className="table align-middle mb-0 bg-white mb-3">
                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style={{ width: '45px', height: '45px' }} className="rounded-circle" />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Alex Ray</p>
                                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Consultant</p>
                            <p className="text-muted mb-0">Finance</p>
                        </td>
                        <td>
                            <span className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                        </td>
                        <td>Junior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt="" style={{ width: '45px', height: '45px' }} />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">Kate Hunington</p>
                                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Designer</p>
                            <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                            <button type="button" className="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='d-flex p-4 justify-content-around '>
                <MDBBtn color="primary" className="position-relative overflow-visible"
                >Mails
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary px-1"
                    >+99
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </MDBBtn>
                <MDBBtn className='position-relative overflow-visible' color='primary'>ALERT
                    <span className='position-absolute top-0 start-100 translate-middle bg-danger border border-light p-2 rounded-circle'></span></MDBBtn>
            </div>
            <div className='position-relative bg-dark bg-opacity-25 m-5' style={{ width: "1fr", height: "100px" }}>
                <div className='position-absolute top-0 start-0 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
                <div className='position-absolute top-0 start-100 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
                <div className='position-absolute top-0 start-50 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
                <div className='position-absolute top-100 start-50 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
                <div className='position-absolute top-100 start-0 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
                <div className='position-absolute top-100 start-100 translate-middle bg-primary' style={{ width: "40px", height: "40px", borderRadius: "5px" }}></div>
            </div>
            <div className="progress mx-5">
                <div
                    id="myprogress"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${seconds}%` }}
                    aria-valuenow={seconds}
                    aria-valuemin='0'
                    aria-valuemax='100'
                />

            </div>
            {/* <MDBBtn className='d-block mx-auto my-2' onClick={run}>Run</MDBBtn> */}
            <div style={{ backgroundColor: color, width: "200px", height: "200px", margin: "10px auto", transition: "all 0.4s linear " }}></div>


        </>
    );
};

export default Main;