import React, { useEffect, useState } from 'react';
import { deletePost, getPosts } from './Service';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Modal from './common/Modal';
import { toast } from 'react-toastify';


const Post = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [modal, setModal] = useState({ status: false, data: null });
    const [resfresh, setRefresh] = useState(false);
    useEffect(() => {
        getData();
    }, [resfresh])
    const handleRefreshPage = (pre) => {
        setRefresh(!pre);
    }
    const handleShowModal = (item) => {
        setModal({ status: true, data: item })
    }
    const handHideModal = () => {
        setModal({ status: false, data: null })
    }
    const handleConfirm = async (id) => {
        await deletePost(id);
        await getData()
        toast.success(`Delete successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
        handHideModal();
        handleRefreshPage();
    }
    const getData = async () => {
        const result = await getPosts();

        setData(result);
    }

    const handleSearch = () => {

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    const headingEdit = (id) => {
        setTimeout(() => {
            navigate(`/${id}/edit`)
        }, 400)
    }
    const headingCreate = () => {
        setTimeout(() => {
            navigate('create')
        }, 400)
    }
    return (
        <>
            <MDBContainer>
                <h1 className='text-center'>Post List</h1>
                <div className="my-3 d-flex justify-content-between">
                    <MDBBtn onClick={() => headingCreate()}>Create</MDBBtn>
                    <div className="d-inline-block w-25 h-100 position-relative" >
                        <MDBInput style={{ "height": "40px" }} onKeyDown={handleKeyDown} placeholder="Search ..." id='form1' type='text' />
                        <MDBIcon onClick={() => handleSearch} className="position-absolute" style={{
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
                            <th scope='col' className='text-center'>Title</th>
                            <th scope='col' className='text-center'>Price</th>
                            <th scope='col' className='text-center'>Category</th>
                            <th scope='col' className='text-center'>Release Date</th>
                            <th scope='col' className='text-center'>Update Time</th>
                            <th colSpan={2} scope='col-2' className='text-center'>Action</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data && data.map((post) => {
                                return (
                                    <tr key={post.id}>
                                        <th scope='row'>{post.id}</th>
                                        <td>{post.title}</td>
                                        <td>{post.price}</td>
                                        <td>{post.category.name}</td>
                                        <td>{post.release_date}</td>
                                        <td>15 mins ago</td>
                                        <td><MDBBtn onClick={() => headingEdit(post.id)} color='warning'>
                                            Edit
                                        </MDBBtn></td>
                                        <td><MDBBtn color='danger' onClick={() => handleShowModal(post)}>
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
                handleHide={handHideModal}
                onConfirm={() => handleConfirm(modal.data.id)}
            />
            }
        </>
    );
};

export default Post;