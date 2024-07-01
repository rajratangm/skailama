import React, { useState } from 'react';
import './ProjectProp.css';

const ProjectDescriptionPrompt = ({ onClose }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSave = () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const newProject = { title: projectTitle, description: projectDescription };
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    onClose();
    window.location.reload(); // Reload to update the projects list
  };

  return (
    <div className='modal-overlay'>
      <div className='project-prompt'>
        <h2 className='prompt-heading'>Create a New Project</h2>
        <input
          type='text'
          placeholder='Project Title'
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className='input-field'
        />
        <textarea
          placeholder='Project Description'
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className='input-field'
        ></textarea>
        <div className='buttons'>
          <button className='save-button' onClick={handleSave}>Save</button>
          <button className='cancel-button' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionPrompt;

// src/Components/HomePage/Hero/ProjectPropComp/ProjectProp.js
// ProjectDescriptionPrompt.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import './ProjectProp.css';

// const ProjectDescriptionPrompt = ({ onClose }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('/api/projects', {
  //       title,
  //       description,
  //     });
  //     onClose();
  //   } catch (error) {
  //     console.error('Error creating project:', error);
  //   }
  // };

//   return (
//     <div className="project-prompt-overlay">
//       <div className="project-prompt">
//         <h2>Project Description</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             placeholder="Project title"
//           />
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             placeholder="Project description"
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectDescriptionPrompt;
