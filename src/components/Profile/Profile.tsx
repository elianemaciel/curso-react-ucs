import React from 'react';

import './Profile.css';

export interface ProfileProps {
  imgScr: string;
  imgAlt: string;
}

const Profile = ({imgScr, imgAlt}: ProfileProps) => {
  return <img
    src={imgScr}
    alt={imgAlt}
    style={{ width: '200px' }}
    />;
}

export default Profile
