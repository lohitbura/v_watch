import React from 'react'
import VideoCard from './VideoCard';
import useVideosList from '../../hooks/useVideosList.js';
import { useNavigate } from 'react-router-dom';


const VideoList = () => {

  const videoList = useVideosList();
  const navigate = useNavigate();
  if(!videoList){
    return <div>Loading</div>
  }

  const handleOnTap = (data)=>{
    navigate('/videoPlayer');
  }


  return (
    <div className='home-video-list'>
      {
        videoList.items.map((data)=><VideoCard title={data.snippet.channelTitle} image={data.snippet.thumbnails.high.url} onTap={
        ()=>{
          handleOnTap(data)
        }}/>)
      }
    </div>
  )
}

export default VideoList
