import React from 'react';

const SocialPage = () => {
  return (
    <div className='home_social'>
      <a
        href='https://instagram.com/king_of_black_white?igshid=OGQ5ZDc2ODk2ZA=='
        className='home_social-icon'
        target='_blank'
      >
        <i className='uil uil-instagram'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/kannanrs/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        className='home_social-icon'
        target='_blank'
      >
        <i class='uil uil-linkedin'></i>
      </a>
      <a
        href='https://github.com/rs-kannan'
        className='home_social-icon'
        target='_blank'
      >
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  );
};

export default SocialPage;
