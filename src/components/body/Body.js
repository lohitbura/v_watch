import React from 'react'
import './Body.css'
import Header from '../header/Header'
import SideMenu from '../side_menu/SideMenu'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className='body'>
     <Header/>
    <div className='body-content'>
      <SideMenu />
      <Outlet />
    </div>
    </div>
   
  )
}

export default Body
