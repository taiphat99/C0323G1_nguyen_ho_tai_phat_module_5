import { MDBBtn, MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../main/common/Modal';
import { GET_ALL, DELETE_POST } from '../redux/Action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const List = () => {

    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modal, setModal] = useState({
        status: false,
        data: null
    });


    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        dispatch({ type: GET_ALL })
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

    const headingCreate = () => {
        setTimeout(() => {
            navigate('create')
        }, 400)
    }

    const handleConfirm = (id) => {
        dispatch({ type: DELETE_POST, payload: id })
        handleCloseModal();
        toast.success(`Delete successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    return (
        <>
            <MDBContainer>
                <h1 className='text-center'>Post List</h1>
                <div className="my-3 d-flex justify-content-between">
                    <MDBBtn onClick={() => headingCreate()}>Create</MDBBtn>
                </div>
                <MDBTable bordered style={{ 'vertical-align': 'middle' }}>
                    <MDBTableHead>
                        <tr className='table-dark'>
                            <th scope='col' className='text-center'>#</th>
                            <th scope='col' className='text-center'>Title</th>
                            <th scope='col' className='text-center'>Price</th>
                            <th scope='col' className='text-center'>Category</th>
                            <th scope='col' className='text-center'>Release Date</th>
                            <th scope='col' className='text-center'>Update Time</th>
                            <th scope='col' className='text-center'>Action</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            posts && posts.map((post) => {
                                return (
                                    <tr key={post.id}>
                                        <th scope='row'>{post.id}</th>
                                        <td>{post.title}</td>
                                        <td>{post.price}</td>
                                        <td>{post.category.name}</td>
                                        <td>{post.release_date}</td>
                                        <td>15 mins ago</td>
                                        <td className='text-center'><MDBBtn color='danger' onClick={() => handleShowModal(post)}>
                                            Delete
                                        </MDBBtn></td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
            {modal.status && <Modal
                target={modal.data.title}
                handleShow={modal.status}
                handleHide={handleCloseModal}
                onConfirm={() => handleConfirm(modal.data.id)}
            />
            }
        </>
    );
};

export default List;