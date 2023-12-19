import React from 'react'
import VideoCard from './VideoCard';
import useVideosList from '../../hooks/useVideosList.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateVideoPlayerData } from '../../store/videoPlayerSlice.js';


const VideoList = () => {

  const videoList = useVideosList();
  const navigate = useNavigate();
  const dispath = useDispatch();
  if(!videoList){
    return <div>Loading</div>
  }

  const handleOnTap = (data)=>{
    dispath(updateVideoPlayerData(data));
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
