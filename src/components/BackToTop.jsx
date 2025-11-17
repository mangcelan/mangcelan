import React from 'react';
// IMAGES
import tArrow from '../assets/images/top-arrow.svg';

const backToTop = () => {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className='top-btn' onClick={backToTop}>
        <img src={tArrow} className='tArrow' alt="" />
      </div>
    </>
  );
};

export default backToTop;

