import * as Yup from 'yup';

/** 
 * Update profile validation schema
 * - name: required 
 * - email: valid email format
 * - phone : valid Vietnam phone number
 * 
 */

export const updateProfileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^(0|\+84)(3|5|7|8|9)+ \d{8}$/, 'Invalid phone number').required('Phone is required'),

})

/**
 * Change password validation schema
 * - oldPassword : required
 * - newPassaword: at least 6 characters and required
 * - confirmPassword: must match newPassword and required
 */

export const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().min(6, " New password must be at least 6 characters")
    .required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"),null], "Passwords must match")
    .required("Confirm Password is required"),

})