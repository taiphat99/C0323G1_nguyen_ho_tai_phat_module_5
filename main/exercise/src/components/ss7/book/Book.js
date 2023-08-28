import { Link, useNavigate } from 'react-router-dom';
import * as bookService from './BookService';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import OriModal from '../../modals/modal/OriModal';

export const Book = () => {
    const navigate = useNavigate();
    const [bookShelf, setBookShelf] = useState([]);
    const [modal, setModal] = useState({
        status: false,
        data: null,
    });

    const handleModal = (book) => {
        setModal({
            status: true,
            data: book,
        })
    }


    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {
        const result = await bookService.getAll();
        setBookShelf(result);
    }

    const confirmDelete = async (id) => {
        await bookService.deleteBook(id);
        getAll();
        handleCloseModal();
        toast.success(`Delete successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const handleCloseModal = () => {
        setModal({
            status: false,
            data: null
        })
    }
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Book Store</h1>
                <Link to={'/books/add'} className="btn btn-outline-primary">Add</Link>
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
                        {bookShelf && bookShelf.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <th scope="row">{book.id}</th>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td><a className="btn btn-outline-primary" onClick={() => {navigate(`/books/${book.id}/edit`)}}>Edit</a></td>
                                    <td><a className="btn btn-outline-danger" onClick={() => handleModal(book)}>Delete</a></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {modal.status && <OriModal
                msg={`Are you sure to remove book: ${modal.data.title} `}
                onClose={handleCloseModal}
                onConfirm={() => confirmDelete(modal.data.id)}
            />}
        </>
    );
};
