
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import Navbar from './Components/HomePage/Navbar/Navbar';
// import HomePage from './Components/HomePage/HomePage/HomePage';
// import UploadPage from './Components/UploadPage/UploadPage'; // Import UploadPage component
// import './App.css';

// const theme = createTheme({
//   // Your theme configurations
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <main className="main-content">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/:projectName/upload" element={<UploadPage />} /> {/* Add this route */}
//             </Routes>
//           </main>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/HomePage/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage/HomePage';
import UploadPage from './Components/UploadPage/UploadPage';
import SettingIndex from './Components/Setting/SettingIndex'; // Import SettingIndex component
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:projectName/upload" element={<UploadPage />} />
              <Route path="/settings" element={<SettingIndex />} /> {/* Add this route */}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

