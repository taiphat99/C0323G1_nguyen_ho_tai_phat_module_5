import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from "./BookService"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";





const BookEdit = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState();

    const param = useParams();


    useEffect(() => {
        if (param.id) {
            loadProductDetail(param.id);
        }

    },[param])


    const loadProductDetail = async (id) => {
        const data = await bookService.getProductById(id);
        console.log(data);
        setProduct(data);
    }


    const handleSubmit = async (values) => {
        await bookService.editProduct(values);
        navigate('/books');
    }
    if (!product) {
        return null;
    }
    return (
        <div>
            <Formik
                initialValues={{
                    id: product?.id,
                    title: product?.title,
                    quantity: product?.quantity
                }}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required'),
                    quantity: Yup.number()
                        .required('Required')
                })}

                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values)
                    toast.success(`${values.title} edited`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                }
            >

                <Form>
                    <div className='container mt-5'>
                        <h1 className="text-center">Edition</h1>
                        <div className='my-3'>Title</div>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="small" className="error" />
                        <div className='my-3'>Quantity</div>
                        <Field type="number" name="quantity" />
                        <ErrorMessage name="quantity" component="small" className="error" />
                        <div className='my-3'><button type='submit' className='btn btn-outline-primary mx-5'>Edit</button></div>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

export default BookEdit;