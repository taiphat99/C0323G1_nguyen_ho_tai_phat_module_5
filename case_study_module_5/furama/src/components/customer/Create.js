import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost, getCustomerTypes } from "./Service";
import * as Yup from "yup";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

function CustomerCreating() {
    const [customerTypes, setCustomerTypes] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        loadCustomerTypes();
    }, [])

    const loadCustomerTypes = async () => {
        const res = await getCustomerTypes();
        setCustomerTypes(res);
    }


    // Extend Day.js with the isSameOrBefore plugin
    dayjs.extend(isSameOrBefore);
    const validateDateOfBirth = (dob) => {
        const currentDate = dayjs();
        const age = currentDate.diff(dayjs(dob), "year")
        if (age >= 18) {
            return true;
        }
    }

    const handleSubmit = async (values) => {
        let formartDate = dayjs(values.dob).format('DD/MM/YYYY');
        const newValues = { ...values, dob: formartDate, customer_type: JSON.parse(values.customer_type) }
        console.log(newValues);
        await createPost(newValues);
        toast.success(`Create successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
        navigate('/customers')
    }

    if (!customerTypes) {
        return null;
    }
    return (
        <div className="cus-container">
            <Formik
                initialValues={{
                    name: '',
                    dob: '',
                    gender: true,
                    identity_number: '',
                    customer_type: JSON.stringify(customerTypes[0]),
                    phone: '',
                    email: '',
                    rank: '',
                    address: ''
                }}
                validationSchema={Yup.object({

                    name: Yup.string().required('Required')
                        .min(3, 'Name too short')
                        .max(50, 'Name too long'),
                    dob: Yup.date()
                        .test('cus-validate', 'Must be over 18 years old', validateDateOfBirth)
                        .required('Required'),
                    identity_number: Yup.string()
                        .required('Required')
                        .matches('^[0-9]{12}$', 'Must be enough 12 digits'),
                    phone: Yup.string()
                        .required('Required')
                        .matches('(84|0[3|5|7|8|9])+([0-9]{8})$', 'Phone number is invalid'),
                    email: Yup.string()
                        .required('Required')
                        .matches(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, 'Email is invalid'),
                    address: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}

            >
                <Form >
                    <h1 className="text-center">Customers Creating</h1>
                    <div className="content">
                        <div className="mt-4 ms-5">Name</div>
                        <Field type="text" name="name" className="d-block  w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='name' component='small' className='validate-failed' />

                        <div className="mt-4 ms-5">Date of birth</div>
                        <Field type="date" name="dob" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='dob' component='small' className='validate-failed' />

                        <div className="mt-4 ms-5" htmlFor="gender">Gender</div>
                        <Field as='select' name="gender" id="gender" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} >
                            <option value='true'>Male</option>
                            <option value='false'>Female</option>
                        </Field>

                        <div className="mt-4 ms-5">Identity Number</div>
                        <Field type="text" name="identity_number" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='identity_number' component='small' className='validate-failed' />

                        <div className="mt-4 ms-5">Phone Number</div>
                        <Field type="text" name="phone" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='phone' component='small' className='validate-failed' />

                        <div className="mt-4 ms-5">Email</div>
                        <Field type="email" name="email" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='email' component='small' className='validate-failed' />

                        <div className="mt-4">
                            <div htmlFor="customer_type" className="ms-5">Type</div>
                            <Field as='select' name="customer_type" id="customer_type" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} >
                                {
                                    customerTypes && customerTypes.map((item) => {
                                        return (<option key={item.id} value={JSON.stringify(item)}>{item.name}</option>)
                                    })
                                }

                            </Field>
                        </div>
                        {/* <div className="mt-4 ms-5">Address</div>
                        <Field type="text" name="address" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                        <ErrorMessage name='address' component='small' className='validate-failed' /> */}
                    </div>
                    <input type="submit" className="d-block mt-3" style={{ margin: "0 auto", padding: "4px 14px" }} />
                </Form>
            </Formik>

        </div >

    );
}
export default CustomerCreating;
