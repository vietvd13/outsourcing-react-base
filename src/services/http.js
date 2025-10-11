import { api } from "./api";

/**
 * Get request
 * @param {string} url - endpoint
 * @param {object} params - query params
 * @returns {Promise} - Promise trả về response từ server
 */
 
export const get = ( url, params ={}) => api.get(url, {params});

/**
 * Post request
 * @param {string} url - endpoint
 * @param {object} data - body gửi lên server 
 * @param {object} params - query params
 * @return {Promise} - 
 */

export const post = ( url, data, params ={}) => api.post(url, data, {params});

/**
 * Put request 
 * @param {string} url - endpoint 
 * @param {object} data - body update
 * @param {object} params - query params
 * @return {Promise} -
 * 
 */

export const put = (url, data, params ={}) => api.put (url, data, {params});

/**
 * Delete request 
 * @param {string} url - endpoint
 * @param {object} params - query params
 * @return {Promise}
 */

export const del = (url, params = {}) => api.delete(url, { params });

/**
 * Post request with formData
 * @param {string} url - endpoint
 * @param {FormData} formData - form data 
 * @return {Promise} 
 */

export const postFormData = (url, formData) => 
    api.post(url , formData, {
        headers :{"Content-Type": "multipart/form-data"},

    });
