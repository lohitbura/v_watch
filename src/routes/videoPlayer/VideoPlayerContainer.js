import React from 'react'
import VideoPlayer from '../../components/video_player/VideoPlayer'
import Comments from '../../components/comments_components/Comments'
import VideoSuggestion from '../../components/video_player/VideoSuggestion'

const VideoPlayerContainer = () => {
  return (
<div className='videoplayer-container'>
        <div>
            <VideoPlayer/>
            <Comments/>
        </div>
        <VideoSuggestion/>
    </div>
    
  )
}

export default VideoPlayerContainer
