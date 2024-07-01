import React from 'react';
import SideBar from '../UploadPage/SideBar/SideBar';
import Setting from './Setting';

const SettingIndex = () => {
  return (
    <div className="flex"> {/* Ensure flex layout */}
      <SideBar />
      <Setting />
    </div>
  );
};

export default SettingIndex;
