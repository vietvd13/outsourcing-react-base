import {configureStore } from '@reduxjs/toolkit';


export const setupStore = (preloadedState) => 
    configureStore({
        reducer:{},
        preloadedState, 
        devTools: import.meta.env.DEV
    });