import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import * as bookService from "./BookService"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const BookAdding = () => {
    const navigate = useNavigate();

    const addBook = async (values) => {
        await bookService.addToList(values)
        navigate("/")
    }


    const formik = useFormik({
        initialValues: {
            title: "",
            quantity: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Required'),
            quantity: Yup.number('Must be a number')
                .required('Required')
                .min(0, 'Can not < 0')
        }),
        onSubmit: async (values) => {
            console.log(values)
            await addBook(values)
            toast.success('Add successfully', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    })

  


    return (
        <div className='container mt-5'>
            <h1 className="text-center">Book Store</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='my-3'>Title</div>
                <input name='title' type='text' className='my-3' value={formik.values.title} onChange={formik.handleChange}></input>
                {formik.errors.title && formik.touched.title && (
                    <small className='error'>{formik.errors.title}</small>
                )}

                <div className='my-3'>Quantity</div>
                <input type='number' name='quantity' className='my-3' value={formik.values.quantity} onChange={formik.handleChange}></input>
                {formik.errors.quantity && formik.touched.quantity && (
                    <small className='error'>{formik.errors.quantity}</small>
                )}
                <div><button type='submit' className='btn btn-outline-primary mx-5'>Add</button></div>  
            </form>
        </div>
    );
};

export default BookAdding;