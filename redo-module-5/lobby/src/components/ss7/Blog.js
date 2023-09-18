import React, { useEffect, useState } from 'react';
import { getAll } from './Service';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const result = await getAll();
        setData(result);
    }
    return (
        <div>
            <h1 className='text-center'>Blog List</h1>
            <Link to='create' className='btn btn-outline-primary'>Create</Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((blog) => {
                            return (
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.slug}</td>
                                    <td>{blog.category}</td>
                                    <td>{blog.thumbnail_url}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Blog;