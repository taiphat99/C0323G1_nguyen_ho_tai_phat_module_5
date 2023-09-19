import React, { useEffect, useState } from 'react';
import { getPosts } from './Service';
import { useNavigate } from 'react-router-dom';
import { MDBIcon, MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';


const Post = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const result = await getPosts();
        console.log(result);
        setData(result);
    }

    const handleSearch = () => {

    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    const headingEdit = () => {
        setTimeout(() => {
            navigate('edit')
        }, 400)
    }
    const headingCreate = () => {
        setTimeout(() => {
            navigate('create')
        }, 400)
    }
    return (
        <>
            <h1 className='text-center'>Post List</h1>
            <div className="my-3 d-flex justify-content-between">
                <MDBBtn onClick={() => headingCreate()}>Create</MDBBtn>
                <div className="d-inline-block w-25 h-100 position-relative" >
                    <MDBInput style={{ "height": "40px" }} onKeyDown={handleKeyDown} placeholder='Search ...' id='form1' type='text' />
                    <MDBIcon onClick={() => handleSearch} className="position-absolute" style={{
                        "top": "2px",
                        "right": "4px",
                        "padding": "18px"
                    }} fas icon="search" size="lg" />

                </div>
            </div>
            <MDBTable bordered>
                <MDBTableHead>
                    <tr className='table-dark'>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Realease Date</th>
                        <th scope='col'>Update Time</th>
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
                                    <td>{post.realease_date}</td>
                                    <td>15 mins ago</td>
                                    <td><MDBBtn onClick={() => headingEdit()} color='warning'>
                                        Edit
                                    </MDBBtn></td>
                                    <td><MDBBtn color='danger'>
                                        Delete
                                    </MDBBtn></td>
                                </tr>
                            )
                        })
                    }

                </MDBTableBody>
            </MDBTable>
        </>
    );
};

export default Post;