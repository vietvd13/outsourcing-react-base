import {configureStore } from '@reduxjs/toolkit';


export const setupStore = async (preloadedState) => {
    const reducer ={};

    if (import.meta.env.VITE_ENABLE_EXAMPLES === "true"){
        const {default: counter} = await import ("@/examples/store/demoCounter");
        reducer.counter = counter; // Thêm khi biến môi trường bật 
    }

    return configureStore({
        reducer,
        preloadedState, 
        devTools: import.meta.env.DEV,

    }); 
};