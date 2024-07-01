// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import hero from './hero.svg';
// import vector from './Vector.svg';
// // import ProjectDescriptionPrompt from './ProjectDescriptionPrompt';
// import ProjectDescriptionPrompt from './ProjectPropComp/ProjectProp'

// const Hero = () => {
//   const [showProjectPrompt, setShowProjectPrompt] = useState(false);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
//     setProjects(storedProjects);
//   }, []);

//   const handleButtonClick = () => {
//     setShowProjectPrompt(true);
//   };

//   const handleCloseProjectPrompt = () => {
//     setShowProjectPrompt(false);
//   };

//   return (
//     <div className='hero-container'>
//       {projects.length === 0 ? (
//         <>
//           <div className='heading'>Create a New Project</div>
//           <div className='hero-image'>
//             <img src={hero} alt="Hero" />
//           </div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//           </p>
//           <button className='button1' onClick={handleButtonClick}>
//             <img src={vector} alt="Vector Icon" />
//             Create New Project
//           </button>
//           {showProjectPrompt && <ProjectDescriptionPrompt onClose={handleCloseProjectPrompt} />}
//         </>
//       ) : (
//         <div className='projects-container'>
//           <div className='projects-header'>
//             <h2>Projects</h2>
//             <button className='button1' onClick={handleButtonClick}>
//               <img src={vector} alt="Vector Icon" />
//               Create New Project
//             </button>
//           </div>
//           <div className='projects-grid'>
//             {projects.map((project, index) => (
//               <div key={index} className='project-card'>
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//             ))}
//           </div>
//           {showProjectPrompt && <ProjectDescriptionPrompt onClose={handleCloseProjectPrompt} />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;
// src/Components/HomePage/Hero/Hero.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import hero from './hero.svg';
import vector from './Vector.svg';
import ProjectDescriptionPrompt from './ProjectPropComp/ProjectProp';

const Hero = () => {
  const [showProjectPrompt, setShowProjectPrompt] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  const handleButtonClick = () => {
    setShowProjectPrompt(true);
  };

  const handleCloseProjectPrompt = () => {
    setShowProjectPrompt(false);
  };

  const handleCardClick = (projectName) => {
    navigate(`/${projectName}/upload`);
  };

  return (
    <div className='hero-container'>
      {projects.length === 0 ? (
        <>
          <div className='heading'>Create a New Project</div>
          <div className='hero-image'>
            <img src={hero} alt="Hero" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          </p>
          <button className='button1' onClick={handleButtonClick}>
            <img src={vector} alt="Vector Icon" />
            Create New Project
          </button>
          {showProjectPrompt && <ProjectDescriptionPrompt onClose={handleCloseProjectPrompt} />}
        </>
      ) : (
        <div className='projects-container'>
          <div className='projects-header'>
            <h2>Projects</h2>
            <button className='button1' onClick={handleButtonClick}>
              <img src={vector} alt="Vector Icon" />
              Create New Project
            </button>
          </div>
          <div className='projects-grid'>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className='project-card'
                onClick={() => handleCardClick(project.title)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          {showProjectPrompt && <ProjectDescriptionPrompt onClose={handleCloseProjectPrompt} />}
        </div>
      )}
    </div>
  );
};

export default Hero;
