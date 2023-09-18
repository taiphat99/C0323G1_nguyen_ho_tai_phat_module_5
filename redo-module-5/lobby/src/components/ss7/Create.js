import React from 'react';
import { adding } from './Service';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from "react-toastify";



const Create = () => {
    const navigate = useNavigate();

    const addToList = async (value) => {
        await adding(value);
        navigate("/");
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            slug: "",
            category: "",
            thumbnail_url: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Required'),
            slug: Yup.string()
                .required('Required'),
            category: Yup.string()
                .required('Required'),
            thumbnail_url: Yup.string()
                .required('Required')
        }),
        onSubmit: async (value) => {
            await addToList(value);
            console.log(value);
            toast.success(`${value.title} added`, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }
    )
    return (
        <>
            <h1>Create</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>Title</div>
                <input name='title' type='text' value={formik.values.title} onChange={formik.handleChange}></input>
                {formik.errors.title && formik.touched.title &&
                    (<small>{formik.errors.title}</small>)}

                <div>Slug</div>
                <input name='slug' type='text' value={formik.values.slug} onChange={formik.handleChange}></input>
                {formik.errors.slug && formik.touched.slug &&
                    (<small>{formik.errors.slug}</small>)}

                <div>Category</div>
                <input name='category' type='text' value={formik.values.category} onChange={formik.handleChange}></input>
                {formik.errors.category && formik.touched.category &&
                    (<small>{formik.errors.category}</small>)}

                <div>Thumbnail URL</div>
                <input name='thumbnail_url' type='text' value={formik.values.thumbnail_url} onChange={formik.handleChange}></input>
                {formik.errors.thumbnail_url && formik.touched.thumbnail_url &&
                    (<small>{formik.errors.thumbnail_url}</small>)}
                <button className='btn btn-outline-warning d-block'>Save</button>
            </form>
        </>
    );
};

export default Create;