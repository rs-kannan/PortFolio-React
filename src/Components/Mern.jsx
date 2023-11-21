import Gold from '../Assests/Gold.png';
import Auth from '../Assests/auth.png';
import Url from '../Assests/Url.png';
import Chat from '../Assests/caht.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Mern = () => {
  return (
    <div className='container front-cont'>
      <div className='row'>
        <div className='col-md-4'>
          <div
            class='card'
            style={{width: '21rem',
            backgroundColor: '#5BA1FF',
            color: 'black',
            }}
          >
            <img src={Gold} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title mt-4'>ITEM CATALOG</h5>
              <p class='card-text'>
              E-Commerce project using Context API and 'Add to Cart' feature is a frontend application that
               allows users to browse and purchase products.
              </p>
              <a
                href='https://github.com/rs-kannan/Hateybazarey-capstone-project.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/rs-kannan/Hateybazarey-capstone-project.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://hateybazarey.onrender.com/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div
            class='card'
            style={{width: '21rem',
            backgroundColor: '#5BA1FF',
            color: 'black',
            }}
          >
            <img
              src={Chat}
              class='card-img-top'
              alt='...'
              style={{ height: '21.3vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>Chat Application</h5>
              <p class='card-text'>
                MERN (MongoDB, Express.js, React, Node.js) project platform for
                users to register, log in, and engage in real-time chat
                conversations. It combines user authentication with instant
                messaging, creating a private and authenticated chat
                environment.And create Groups and chat with your friends.
              </p>
              <a
                href='https://github.com/rs-kannan/Chatapp-FrontEnd.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/rs-kannan/ChatApp-Backend-master.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://legendary-cajeta-a42b5f.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div
            class='card'
            style={{width: '21rem',
            backgroundColor: '#5BA1FF',
            color: 'black',
            }}
          >
            <img
              src={Url}
              class='card-img-top'
              alt='...'
              style={{ height: '24vh' }}
            />
            <div class='card-body'>
              <h5 class='card-title mt-4'>BLOG-APP</h5>
              <p class='card-text'>
              A Blog Website project for creating and navigating through blog content. 
              It offers seamless page routing and easy navigation, while exploring a collection of blogs and articles.
              </p>
              <a
                href='https://github.com/rs-kannan/Blog-app-frontend.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/rs-kannan/Blog-app-BackEnd.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://6553054af06b6f17fe3772a3--delightful-cucurucho-847dd5.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-5'>
          <div
            class='card'
            style={{width: '21rem',
            backgroundColor: '#5BA1FF',
            color: 'black',
            }}
          >
            <img src={Auth} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title mt-4'>BULK-MAILER</h5>
              <p class='card-text'>
              Bulk mail is a term for sending one email campaign to a
               large group at once. Bulk mail is also known as mass email or email blasts. 
              </p>
              <a
                href='https://github.com/rs-kannan/Bulk_mailer-FrontEnd.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> FrontEnd
              </a>
              <a
                href='https://github.com/rs-kannan/Bulk_Mailer-backend.git'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faCode} /> Backend
              </a>
              <a
                href='https://luminous-palmier-8e325b.netlify.app/'
                target='_blank'
                className='btn_mern'
              >
                <FontAwesomeIcon icon={faGlobeEurope} /> Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mern;
