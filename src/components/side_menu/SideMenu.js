import React from 'react'

import SideMenuTile from './SideMenuTile'
import { useDispatch, useSelector } from 'react-redux'
import { sideMenuUpdate } from '../../store/sideMenuSlice';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

  const menuSelected = useSelector((store)=>store.sideMenu.sideMenuSelected);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const tileList = [
    {
      title:'Home',
      key:'home'
    },
    {
      title:'Channel',
      key:'channel'
    },
    {
      title:'Subscribe',
      key:'subscribe'
    },
    {
      title:'Liked',
      key:'liked'
    },
    {
      title:'Stared',
      key:'stared'
    },    
  ]

  const handleOnTap = (key)=>{
    navigate('/');
    dispath(sideMenuUpdate(key));
  }

  return (

    <div className='side-menu'>
      {tileList.map((data)=> <SideMenuTile title={data.title} isSelected={menuSelected===data.key} onTap={
      ()=>{  handleOnTap(data.key)}
}/>)}
      </div>

  )
}

export default SideMenu
