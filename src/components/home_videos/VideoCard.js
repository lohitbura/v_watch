import React from 'react';



const VideoCard = ({image,title,desc,views,onTap}) => {
  return (
    <div className='video-card' onClick={()=>{
      onTap();
    }}>
        <img src={image} />
        <h4>{title}</h4>
        <p>{views} views</p>
    </div>
  )
}

export default VideoCard
