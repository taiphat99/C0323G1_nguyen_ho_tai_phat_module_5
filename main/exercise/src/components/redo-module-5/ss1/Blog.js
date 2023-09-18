import React, { useEffect, useState } from 'react';
import { getAll } from './BlogService';
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
        <>
            <div className='container mt-5'>
                <h1>Blog List</h1>
                <Link className='btn btn-outline-primary'>Create</Link>
                <table>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                    {
                        data & data.map((blog) => {
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
                </table>
            </div>
        </>
    );
};

export default Blog;