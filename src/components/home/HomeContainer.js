import React from 'react'
import VideoList from './VideoList'
import SuggestionButtonList from './SuggestionButtonList'
import './Home.css';

const HomeContainer = () => {
  return (
    <div className='home-container'>
        <SuggestionButtonList/>
        <VideoList/>
    </div>
  )
}

export default HomeContainer
