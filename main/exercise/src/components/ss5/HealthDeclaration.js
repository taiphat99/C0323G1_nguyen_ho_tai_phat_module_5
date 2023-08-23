import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { toast } from "react-toastify";


const HealthDeclaration = () => {
    const formik = useFormik({
        initialValues: {
            name:'',
            identityID:'',
            yob: '',
            nationality: '',
            career: '',
            position: '',
            province: '',
            subDistrict: '',
            street: '',
            phone: '',
            email:'',
        },
        validationSchema:Yup.object({
            name: Yup.string()
                .required('Required'),
            identityID: Yup.string()
                .required('Required'),
            yob: Yup.number()
                .required('Required')
                .min(1900,'>1900'),
            nationality: Yup.string()
                .required('Required'),
            province: Yup.string()
                .required('Required'),
            district: Yup.string()
                .required('Required'),
            subDistrict: Yup.string()
                .required('Required'),
            street: Yup.string()
                .required('Required'),
            phone: Yup.string()
                .required('Required'),
            email: Yup.string()
                .required('Required')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email!')
            
        }),
        onSubmit: (values) => {
            console.log(values);
            toast.success('Fill Successfully', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    })
    return (
        <div className='container'>
            <h1>Health Declaration</h1>
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <div>Name</div>
                    <input type='text' name='name' value={formik.values.name}
                        onChange={formik.handleChange} />
                    {formik.errors.name && formik.touched.name && (
                        <small className='error'>{formik.errors.name}</small>
                    )}
                </div>

                <div >
                    <div>Identity ID</div>
                    <input type='text' name='identityID' value={formik.values.identityID}
                        onChange={formik.handleChange} />
                    {formik.errors.identityID && formik.touched.identityID && (
                        <small className='error'>{formik.errors.identityID}</small>
                    )}
                </div>

                <div >
                    <div>Year of birth</div>
                    <input type='text' name='yob' value={formik.values.yob}
                        onChange={formik.handleChange} />
                    {formik.errors.yob && formik.touched.yob && (
                        <small className='error'>{formik.errors.yob}</small>
                    )}
                </div>

                <div>
                    <div>Gender</div>
                    <input type='radio' id='male' name='gender' value='male'></input>
                    <label htmlFor="male">Male</label>
                    <input type='radio' id='female' name='gender' value='female'></input>
                    <label htmlFor="female">Female</label>
                </div>

                <div >
                    <div>Nationality</div>
                    <input type='text' name='nationality' value={formik.values.nationality}
                        onChange={formik.handleChange} />
                    {formik.errors.nationality && formik.touched.nationality && (
                        <small className='error'>{formik.errors.nationality}</small>
                    )}
                </div>

                <div >
                    <div>Career</div>
                    <input type='text' name='career' value={formik.values.career}
                        onChange={formik.handleChange} />
                    {formik.errors.career && formik.touched.career && (
                        <small className='error'>{formik.errors.career}</small>
                    )}
                </div>

                <div >
                    <div>Position</div>
                    <input type='text' name='position' value={formik.values.position}
                        onChange={formik.handleChange} />
                    {formik.errors.position && formik.touched.position && (
                        <small className='error'>{formik.errors.position}</small>
                    )}
                </div>

                <div>
                    <div>Already had a health insurance card</div>
                    <input type='checkbox' value='yes' name='insurance'></input>
                </div>
                
                <h2>Information Contact in Viet Nam</h2>

                <div>
                    <div>Province</div>
                    <input type='text' name='province' value={formik.values.province} 
                    onChange={formik.handleChange}></input>
                    {formik.errors.province && formik.touched.province && (
                        <small className='error'>{formik.errors.province}</small>
                    )}
                </div>
                
                <div>
                    <div>District</div>
                    <input type='text' name='district' value={formik.values.district} 
                    onChange={formik.handleChange}></input>
                    {formik.errors.district && formik.touched.district && (
                        <small className='error'>{formik.errors.district}</small>
                    )}
                </div>
                
                <div>
                    <div>Sub-district</div>
                    <input type='text' name='subDistrict' value={formik.values.subDistrict}
                    onChange={formik.handleChange}></input>
                    {formik.errors.subDistrict && formik.touched.subDistrict && (
                        <small className='error' >{formik.errors.subDistrict}</small>
                    )}
                </div>

                <div>
                    <div>Street</div>
                    <input type='text' name='street' value={formik.values.street}
                    onChange={formik.handleChange}></input>
                    {formik.errors.street && formik.touched.street && (
                        <small className='error'>{formik.errors.street}</small>
                    )}
                </div>

                <div >
                        <div>Email</div>
                        <input type='text' name='email' value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <small className='error'>{formik.errors.email}</small>
                        )}
                    </div>
                    <div >
                        <div>Phone</div>
                        <input type='text' name='phone' value={formik.values.phone}
                            onChange={formik.handleChange} />
                        {formik.errors.phone && formik.touched.phone && (
                            <small className='error'>{formik.errors.phone}</small>
                        )}
                    </div>

                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default HealthDeclaration;       