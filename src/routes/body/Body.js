import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import SideMenu from '../../components/side_menu/SideMenu'
import { useSelector } from 'react-redux'


const Body = () => {
  const sideMenuHidden = useSelector(store=>store.sideMenu.sideMenuHidden);
  return (
    <div className='body'>
     <Header/>
    <div className='body-content'>
      {
    !sideMenuHidden &&  <SideMenu />

      }
      <Outlet />
    </div>
    </div>
   
  )
}

export default Body
