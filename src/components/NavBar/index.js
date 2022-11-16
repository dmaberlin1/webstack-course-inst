import './style.css'

import React from 'react';
import UserBadge from "../UserBadge";

const NavBar = ({nickName,avatarUrl,id}) => {
    return (
      <div className={'cnNavBarRoot'}>
          <div className={'cnNavBarWrapper'}>
              <span>Picsar</span>
              <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}></UserBadge>
          </div>
      </div>
    );
};

export default NavBar;
