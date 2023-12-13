import React from 'react';
import './Header.css';
import { appImages } from '../../utils/app_constants/appImages';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-first'>
        <img className='header-menu-img' src={appImages.headerMenuIcon} />
        <img className='header-logo-img' src={appImages.appLogo} />
        </div>
      
      <div className='header-search'>
            <input />
            <button>🔍</button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header
