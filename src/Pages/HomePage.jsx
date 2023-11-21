import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import Images from '../Assests/IMG_0458.jpg';
import Pro from '../Assests/pro.jpg';
import pro1 from '../Assests/pro1.jpg';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import {
  faConnectdevelop,
  faGithub,
  faJs,
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';
import QualiPage from './QualiPage';
import Certification from './Certification';
import ProjectsPage from './ProjectsPage';
import Footer from './Footer';
import { faHandPeace, faSquare, faTerminal } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='home-container'>
              <div className='home-content'>
                <div className='home-info'>
                  <h2>
                    Hello{' '}
                    <span style={{ color: 'red', letterSpacing: '2px' }}>
                      I'm !
                    </span>
                    <FontAwesomeIcon icon={faHandPeace} style={{ color: 'red' }} />
                  </h2>
                  <h2 className='home-title'>
                    KANNAN <span style={{ color: 'red' }}>RS</span>
                  </h2>
                  <h3 className='home-subtitle'>
                    <FontAwesomeIcon icon={faTerminal} className='icon' />{' '}
                    <span id='spin'></span>
                  </h3>
                  <p className='home-description'>
                    I'm a Web <span className='home-desc'>developer.</span>
                    <span className='home-desc me-1'>
                      {' '}
                      Passionate MERN Stack Developer
                    </span>
                    creating innovative web solutions
                  </p>
                  <a href='https://wa.me/8825827613' className='btn'>
                    Say Hello
                  </a>
                  <button className='btn-git '>
                    <a
                      href='https://github.com/rs-kannan'
                      target='_blank'
                    >
                      <FontAwesomeIcon
                        icon={faSquareGithub}
                        className='home-icon'
                        style={{ color: 'black' }}
                      />
                    </a>
                  </button>
                  <a
                    className='btn-git '
                    href='https://www.linkedin.com/in/kannanrs/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    target='_blank'
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className='home-icon'
                      style={{ color: '#0A66C2' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='home-container'>
              <div className='home-content'>
                <div className='home-info'>
                  <img className='home_img' src={pro1} alt='lgo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutPage />

      <SkillsPage />

      <QualiPage />

      <Certification />

      <ProjectsPage />

      <Footer />
    </>
  );
};

export default HomePage;
