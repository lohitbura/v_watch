import React from 'react'
import SuggestionButtonList from '../../components/home/SuggestionButtonList'
import VideoList from '../../components/home_videos/VideoList' 


const HomeContainer = () => {
  return (
    <div className='home-container'>
        <SuggestionButtonList/>
        <VideoList/>
    </div>
  )
}

export default HomeContainer
