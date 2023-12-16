import React from 'react'
import useVideosList from '../../hooks/useVideosList'
import VideoSuggestionCard from './VideoSuggestionCard';
import { useNavigate } from 'react-router-dom';

const VideoSuggestion = () => {

    const videoList = useVideosList();
    const navigate = useNavigate();
    if(!videoList){
      return <div>Loading</div>
    }
  
    const handleOnTap = (data)=>{
      navigate('/videoPlayer');
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
