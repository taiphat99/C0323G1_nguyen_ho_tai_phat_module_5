import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { add, getCategories } from './Service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(['']);
    useEffect(() => {
        loadCategories();
    }, [])

    const loadCategories = async () => {
        const result = await getCategories();
        console.log(result);
        setCategories(result);
    }
    const savePost = async (values) => {
        await add(values);
    }
    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    category: { id: 1, name: "Sport" },
                    release_date: "",
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required')
                        .min(3, 'Title too short'),
                    price: Yup.number('Must be number')
                        .min(0, 'Can not below 0')
                        .max(9999999999, 'Too big')
                })}
                onSubmit={async (values) => {
                    await savePost(values)
                    toast.success(`${values.title} added`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    navigate('');
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
                                return <option key={type.id} value={type}>{type.name}</option>
                            })}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor='release_date'>Realease Date</label>
                        <Field type='date' id='release_date' name='release_date'></Field>
                        <ErrorMessage name='release_date' component='span' />
                    </div>
                    <button>Save</button>
                </Form>
            </Formik >
        </>
    );
};

export default Create;