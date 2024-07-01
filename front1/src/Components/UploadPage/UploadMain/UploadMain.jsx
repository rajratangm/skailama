// import React from 'react';
// import './UploadMain.css';

// const UploadMain = () => {
//   const cardData = [
//     {
//       imgSrc: "/docs/images/blog/image-1.jpg", // Update with actual image paths
//       title: "YouTube",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-2.jpg",
//       title: "Instagram",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-3.jpg",
//       title: "Facebook",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-4.jpg",
//       title: "Twitter",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-5.jpg",
//       title: "LinkedIn",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     },   {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     },   {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     },
//   ];

//   return (
//     <div className="upload-main-container">
//       <div className="upload-main">
//         {cardData.map((card, index) => (
//           <a 
//             key={index} 
//             href="#" 
//             className="card"
//           >
//             <img 
//               src={card.imgSrc} 
//               alt=""
//               className="card-image"
//             />
//             <div className="card-content">
//               <h5>{card.title}</h5>
//               <p>{card.subtitle}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default UploadMain;

// import React, { useState } from 'react';
// import './UploadMain.css';
// import UploadForm from '../UploadForm/PopForm'; // Assuming UploadForm is imported from the correct location

// const UploadMain = () => {
//   const [showModal, setShowModal] = useState(false); // State to manage modal visibility

//   // Function to open modal
//   const openModal = () => {
//     setShowModal(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setShowModal(false);
//   };

//   // Sample card data array
//   const cardData = [
//     {
//       imgSrc: "/docs/images/blog/image-1.jpg", // Update with actual image paths
//       title: "YouTube",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-2.jpg",
//       title: "Instagram",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-3.jpg",
//       title: "Facebook",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-4.jpg",
//       title: "Twitter",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-5.jpg",
//       title: "LinkedIn",
//       subtitle: "Upload Here"
//     },
//     {
//       imgSrc: "/docs/images/blog/image-6.jpg",
//       title: "Pinterest",
//       subtitle: "Upload Here"
//     }
//   ];

//   return (
//     <div className="upload-main-container">
//       <div className="upload-main">
//         {cardData.map((card, index) => (
//           <a 
//             key={index} 
//             href="#" 
//             className="card"
//             onClick={openModal} // Open modal on card click
//           >
//             <img 
//               src={card.imgSrc} 
//               alt=""
//               className="card-image"
//             />
//             <div className="card-content">
//               <h5>{card.title}</h5>
//               <p>{card.subtitle}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <UploadForm closeModal={closeModal} /> {/* Pass closeModal function as a prop */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadMain;


import React, { useState } from 'react';
import './UploadMain.css';
// import PopupForm from './PopupForm'; // Import the PopupForm component
import PopForm from '../UploadForm/PopForm';

const UploadMain = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card data

  // Function to handle card click and open popup
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null); // Clear selected card data
  };

  // Sample card data array
  const cardData = [
    {
      imgSrc: "/docs/images/blog/image-1.jpg",
      title: "YouTube",
      subtitle: "Upload Here"
    },
    {
      imgSrc: "/docs/images/blog/image-2.jpg",
      title: "Instagram",
      subtitle: "Upload Here"
    },
    {
      imgSrc: "/docs/images/blog/image-3.jpg",
      title: "Facebook",
      subtitle: "Upload Here"
    },
    {
      imgSrc: "/docs/images/blog/image-4.jpg",
      title: "Twitter",
      subtitle: "Upload Here"
    },
    {
      imgSrc: "/docs/images/blog/image-5.jpg",
      title: "LinkedIn",
      subtitle: "Upload Here"
    },
    {
      imgSrc: "/docs/images/blog/image-6.jpg",
      title: "Pinterest",
      subtitle: "Upload Here"
    }
  ];

  return (
    <div className="upload-main-container">
      <div className="upload-main">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="card"
            onClick={() => handleCardClick(card)} // Pass the card data to handleCardClick
          >
            <img 
              src={card.imgSrc} 
              alt=""
              className="card-image"
            />
            <div className="card-content">
              <h5>{card.title}</h5>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {showPopup && selectedCard && (
        <PopForm 
          card={selectedCard} 
          closePopup={closePopup} 
        />
      )}
    </div>
  );
}

export default UploadMain;
