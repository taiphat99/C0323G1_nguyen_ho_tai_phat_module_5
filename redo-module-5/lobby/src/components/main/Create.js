import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { add, getCategories } from './Service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatDate } from './common/Common';

const Create = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([""]);
    useEffect(() => {
        loadCategories();
    }, [])


    const loadCategories = async () => {
        const result = await getCategories();
        setCategories(result);
    }

    const savePost = async (values) => {
        await add(values);
    }

    const handleSubmit = async (values) => {
        let formatedDate = formatDate(values.release_date);
        console.log(values.category);
        values = { ...values, release_date: formatedDate, category: JSON.parse(values.category) }
        await savePost(values);
        toast.success(`${values.title} added`, {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    }
    if (!categories[0]) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    category: JSON.stringify(categories[0]),
                    release_date: "",
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required')
                        .min(3, 'Title too short'),
                    price: Yup.number('Must be number')
                        .required('Required')
                        .min(0, 'Can not below 0')
                        .max(9999999999, 'Too big'),
                    // category: Yup.string()
                    //     .required('Required'),
                    // release_date: Yup.date()
                    //     .required('Required')
                })}
                onSubmit={(values) => {
                    console.log(values.id);
                    handleSubmit(values);

                }}>
                <Form>
                    <h1 className='text-center'>Creating</h1>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <Field type='text' id='title' name='title'></Field>
                        <ErrorMessage name='title' component='span' />
                    </div>
                    <div>
                        <label htmlFor='price'>Price</label>
                        <Field type='number' id='price' name='price'></Field>
                        <ErrorMessage name='price' component='span' />
                    </div>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <Field as='select' id='category' name='category'>
                            {categories && categories.map((type) => {
                                console.log(JSON.stringify(type))
                                return (<option key={type.id} value={JSON.stringify(type)}>{type.name}</option>)
                            })}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor='release_date'>Realease Date</label>
                        <Field type='date' id='release_date' name='release_date'></Field>
                        <ErrorMessage name='release_date' component='span' />
                    </div>
                    <button type='submit'>Save</button>
                </Form>
            </Formik>
        </>
    );
};

export default Create;