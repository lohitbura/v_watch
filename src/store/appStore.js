import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from './sideMenuSlice';

const appStore = configureStore({
    reducer:{
        'sideMenu':sideMenuReducer
    }
})

export default appStore;