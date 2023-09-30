import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { addProduct, getTypes } from './Service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';


const Add = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState(null);

    useEffect(() => {
        loadTypes();
    }, [])

    const loadTypes = async () => {
        const res = await getTypes();
        setTypes(res);
    }

    const current = dayjs('2023-09-19').format('YYYY-MM-DD');
    const day = current.diff(dayjs(), "day")
    console.log(day);

    console.log(current);

    const handleSubmit = async (product) => {
        const newProduct = { ...product, type: JSON.parse(product.type) }
        await addProduct(newProduct);
        toast.success(`${product.name} was added!`, {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    }
    const validateDate = () => {
        const current = dayjs;
        console.log(current);
    }
    if (types == null) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    code: "",
                    name: "",
                    price: "",
                    type: JSON.stringify(types[0]),
                    weight: "",
                    date: "",
                }}
                validationSchema={Yup.object({
                    code: Yup.string()
                        .required('Required')
                        .matches(/^MHH-[A-Za-z0-9]{4}$/, 'Invalid Code!'),
                    name: Yup.string()
                        .required('Required'),
                    price: Yup.number('Must be number')
                        .required('Required')
                        .min(0, 'Can not below 0')
                        .max(9999999999, 'Too big!'),
                    weight: Yup.string()
                        .required('Required'),
                    date: Yup.date()
                        .test('cus-validate', 'Must be over today!', validateDate)

                })}
                onSubmit={(values) => {
                    console.log(values)
                    handleSubmit(values);
                }}>
                <Form>
                    <h1 className='text-center'>Creating</h1>
                    <div>
                        <label htmlFor='code'>Code</label>
                        <Field type='text' id='code' name='code' placeHolder='ex: MHH-1234'></Field>
                        <ErrorMessage name='code' component='span' />
                    </div>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' id='name' name='name' placeHolder='Danny Nguyen'></Field>
                        <ErrorMessage name='name' component='span' />
                    </div>
                    <div>
                        <label htmlFor='price'>Price</label>
                        <Field type='number' id='price' name='price' placeHolder='1200$'></Field>
                        <ErrorMessage name='price' component='span' />
                    </div>
                    <div>
                        <label htmlFor='weight'>Weight</label>
                        <Field type='text' id='weight' name='weight' placeHolder='12 kg'></Field>
                        <ErrorMessage name='weight' component='span' />
                    </div>
                    <div>
                        <label htmlFor='type'>Type</label>
                        <Field as='select' id='type' name='type'>
                            {types && types.map((type) => {
                                console.log(JSON.stringify(type))
                                return (<option key={type.id} value={JSON.stringify(type)}>{type.name}</option>)
                            })}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <Field type='date' id='date' name='date'></Field>
                        <ErrorMessage name='date' component='span' />
                    </div>
                    <button type='submit'>Save</button>
                </Form>
            </Formik>
        </>
    );
};

export default Add;