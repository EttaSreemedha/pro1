import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';  


const HomePage = () => {
    return (
        <div>
            <h1>Choose Model</h1>
            <Link to="/upload/deep-learning">
                <button>Deep Learning</button>
            </Link>
            <Link to="/upload/llm">
                <button>LLM</button>
            </Link>
        </div>
    );
};

export default HomePage;  // Ensure you export it correctly
