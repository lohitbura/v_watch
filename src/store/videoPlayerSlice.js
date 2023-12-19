import { createSlice } from "@reduxjs/toolkit";


const videoPlayerSlice = createSlice({
    name:'videoPlayer',
    initialState:{
        videoPlayerData:null
    },
    reducers:{
        updateVideoPlayerData(state,actions){
            state.videoPlayerData =     actions.payload;
        }
    }
});

export const {updateVideoPlayerData} = videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;