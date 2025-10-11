import * as Yup from 'yup';

/** 
 * Login validation schema
 * 
 * - email: must be valid email format and required
 * - password: at least 6 characters and required
 */

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

/**
 * Register validation schema
 * 
 * - name : required 
 * - email: valid email format
 * - password: at least 6 characters
 * - confirmPassword: must match password and required
 * 
 * */

export const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});