import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { editPost, getCategories, getPostById } from './Service';
import { formatDate, formatDatePlus } from './common/Common';
import { toast } from 'react-toastify';


const Edit = () => {
    const [post, setPost] = useState();
    const navigate = useNavigate();
    const param = useParams();
    const [categories, setCategories] = useState([""]);

    useEffect(() => {
        categories && loadCategories();
    }, [])

    useEffect(() => {
        param && loadPost();
    }, [])

    const loadCategories = async () => {
        const result = await getCategories();
        setCategories(result);
    }

    const loadPost = async () => {
        const post = await getPostById(param.id);
        setPost(post);

    }

    const handleSubmitForm = async (value) => {
        let formatedDate = formatDate(value.release_date);
        value = { ...value, release_date: formatedDate, category: JSON.parse(value.category) }
        await editPost(value);
        toast.success(`${value.title} edited`, {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    }
    if (!post) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    id: post?.id,
                    title: post?.title,
                    price: post?.price,
                    category: JSON.stringify(post?.category),
                    release_date: formatDatePlus(post?.release_date)
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required')
                        .min(3, 'Title too short'),
                    price: Yup.number('Must be number')
                        .required('Required')
                        .min(0, 'Can not below 0')
                        .max(9999999999, 'Too big'),
                })}
                onSubmit={(value) => {
                    handleSubmitForm(value);
                }}>
                <Form>
                    <h1 className='text-center'>Editing</h1>
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

export default Edit;