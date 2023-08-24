import { Link } from 'react-router-dom';
import * as bookService from './BookService';
import React, { useEffect, useState } from 'react';

const Book = () => {
    const [bookShelf, setBookShelf] = useState([]);

    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
        const result = await bookService.getAll();
        setBookShelf(result);
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Book Store</h1>
                <Link to={'/add'} className="btn btn-outline-primary">Add</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-2">#</th>
                            <th scope="col-4">Title</th>
                            <th scope="col-4">Quantity</th>
                            <th scope="col-1" />
                            <th scope="col-1" />
                        </tr>
                    </thead>
                    <tbody>
                    {bookShelf.map((book) => {
                        return (
                        <tr key ={book.id}>
                            <th scope="row">{book.id}</th>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>                            
                            <td><a className="btn btn-outline-primary">Edit</a></td>
                            <td><a className="btn btn-outline-danger">Delete</a></td>
                        </tr>
                    )})}
                        
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Book;