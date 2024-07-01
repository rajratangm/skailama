

// // components/HomePage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from '../Button/Button';
// import Hero from '../Hero/Hero';
// import EmailPrompt from './EmailPrompt/EmailPrompt';

// const HomePage = () => {
//   const [showEmailPrompt, setShowEmailPrompt] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming you manage login state here

//   useEffect(() => {
//     const userEmail = localStorage.getItem('userEmail');
//     const emailPromptShown = localStorage.getItem('emailPromptShown');

//     if (!userEmail && !emailPromptShown) {
//       setShowEmailPrompt(true);
//     } else if (!userEmail) {
//       setShowEmailPrompt(true);
//     } else {
//       axios.get(`http://localhost:5000/api/users/${userEmail}`)
//         .then(response => {
//           if (!response.data) {
//             setShowEmailPrompt(true);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching user data:', error);
//           setShowEmailPrompt(true);
//         });
//     }
//   }, []);

//   const handleCloseEmailPrompt = () => {
//     setShowEmailPrompt(false);
//   };

//   return (
//     <div>
//       <Button />
//       <Hero />
//       {showEmailPrompt && <EmailPrompt onClose={handleCloseEmailPrompt} setLoggedIn={setIsLoggedIn} />}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import Hero from '../Hero/Hero';
import EmailPrompt from './EmailPrompt/EmailPrompt';

const HomePage = () => {
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const emailPromptShown = localStorage.getItem('emailPromptShown');

    if (!userEmail && !emailPromptShown) {
      setShowEmailPrompt(true);
    } else if (!userEmail) {
      setShowEmailPrompt(true);
    } else {
      axios.get(`http://localhost:5000/api/users/${userEmail}`)
        .then(response => {
          if (!response.data) {
            setShowEmailPrompt(true);
          } else {
            setIsLoggedIn(true); // Set logged in state if user data exists
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setShowEmailPrompt(true);
        });
    }
  }, []);

  const handleCloseEmailPrompt = () => {
    setShowEmailPrompt(false);
  };

  return (
    <div>
      <Button />
      <Hero />
      {isLoggedIn && <p>User is logged in</p>}
      {showEmailPrompt && <EmailPrompt onClose={handleCloseEmailPrompt} setLoggedIn={setIsLoggedIn} />}
    </div>
  );
};

export default HomePage;
