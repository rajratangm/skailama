// import React, { useState, useEffect } from 'react';
// import SideBar from '../UploadPage/SideBar/SideBar';

// const EditProject = () => {
//   const [formData, setFormData] = useState({
//     User: '',
//     Description: '',
//   });

//   // Fetch initial data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('formData'));
//     if (storedData) {
//       setFormData(storedData);
//     }
//   }, []);

//   // Function to handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Function to handle saving changes to localStorage
//   const handleSaveChanges = () => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//     alert('Changes saved successfully!');
//   };

//   // Function to handle discarding changes (reset to original localStorage data)
//   const handleDiscardChanges = () => {
//     const storedData = JSON.parse(localStorage.getItem('formData'));
//     if (storedData) {
//       setFormData(storedData);
//       alert('Changes discarded!');
//     }
//   };

//   return (
//     <div className="edit-project-container">
//       <SideBar />
//       <div className="content p-8">
//         <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//           User
//         </label>
//         <input
//           type="text"
//           id="user"
//           name="User"
//           value={formData.User}
//           onChange={handleChange}
//           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Enter user name"
//         />

//         <label htmlFor="description" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
//           Description
//         </label>
//         <textarea
//           id="description"
//           name="Description"
//           rows="4"
//           value={formData.Description}
//           onChange={handleChange}
//           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Write your thoughts here..."
//         ></textarea>

//         <div className="mt-6">
//           <button
//             onClick={handleDiscardChanges}
//             className="inline-block px-4 py-2 mr-2 text-sm font-medium text-white bg-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-600"
//           >
//             Discard Changes
//           </button>
//           <button
//             onClick={handleSaveChanges}
//             className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProject;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../UploadPage/SideBar/SideBar';

const EditProject = () => {
  const [formData, setFormData] = useState({
    user: '',
    description: '',
  });

  // Fetch initial project data from backend on component mount
  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = () => {
    axios.get('/api/project/:id') // Replace :id with the actual project ID
      .then(response => {
        setFormData(response.data); // Assuming response.data contains user and description
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle saving changes to backend
  const handleSaveChanges = () => {
    axios.patch(`/api/project/${formData._id}`, formData) // Adjust endpoint and method as needed
      .then(response => {
        console.log('Changes saved successfully!', response.data);
      })
      .catch(error => {
        console.error('Error saving changes:', error);
      });
  };

  // Function to handle discarding changes (reload data)
  const handleDiscardChanges = () => {
    fetchProjectData(); // Reload data from backend to reset form
    alert('Changes discarded!');
  };

  return (
    <div className="edit-project-container">
      <SideBar />
      <div className="content p-8">
        <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          User
        </label>
        <input
          type="text"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter user name"
        />

        <label htmlFor="description" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <div className="mt-6">
          <button
            onClick={handleDiscardChanges}
            className="inline-block px-4 py-2 mr-2 text-sm font-medium text-white bg-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-600"
          >
            Discard Changes
          </button>
          <button
            onClick={handleSaveChanges}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
