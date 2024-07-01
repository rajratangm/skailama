// import React from 'react';
// import SideBar from './SideBar/SideBar';
// import UploadMain from './UploadMain/UploadMain';
// import UploadFile from './UploadFile/UploadFile';
// import './UploadPage.css'; // Import your CSS file for layout adjustments
// import UserData from './UserData/UserData';

// const UploadPage = () => {
//   // Check if userData exists in localStorage
//   const userData = JSON.parse(localStorage.getItem('formData'));

//   return (
//     <div className="upload-page">
//       <SideBar />
//       <div className="content">
//         <UploadMain />
//         {userData ? (
//           <UserData />
//         ) : (
//           <>
//             <p>---------------------------------- or --------------------------------------------------</p>
//             <UploadFile />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadPage;

// src/Components/UploadPage/UploadPage.js
import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';
import UploadMain from './UploadMain/UploadMain';
import UploadFile from './UploadFile/UploadFile';
import UserData from './UserData/UserData';
import ButtonFormSelector from '../WidgetConfiguration/WidgetConfiguration';
import './UploadPage.css'; // Import your CSS file for layout adjustments

const UploadPage = () => {
  const [activeItem, setActiveItem] = useState('Projects');
  const userData = JSON.parse(localStorage.getItem('formData'));

  return (
    <div className="upload-page">
      <SideBar activeItem={activeItem} onItemSelect={setActiveItem} />
      <div className="content">
        {activeItem === 'Widget Configuration' ? (
          <ButtonFormSelector />
        ) : (
          <>
            <UploadMain />
            {userData ? (
              <UserData />
            ) : (
              <>
                <p>---------------------------------- or --------------------------------------------------</p>
                <UploadFile />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
