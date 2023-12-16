import React from 'react'
import { appImages } from '../../utils/app_constants/appImages'

const SideMenuTile = ({title,isSelected,icon,onTap}) => {
  return (
    <div className={isSelected?'side-menu-tile-selected':'side-menu-tile'} onClick={()=>{
      onTap()
    }}>
        <img src={appImages.appLogo}/>
        <p>{title}</p>
    </div>
  )
}

export default SideMenuTile
