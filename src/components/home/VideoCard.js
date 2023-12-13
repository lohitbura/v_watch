import React from 'react';
import './Home.css'


const VideoCard = ({image,title,desc,views}) => {
  return (
    <div className='video-card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s' />
        <h4>{title}</h4>
        <p>{views} views</p>
    </div>
  )
}

export default VideoCard
