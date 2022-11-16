import React from 'react';
import './style.css'
import NavBar from "../NavBar";
const Layout = ({nickName,avatarUrl,id,children}) => {
    return (
      <div className={'cnLayoutRoot'}>
          <NavBar nickName={nickName} avatarUrl={avatarUrl} id={id}/>
          <div className={'cnLayoutBody'}>
              {children}
          </div>
      </div>
    );
};

export default Layout;
