import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getProductById, getTypes } from './Service';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Formik } from 'formik';

import * as Yup from 'yup';

const Edit = () => {
    const param = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const [types, setTypes] = useState();

    useEffect(() => {
        if (param.id) {
            loadProductDetail(param.id);
            loadTypes();
        }
    }, [param])


    const loadProductDetail = async (id) => {
        const data = await getProductById(id);
        setProduct(data);
    }


    const handleSubmit = async (values) => {
        await editProduct(values);
        navigate('/');
        toast('Edit successfully');
    }

    const loadTypes = async () => {
        const result = await getTypes();
        setTypes(result);
    }
    if (!product) {
        return null;
    }


    return (
        <div>
            <Formik initialValues={{
                id: product?.id,
                name: product?.name,
                date: product?.date,
                quantity: product?.quantity,
                type: product?.type.name
            }}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    quantity: Yup.number()
                        .min(0, 'Can not below 0')
                        .required('Required')

                })}

                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values)
                    toast.success(`${values.name} edited`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                }>

                <div className="cus-container">
                    <form>
                        <h1 className="text-center">Cloth Editing</h1>
                        <div className="content">
                            <div className="mt-4 ms-5">ID:</div>
                            <Field type="text" name="id" className="d-block  w-50" style={{ margin: "0 auto", padding: "3px 8px" }} readOnly />

                            <div className="mt-4 ms-5">Name</div>
                            <Field type="text" name="name" className="d-block  w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                            <ErrorMessage name="name" component="small" className="error" />

                            <div className="mt-4 ms-5">Date</div>
                            <Field type="date" name="date" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                            <ErrorMessage name="date" component="small" className="error" />

                            <div className="mt-4 ms-5">Quantity</div>
                            <Field type="text" name="quantity" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                            <ErrorMessage name="quantity" component="small" className="error" />

                            <div className="mt-4">
                                <div htmlFor="type" className="ms-5">Type</div>
                                <select name="type" id="customer_type" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} >
                                    {types && types.map((type) => <option value={type.name}>{type.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <input type="submit" className="d-block mt-3" style={{ margin: "0 auto", padding: "4px 14px" }} />
                    </form>
                </div>
            </Formik>
        </div>
    );
};

export default Edit;


