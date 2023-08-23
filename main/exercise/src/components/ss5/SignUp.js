import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Need to be filled!')
                .min(3, 'At least 3 digits!')
                .max(50, 'At maximum 50 digits!'),

            email: Yup.string()
                .required('Need to be filled!')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email!'),

            password: Yup.string()
                .required('Need to be filled!'),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Does not match!'),
            onSubmit: (values) => {
                console.log(values);
            }
        })
    })


    return (
        <>
            <div>
                <h1>Sign up</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div >
                        <div>Name </div>
                        <input type='text' name='name' value={formik.values.name}
                            onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name && (
                            <small className='error'>{formik.errors.name}</small>
                        )}
                    </div>
                    <div >
                        <div>Email </div>
                        <input type='text' name='email' value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <small className='error'>{formik.errors.email}</small>
                        )}
                    </div>
                    <div >
                        <div>Password </div>
                        <input type="password" name='password' value={formik.values.password}
                            onChange={formik.handleChange} />
                        {formik.errors.password && formik.touched.password && (
                            <small className='error'>{formik.errors.password}</small>
                        )}
                    </div>
                    <div >
                        <div>Confirm password </div>
                        <input type="password" name='confirmPassword' value={formik.values.confirmPassword}
                            onChange={formik.handleChange} />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <small className='error'>{formik.errors.confirmPassword}</small>
                        )}
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;