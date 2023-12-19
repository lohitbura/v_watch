import React from 'react'
import useVideosList from '../../hooks/useVideosList'
import VideoSuggestionCard from './VideoSuggestionCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateVideoPlayerData } from '../../store/videoPlayerSlice';

const VideoSuggestion = () => {

    const videoList = useVideosList();
    const dispatch = useDispatch();
    if(!videoList){
      return <div>Loading</div>
    }
  
    const handleOnTap = (data)=>{
      dispatch(updateVideoPlayerData(data));
    }

  return (
    <div className='video-suggestion'>
        {videoList.items.map((data)=><VideoSuggestionCard title={data.snippet.channelTitle} image={data.snippet.thumbnails.high.url} onTap={
        ()=>{
            console.log("Tapped")
          handleOnTap(data)
        }}/>)}
    </div>
  )
}

export default VideoSuggestion
