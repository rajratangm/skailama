import React from 'react';
import './UploadFile.css'; // Import your CSS file for styling adjustments

const UploadFile = () => {
  return (
    <div className="upload-file">
      <div className="extraOutline p-4 w-max m-auto rounded-lg">
        <div className="file_upload p-5 relative border-4 border-dotted rounded-lg">
          <svg
            className="text-indigo-500 w-24 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="paragraph text-center">This is an additional paragraph to provide more information about the upload process.</p>
          <div className="input_field flex flex-col w-max mx-auto text-center">
            <label>
              <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
              <div className="text border rounded-full text-indigo-600 border-indigo-600 font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-100">
                Select
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
