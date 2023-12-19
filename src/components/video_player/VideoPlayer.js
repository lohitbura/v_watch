import React from 'react'
import { useSelector } from 'react-redux'

const VideoPlayer = () => {

  const videoData = useSelector(store=>store.videoPlayer.videoPlayerData)

  console.log(videoData);

  return (
    <div className='videoplayer-box'>
      <iframe src={"https://www.youtube.com/embed/"+videoData.id+"?si=Aii19D-m4q6SREwZ"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPlayer
