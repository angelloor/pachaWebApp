import React from 'react';
import NotFounts from '../assets/static/nofound.svg';
import '../assets/styles/Background.scss';
import '../assets/styles/noFound.scss';

const NotFount = () => (
  <>
    <div className="containerNofount">
      <img src={NotFounts} alt="No Fount" width="500px" />
    </div>
  </>
);

export default NotFount;