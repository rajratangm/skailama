

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Navbar.css';
// import image from '../Navbar/directright.png';
// import bell from '../Navbar/notifications.svg';
// import settingIcon from '../Navbar/icon.svg';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userEmail, setUserEmail] = useState('');

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const token = localStorage.getItem('authToken'); // Retrieve auth token
//         if (token) {
//           const response = await axios.get('http://localhost:5000/api/user', {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           const userData = response.data;
//           setIsLoggedIn(true);
//           setUserEmail(userData.email); // Set user email
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         setIsLoggedIn(false);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   const handleSettingsClick = () => {
//     navigate('/settings');
//   };

//   return (
//     <div className={`navbar-container ${isLoggedIn ? 'dark-background' : ''}`}>
//       <div className='logo'>
//         <img src={image} alt="Logo" />
//         <div className='logo-text'>LAMA.</div>
//       </div>
//       <div className='icons'>
//         <div className='icon'>
//           <img src={bell} alt="Notifications" />
//         </div>
//         {isLoggedIn ? (
//           <div className='icon' onClick={handleSettingsClick}>
//             <span className="user-email">{userEmail}</span>
//             <img src={settingIcon} alt="Settings" />
//           </div>
//         ) : (
//           <div className='icon' onClick={handleSettingsClick}>
//             <img src={settingIcon} alt="Settings" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import image from '../Navbar/directright.png';
import bell from '../Navbar/notifications.svg';
import settingIcon from '../Navbar/icon.svg';
import downloadIcon from '../Navbar/download.png';

const Navbar = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/user', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = response.data;
          setIsLoggedIn(true);
          setUserEmail(userData.email);
          setLoggedIn(true); // Update authentication state in parent component
        } catch (error) {
          console.error('Error fetching user data:', error);
          handleLogout(); // Clear authentication state if error occurs
        }
      }
    };

    checkAuthentication();
  }, [setLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setLoggedIn(false); // Update authentication state in parent component
    navigate('/login'); // Redirect to login page or other appropriate action
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className={`navbar-container ${isLoggedIn ? 'dark-background' : ''}`}>
      <div className='logo'>
        <img src={image} alt="Logo" />
        <div className='logo-text'>LAMA.</div>
      </div>
      <div className='icons'>
        <div className='icon'>
          <img src={bell} alt="Notifications" />
        </div>
        {isLoggedIn ? (
          <div className='icon' onClick={handleSettingsClick}>
            <span className="user-email">{userEmail}</span>
            <img src={settingIcon} alt="Settings" />
            <img src={downloadIcon} alt="Download" />
          </div>
        ) : (
          <div className='icon' onClick={handleSettingsClick}>
            <img src={settingIcon} alt="Settings" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
