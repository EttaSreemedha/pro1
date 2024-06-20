import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';  

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [result, setResult] = useState('');
    const { modelType } = useParams();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        console.log('File selected:', file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);

        console.log('Submitting form data:', formData);

        try {
            const response = await axios.post(`http://127.0.0.1:5000/predict/${modelType}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response received:', response);
            if (modelType === 'deep-learning') {
                setResult(response.data.predicted_class);
            } else if (modelType === 'llm') {
                setResult(response.data.caption);
            }
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {previewUrl && <img src={previewUrl} alt="Selected" style={{ marginTop: '20px', maxWidth: '100%' }} />}
            {result && <h2>{modelType === 'deep-learning' ? `Predicted Class: ${result}` : `Caption: ${result}`}</h2>}
        </div>
    );
};

export default UploadImage;
