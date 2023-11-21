import {
  faGraduationCap,
  faSchool,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const QualiPage = () => {
  return (
    <>
      <div className='text-center text-container'>
        <h2 style={{ fontFamily: 'initial', fontSize: '40px' }}>
          <FontAwesomeIcon icon={faGraduationCap} className='' /> Education
        </h2>
      </div>
      <div className='container text-center content-cont'>
        <div className='row '>
          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              Bachelor's Degree
            </h3>
            <h5 className='text-contents mt-3'>
              BE - Mechanical Engineering ( 2021 - 2023 )
            </h5>
            <h5 className=' text-contents-cont mt-3'>
              Mahendra Engineering College Namakkal
            </h5>
            <h5 className='text-contents-cont mt-3'>CGPA : 8.6</h5>
          </div>

          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faUserGraduate}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              Diploma
            </h3>
            <h5 className='text-contents mt-3'>
            Mechanical Engineering ( 2018 - 2020 )
            </h5>
            <h5 className=' text-contents-cont mt-3'>
            Thiagarajar Polytechnic College Salem
            </h5>
            <h5 className=' text-contents-cont mt-3'>CGPA : 7.4</h5>
          </div>

          <div className='col-md-4'>
            <h3 className='text-content'>
              <FontAwesomeIcon
                icon={faUserGraduate}
                className='icon-quali'
                style={{ color: '#FF713D' }}
              />{' '}
              12TH Grade
            </h3>
            <h5 className='text-contents mt-3'>State Board ( 2017 - 2018 )</h5>
            <h5 className=' text-contents-cont mt-3'>
              Mahrndra.Matic.Hr.Sec.School Namakkal
            </h5>
            <h5 className=' text-contents-cont mt-3'>CGPA : 8.8</h5>{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default QualiPage;
