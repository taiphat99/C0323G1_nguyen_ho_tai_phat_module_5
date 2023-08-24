import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { toast } from "react-toastify";


function Contact() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('Need to be filled!'),
            email: Yup.string()
                .required('Need to be filled!')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email!'),
            phone: Yup.string()
                .required('Need to be filled!'),
            message: Yup.string()
                .required('Need to be filled!'),
        }),
        onSubmit: () => {
            toast.success('Success', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    });


    return (
        <>
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div>Name</div>
                        <input type='text' name='name' value={formik.values.name}
                            onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name && (
                            <small className='error'>{formik.errors.name}</small>
                        )}
                    </div>
                    <div>
                        <div>Email</div>
                        <input type='text' name='email' value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <small className='error'>{formik.errors.email}</small>
                        )}
                    </div>
                    <div>
                        <div>Phone</div>
                        <input type='text' name='phone' value={formik.values.phone}
                            onChange={formik.handleChange} />
                        {formik.errors.phone && formik.touched.phone && (
                            <small className='error'>{formik.errors.phone}</small>
                        )}
                    </div>
                    <div>
                        <div>Message</div>
                        <textarea type='text' name='message' value={formik.values.message}
                            onChange={formik.handleChange} />
                        {formik.errors.message && formik.touched.message && (
                            <small className='error'>{formik.errors.message}</small>
                        )}
                    </div>


                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    );
}
export default Contact;
