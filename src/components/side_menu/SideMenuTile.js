import React from 'react'
import { appImages } from '../../utils/app_constants/appImages'

const SideMenuTile = ({title,isSelected,icon}) => {
  return (
    <div className={isSelected?'side-menu-tile-selected':'side-menu-tile'}>
        <img src={appImages.appLogo}/>
        <p>{title}</p>
    </div>
  )
}

export default SideMenuTile
