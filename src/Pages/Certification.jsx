import { faMedal, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Certification = () => {
  return (
    <div>
      <h2
        className='text-center certi-container'
        style={{ fontFamily: 'initial', fontSize: '40px' }}
      >
        <FontAwesomeIcon icon={faShield} /> {''}
        Certification {''}
        <FontAwesomeIcon icon={faShield} /> 
      </h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='text-center'>
              <img
                src='https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp'
                alt='logo'
                className='image-fluid'
              />
              <h4 className='text-center text-certi'>GUVI GEEK - IIT Madras</h4>
              <h5 className='text-center text-certi'>MERN - Stack Developer</h5>
              <a
                className='btn'
                href='https://drive.google.com/file/d/1CbXYEdDWr9bi7xcnCo5FaK5uNf7DhvVP/view?usp=sharing'
                target='_blank'
              >
                <span>Certificate</span>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='text-center'>
              <img
                src='https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png'
                alt='logo'
                className='image-fluids'
              />
              <h4 className='text-center text-certi mt-3'>
                Udemy - Online Course
              </h4>
              <h5 className='text-center text-certi'>Front End Developer</h5>
              <a
                className='btn'
                href='https://drive.google.com/file/d/1CbXYEdDWr9bi7xcnCo5FaK5uNf7DhvVP/view?usp=sharing'
                target='_blank'
              >
                <span>Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
