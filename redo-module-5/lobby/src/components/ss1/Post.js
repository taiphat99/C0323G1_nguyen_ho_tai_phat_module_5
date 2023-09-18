import React, { useEffect, useState } from 'react';
import { getAll } from './Service';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Post = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const result = await getAll();
        setData(result);
    }
    return (
        <>
            <h1 className='text-center'>Post List</h1>
            <MDBTable bordered>
                <MDBTableHead>
                    <tr className='table-dark '>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Realease Date</th>
                        <th scope='col'>Action</th>
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
                                    <td>{post.category}</td>
                                    <td>{post.realease_date}</td>
                                    <Link to='/edit'><button type="button" class="btn btn-success">Edit</button></Link>
                                    <Link to='/edit'><button type="button" class="btn btn-danger">Delete</button></Link>
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