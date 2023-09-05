import { useFormik } from "formik";
import React from "react";

function CustomerCreating() {

    const formik = useFormik({
        initialValues:{
            name: '',
            dob: '',
            gender:'male',
            identity_id:'',
            phone_number:'',
            email:'',
            rank:''

        }
    })


    return (
        <div className="cus-container">
        <form >
            <h1 className="text-center">Customers Creating</h1>
            <div className="content">
            <div className="mt-4 ms-5">Name</div>
            <input type="text" name="name" className="d-block  w-50" style={{margin:"0 auto", padding: "3px 8px"}} />
            
            <div className="mt-4 ms-5">Date of birth</div>
            <input type="date" name="dob" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} />

            <div className="mt-4 ms-5" htmlFor="gender">Gender</div>
            <select name="gender" id="gender" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} >
                <option value ='male'>Male</option>
                <option value= 'female'>Female</option>
            </select>
            <div className="mt-4 ms-5">Identity ID</div>
            <input type="text" name="identity_id" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} />
            <div className="mt-4 ms-5">Phone Number</div>
            <input type="text" name="phone_number" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} />
            <div className="mt-4 ms-5">Email</div>
            <input type="email" name="email" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} />
            <div className="mt-4">
                <div htmlFor="customer_type" className="ms-5">Type</div>
                <select name="customer_type" id="customer_type" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} >
                    <option value>Member</option>
                    <option value>Silver</option>
                    <option value>Golde</option>
                    <option value>Platinum</option>
                    <option value>Diamond</option>
                </select>
            </div>
            <div className="mt-4 ms-5">Address</div>
            <input type="text" name="address" className="d-block w-50" style={{margin:"0 auto", padding: "3px 8px"}} />
            </div>
            <input type="submit" className="d-block mt-3" style={{margin:"0 auto", padding: "4px 14px"}}/>
            </form>
        </div>
    );
}
export default CustomerCreating;
