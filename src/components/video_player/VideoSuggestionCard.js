import React from 'react'

const VideoSuggestionCard = ({image,title,onTap}) => {
  return (
    <div className='video-suggestion-card' onClick={()=>{
        onTap();
    }}>
      <img src={image} />
        <div>
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default VideoSuggestionCard
