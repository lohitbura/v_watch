import React from 'react';

import { appImages } from '../../utils/app_constants/appImages';
import { useDispatch } from 'react-redux';
import { toggleSideMenu } from '../../store/sideMenuSlice';

const Header = () => {

  const dispath = useDispatch();

  const handleMenuClick = ()=>{
    console.log('jree');
      dispath(toggleSideMenu());
  }

  return (
    <div className='header'>
        <div className='header-first'>
        <img className='header-menu-img' src={appImages.headerMenuIcon} onClick={()=>{
          handleMenuClick();
        }
        }/>
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
