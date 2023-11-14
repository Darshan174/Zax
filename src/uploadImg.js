import React, { useState, useRef } from 'react';


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // You can also show a preview of the selected image here
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Update UI or perform any additional actions
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };


  return (
    <div>
      {/* Visually hide the file input */}
      <label htmlFor="imageInput" style={{ display: 'none' }}>
        Choose File
        <input
          id="imageInput"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </label>

      {/* Show the Upload button */}
      <button class="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100 hover:to-yellow-100 
      font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ... my-8 ..." 
      onClick={handleUpload}>Upload</button>
    </div>
  );
};



export default ImageUploader;

