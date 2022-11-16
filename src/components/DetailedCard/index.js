import './style.css'
import React from 'react';
import UserBadge from "../UserBadge";

const DetailedCard = ({userName, avatarUrl, userId, imgUrl, likes, isLikedByYou, comments}) => {
    return (
      <>
          <div className={'cnDetailCardRoot'}>
              <div className={'cnDetailedCardHeader'}>
                  <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId}></UserBadge>
              </div>

              <div>
                  <img src={imgUrl} alt="img"/>
              </div>

              <div className={'cnDetailedCardButtons'}>
                  <i className={`${isLikedByYou ? 'fas' : 'far'} fa-heart`}></i>
                  <i className={'fas fa-comment'}></i>
              </div>

              <div className={'cnDetailedCardLikes'}>
                  {`Оценили ${likes} человек`}
              </div>

              <div className={'cnDetailedCardComments'}>
                  comment1
                  comment2
                  comment3
              </div>

              <textarea className={'cnDetailedCardTextArea'} name="" id="" cols="30" rows="10"></textarea>
          </div>
      </>
    );
};

export default DetailedCard;
