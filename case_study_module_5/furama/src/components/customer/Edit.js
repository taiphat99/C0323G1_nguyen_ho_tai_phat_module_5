import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { editCustomer, getCustomerById, getCustomerTypes } from './Service';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { toast } from "react-toastify";


const CustomerEditing = () => {

  const [customer, setCustomer] = useState();
  const params = useParams();
  const [customerTypes, setCustomerTypes] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getCustomer();
  }, [])

  const getCustomer = async () => {
    const customer = await getCustomerById(params.id);
    setCustomer(customer);
  }

  console.log(customer?.customer_type);


  useEffect(() => {
    loadCustomerTypes();
  }, [])

  const loadCustomerTypes = async () => {
    const res = await getCustomerTypes();
    setCustomerTypes(res);
  }

  // Extend Day.js with the customParseFormat plugin
  dayjs.extend(customParseFormat);

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
    const formatDOB = dayjs(values.dob).format('DD/MM/YYYY');
    const newValues = { ...values, dob: formatDOB, customer_type: JSON.parse(values.customer_type) }
    await editCustomer(newValues);
    navigate('/customers');
    toast.success(`Edit successfully`, {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  if (!params.id || !customerTypes || !customer) {
    return null;
  }

  return (
    <div className="cus-container">
      <Formik
        initialValues={{
          id: customer?.id,
          name: customer?.name,
          dob: dayjs(customer?.dob, 'DD/MM/YYYY').format('YYYY-MM-DD'),
          gender: customer?.gender,
          identity_number: customer?.identity_number,
          customer_type: JSON.stringify(customer?.customer_type),
          phone: customer?.phone,
          email: customer?.email,
          address: customer?.address
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
          <h1 className="text-center">Customers Editing</h1>
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
            <div className="mt-4 ms-5">Address</div>
            <Field type="text" name="address" className="d-block w-50" style={{ margin: "0 auto", padding: "3px 8px" }} />
            <ErrorMessage name='address' component='small' className='validate-failed' />
          </div>
          <input type="submit" className="d-block mt-3" style={{ margin: "0 auto", padding: "4px 14px" }} />
        </Form>
      </Formik>

    </div >
  );
}
export default CustomerEditing;
