import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { addService } from '../Service';
import { toast } from 'react-toastify';


const Room = () => {

    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        await addService(value);
        toast.success(`Create successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
        navigate('/services');
    }

    return (

        <Formik
            initialValues={{
                service_type: 'room',
                name: '',
                area: '',
                cost: '',
                max_capacity: '',
                renting_type: 'Hour',
                image: ''
            }}

            validationSchema={Yup.object({


            })}
            onSubmit={(values) => {
                handleSubmit(values);
            }}
        >
            <Form >
                <h1 className="text-center">Room Creating</h1>
                <div className="content">

                    <div className="mt-4 ms-5">Name</div>
                    <Field type="text" name="name" className="d-block  w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='name' component='small' className='validate-failed' />

                    <div className="mt-4 ms-5">Area</div>
                    <Field type="string" name="area" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='area' component='small' className='validate-failed' />

                    <div className="mt-4 ms-5">Cost</div>
                    <Field type="text" name="cost" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='cost' component='small' className='validate-failed' />

                    <div className="mt-4 ms-5">Capacity</div>
                    <Field type="text" name="max_capacity" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='max_capacity' component='small' className='validate-failed' />

                    <div className="mt-4">
                        <div htmlFor="renting_type" className="ms-5">Renting Type</div>
                        <Field as='select' name="renting_type" id="renting_type" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} >
                            <option value='Hour'>Hour</option>
                            <option value='Day'>Day</option>
                            <option value='Month'>Month</option>
                            <option value='Year'>Year</option>
                        </Field>
                    </div>

                    <div className="mt-4 ms-5">Image Link</div>
                    <Field type="text" name="image" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='image' component='small' className='validate-failed' />

                    <div className="mt-4 ms-5">Free Service</div>
                    <Field type="text" name="free_service" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
                    <ErrorMessage name='free_service' component='small' className='validate-failed' />
                </div>
                <input type="submit" className="d-block mt-3" style={{ margin: "0 auto", padding: "4px 14px" }} />
            </Form>
        </Formik>


    );
};

export default Room;