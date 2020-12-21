import React, { Component } from 'react';


const profileData = {
  velopert: {
    name:'김민준',
    description:
    '개발자입니다.'
  },
  gildong:{
    name:'홍길동',
    description:'전래동화 주인공'
  }
};

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = profileData[username];
  if (!profile){
    return <div>존재하지 않는 유저 입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;