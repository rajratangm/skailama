// import React from 'react';

// const UserData = () => {
//   // Example data fetching from localStorage
//   const storedData = JSON.parse(localStorage.getItem('formData'));

//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-all-search"
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <label htmlFor="checkbox-all-search" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Name
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Description
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {storedData ? (
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//               <td className="w-4 p-4">
//                 <div className="flex items-center">
//                   <input
//                     id="checkbox-table-search-1"
//                     type="checkbox"
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                   />
//                   <label htmlFor="checkbox-table-search-1" className="sr-only">
//                     checkbox
//                   </label>
//                 </div>
//               </td>
//               <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 {storedData.name}
//               </td>
//               <td className="px-6 py-4">{storedData.text}</td>
//               <td className="px-6 py-4">
//                 <button className="text-blue-600 dark:text-blue-500 hover:underline">
//                   Edit
//                 </button>
//                 <button className="ml-2 text-red-600 dark:text-red-500 hover:underline">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ) : (
//             <tr>
//               <td colSpan="4" className="px-6 py-4 text-center">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserData;

import React from 'react';

const UserData = () => {
  // Example data fetching from localStorage
  const storedData = JSON.parse(localStorage.getItem('formData'));

  // Function to handle deletion of data
  const handleDelete = () => {
    localStorage.removeItem('formData');
    // Optionally, you can update state or trigger a re-render if needed
    // setStoredData(null); // Assuming you have a state for storedData
  };

  // Placeholder function for handling edit (if needed)
  const handleEdit = () => {
    // Implement edit functionality here, e.g., open a modal
    console.log('Edit clicked');
    // Example: openModal();
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {storedData ? (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {storedData.name}
              </td>
              <td className="px-6 py-4">{storedData.text}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={handleEdit} // Placeholder for edit functionality
                >
                  Edit
                </button>
                <button
                  className="ml-2 text-red-600 dark:text-red-500 hover:underline"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
