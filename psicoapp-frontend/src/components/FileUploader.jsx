import React from 'react';
import './FileUploader.css';

function FileUploader({ onFileSelect }) {
  const handleChange = (e) => {
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default FileUploader;
