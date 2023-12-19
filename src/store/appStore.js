import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from './sideMenuSlice';
import videoPlayerReducer from './videoPlayerSlice';

const appStore = configureStore({
    reducer:{
        'sideMenu':sideMenuReducer,
        'videoPlayer': videoPlayerReducer
    }
})

export default appStore;