// import React, { useState } from 'react';
// import './SideBar.css';

// export default function SideBar() {
//   const [activeItem, setActiveItem] = useState('Projects');

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <h3>Product Upload Flow</h3>
//         </div>
//         <ul className="sidebar-list">
//           <li>
//             <a href="#" className={activeItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>
//               <i className="icon"></i>Projects
//             </a>
//           </li>
//           <li>
//             <a href="#" className={activeItem === 'Widget Configuration' ? 'active' : ''} onClick={() => handleItemClick('Widget Configuration')}>
//               <i className="icon"></i>Widget Configuration
//             </a>
//           </li>
//           <li>
//             <a href="#" className={activeItem === 'Deployment' ? 'active' : ''} onClick={() => handleItemClick('Deployment')}>
//               <i className="icon"></i>Deployment
//             </a>
//           </li>
//           <li>
//             <a href="#" className={activeItem === 'Pricing' ? 'active' : ''} onClick={() => handleItemClick('Pricing')}>
//               <i className="icon"></i>Pricing
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// src/Components/SideBar/SideBar.js
import React from 'react';
import './SideBar.css';

export default function SideBar({ activeItem, onItemSelect }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Product Upload Flow</h3>
        </div>
        <ul className="sidebar-list">
          <li>
            <a href="#" className={activeItem === 'Projects' ? 'active' : ''} onClick={() => onItemSelect('Projects')}>
              <i className="icon"></i>Projects
            </a>
          </li>
          <li>
            <a href="#" className={activeItem === 'Widget Configuration' ? 'active' : ''} onClick={() => onItemSelect('Widget Configuration')}>
              <i className="icon"></i>Widget Configuration
            </a>
          </li>
          <li>
            <a href="#" className={activeItem === 'Deployment' ? 'active' : ''} onClick={() => onItemSelect('Deployment')}>
              <i className="icon"></i>Deployment
            </a>
          </li>
          <li>
            <a href="#" className={activeItem === 'Pricing' ? 'active' : ''} onClick={() => onItemSelect('Pricing')}>
              <i className="icon"></i>Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
