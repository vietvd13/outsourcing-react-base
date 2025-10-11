import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function DemoValidation(){
    const formik = useFormik ({
        initialValues: {email: '', password: ''},
        validationSchema : Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
        }),
        onSubmit: (values) => alert(JSON.stringify(values, null, 2))
    
    });
    return(
        <div style ={{ padding: '20px'}}>
            <h3> Demo Validation with Formik and Yup</h3>
            <form onSubmit ={formik.handleSubmit}>
                <div style={{ marginBottom: "5px", display:"flex", alignItems: 'center'}}>
                <p style={{width: '100px'}}>Email:</p>
                <input 
                style ={{padding: '7px', width: '220px'}} 
                name="email" 
                placeholder="Enter your email"
                value= {formik.values.email}
                onChange={formik.handleChange}
            />
            {formik.errors.email && <p style={{ color: 'red', marginLeft: '20px' }}>{formik.errors.email}</p>}
            </div>
            <div style={{marginBottom: '15px', display:'flex', alignItems:'center'}}>
                <p style={{width:'100px'}}>Password:</p>
                <input
                style={{padding: '7px', width: '220px',}}   
                name="password"
                type="password"
                placeholder="Password must be at least 8 characters"
                value= {formik.values.password}
                onChange={formik.handleChange}
                />
            {formik.errors.password && <p style={{ color: 'red', marginLeft: '20px' }}>{formik.errors.password}</p>}
                </div>

                <button type ="submit">Submit</button>
            </form>
        </div>
    )
}