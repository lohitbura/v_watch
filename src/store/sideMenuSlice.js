import { createSlice } from "@reduxjs/toolkit";


const sideMenuSlice = createSlice({
    name:'sideMenu',
    initialState:{
        sideMenuHidden:false,
        sideMenuSelected:'home'
    },
    reducers:{
        toggleSideMenu(state){
            state.sideMenuHidden = !state.sideMenuHidden;
        },
        sideMenuUpdate(state,actions){
            state.sideMenuSelected = actions.payload
        }
    }
})

export const {toggleSideMenu,sideMenuUpdate} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;