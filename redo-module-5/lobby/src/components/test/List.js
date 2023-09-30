import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getProducts, getTypes } from './Service';
import Modal from '../main/common/Modal';
import { MDBBtn, MDBContainer, MDBIcon, MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';

const List = () => {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState({ status: false, data: null });
    const navigate = useNavigate();
    const [searchName, setSearchName] = useState('');
    const [types, setTypes] = useState([]);
    const [type, setType] = useState('');


    useEffect(() => {
        loadTypes();
    }, [])

    useEffect(() => {
        loadData();
    }, [searchName, type])

    console.log(types);
    const loadTypes = async () => {
        const res = await getTypes();
        setTypes(res);
    }
    const loadData = async () => {
        const res = await getProducts(searchName, type);
        setData(res);
    }

    const headingCreate = () => {
        navigate('/add');
    }

    const handleShowModal = (product) => {
        setModal({ status: true, data: product })
    }

    const handHideModal = () => {
        setModal({ status: false, data: null })
    }
    const handleConfirm = async (product) => {
        await deleteProduct(product.id);
        await loadData();
        toast.success(`${product.name} was deleted!`, {
            position: toast.POSITION.TOP_RIGHT
        })
        handHideModal();
    }
    return (
        <>
            <MDBContainer>
                <h1 className='text-center'>Post List</h1>
                <div className="my-3 d-flex justify-content-between">
                    <MDBBtn onClick={() => headingCreate()}>Create</MDBBtn>
                    <select className='ms-auto' onChange={(event) => { setType(event.target.value) }} name='type' id='type'>
                        <option value=''>Type</option>
                        {types && types.map((types) => {
                            return (
                                <option key={types.id} value={types.id}>{types.name}</option>
                            )
                        })}
                    </select>
                    <div className="d-inline-block w-25 h-100 position-relative " >
                        <MDBInput style={{ "height": "40px" }} placeholder="Search ..." id='form1' type='text' onChange={(event) => { setSearchName(event.target.value) }} />
                        <MDBIcon className="position-absolute" style={{
                            "top": "2px",
                            "right": "4px",
                            "padding": "18px"
                        }} fas icon="search" size="lg" />
                    </div>

                </div>
                <MDBTable bordered style={{ 'vertical-align': 'middle' }}>
                    <MDBTableHead>
                        <tr className='table-dark'>
                            <th scope='col' className='text-center'>#</th>
                            <th scope='col' className='text-center'>Code</th>
                            <th scope='col' className='text-center'>Name</th>
                            <th scope='col' className='text-center'>Price</th>
                            <th scope='col' className='text-center'>Type</th>
                            <th scope='col' className='text-center'>Weight</th>
                            <th scope='col' className='text-center'>Date</th>
                            <th scope='col' className='text-center'></th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data.length > 0 ? data.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <th scope='row' className='text-center'>{product.id}</th>
                                        <td className='text-center'>{product.code}</td>
                                        <td className='text-center'>{product.name}</td>
                                        <td className='text-center'>{product.price}$</td>
                                        <td className='text-center'>{product.type.name}</td>
                                        <td className='text-center'>{product.weight}</td>
                                        <td className='text-center'>{product.date}</td>
                                        <td className='text-center'><MDBBtn color='danger' onClick={() => handleShowModal(product)}>
                                            Delete
                                        </MDBBtn></td>
                                    </tr>
                                )
                            }) : <tr className='text-center'>
                                <td colSpan={8}>No records</td>
                            </tr>
                        }
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
            {modal.status && <Modal
                target={modal.data.name}
                handleShow={modal.status}
                handleHide={handHideModal}
                onConfirm={() => handleConfirm(modal.data)}
            />
            }
        </>
    );
};

export default List;