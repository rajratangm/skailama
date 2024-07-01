// import React, { useState } from 'react';
// import './Setting.css'; // Import the CSS file for styling

// const Setting = () => {
//   // State variables for photo and username
//   const [photo, setPhoto] = useState('');
//   const [username, setUsername] = useState('');

//   // Function to handle photo upload
//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     // Handle photo upload logic (e.g., using FileReader to preview image)
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhoto(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to handle username change
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   return (
//     <div className="setting-container">
//       <div className="edit-photo-section">
//         <label htmlFor="photo" className="input-label">
//           Edit Photo
//         </label>
//         <input
//           type="file"
//           id="photo"
//           accept="image/*"
//           onChange={handlePhotoChange}
//           className="input-field"
//         />
//         {photo && (
//           <img
//             src={photo}
//             alt="Preview"
//             className="preview-image"
//           />
//         )}
//       </div>

//       <div className="edit-username-section">
//         <label htmlFor="username" className="input-label">
//           Username
//         </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//           className="input-field"
//           placeholder="Enter username"
//         />
//       </div>

//       <button className="save-button">
//         Save Changes
//       </button>
//     </div>
//   );
// };

// export default Setting;


// src/Components/Setting/Setting.js
import React, { useState } from 'react';
import './Setting.css';

const Setting = () => {
  const [photo, setPhoto] = useState('');
  const [username, setUsername] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="setting-container">
      <div className="edit-photo-section">
        <label htmlFor="photo" className="input-label">Edit Photo</label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
          className="input-field"
        />
        {photo && <img src={photo} alt="Preview" className="preview-image" />}
      </div>
      <div className="edit-username-section">
        <label htmlFor="username" className="input-label">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
          placeholder="Enter username"
        />
      </div>
      <button className="save-button">Save Changes</button>
    </div>
  );
};

export default Setting;
