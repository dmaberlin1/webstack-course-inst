import './style.css'

import React from 'react';
import {useNavigate} from "react-router-dom";

const UserBadge = ({nickName,avatarUrl,id}) => {

    const navigate=useNavigate()
const onUserBadgeClick=()=>{
        navigate(`/${id}`);
    }

    return (
      <div className={'cnUserBadgeRoot'} onClick={onUserBadgeClick}>
          {avatarUrl? < img src={avatarUrl} alt={avatarUrl} className={'cnUserBadgeAvatar'}/> : <div className={'cnUserBadgePlaceholder'}></div>}
          <span className={'cnUserBadgeName'}>{nickName}</span>
      </div>
    );
};

export default UserBadge;
