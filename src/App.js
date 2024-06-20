import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UploadImage from './components/UploadImage';
//import './styles.css';  

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload/:modelType" element={<UploadImage />} />
            </Routes>
        </Router>
    );
};

export default App;  // Ensure you export it correctly
