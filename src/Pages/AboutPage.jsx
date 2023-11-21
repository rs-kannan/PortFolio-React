import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '../Assests/DSC_0140-02.jpeg';
import Info from '../Components/Info';
import pro from '../Assests/pro-2.jpg';
import { faAddressCard, faEject } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className='container about-cont'>
      <h2 className='section_title text-center'>
        <FontAwesomeIcon
          icon={faAddressCard}
          rotation={0}
          size='xs'
          style={{ color: 'ActiveCaption' }}
        />{' '}<span className='about'>About Me</span>
        {' '}
        <FontAwesomeIcon
          icon={faAddressCard}
          rotation={0}
          size='xs'
          style={{ color: 'ActiveCaption' }}
        />
      </h2>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <img src={pro} alt='images' className='about_img' />
        </div>
        <div className='col-md-6'>
          <div className='about_container container grid'>
            <div className='about_data'>
              <Info />
              <p className='about_description'>
                As a passionate web developer who recently completed the Full
                Stack Developer course at{' '}
                <span
                  style={{
                    color: 'red',
                    fontFamily: 'initial',
                    letterSpacing: '1px',
                    fontSize: '19.4px',
                  }}
                >
                  GUVI IIT MADRAS
                </span>
                , I am excited to start my journey as a{' '}
                <span
                  style={{
                    color: 'red',
                    fontFamily: 'initial',
                    letterSpacing: '1px',
                    fontSize: '19.4px',
                  }}
                >
                  Fresher MERN Stack Developer
                </span>
                . My dedication to crafting visually appealing and user-friendly{' '}
                <span
                  style={{
                    color: 'red',
                    fontFamily: 'initial',
                    letterSpacing: '2px',
                    fontSize: '21.4px',
                  }}
                >
                  web applications
                </span>
                , along with a strong drive to continuously learn and grow, has
                prepared me for this exciting career. I am eager to apply my
                knowledge and contribute to the{' '}
                <span
                  style={{
                    color: 'red',
                    fontFamily: 'initial',
                    letterSpacing: '1px',
                    fontSize: '21.4px',
                  }}
                >
                  world of web development.
                </span>
              </p>
              <a
                className='btn'
                href='https://drive.google.com/file/d/1hScIHYRPOSNztyVun8rbp7Pb_lbBFYKO/view?usp=sharing'
                target='_blank'
              >
                RESUME <span><FontAwesomeIcon
          icon={faEject}
          rotation={90}
          size='xs'
          style={{ color: 'ActiveCaption' }}
        /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
