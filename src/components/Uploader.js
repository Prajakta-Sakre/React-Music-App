

import React from 'react';
import './Uploader.css';

const Uploader = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div className='upload-file'>
      <label className='upload-file-button'>
        Choose File
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default Uploader;

