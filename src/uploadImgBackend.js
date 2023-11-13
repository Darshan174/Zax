const express = require('express');
const multer = require('multer');
const admin = require('firebase-admin');
const path = require('path');

const app = express();
const port = 3001;

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-firebase-storage-bucket-url',
});

// Multer configuration
const storage = multer.memoryStorage(); // Use memory storage for Firebase
const upload = multer({ storage: storage });

// API endpoint for image upload
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}${ext}`;

    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (error) => {
      console.error('Error uploading to Firebase Storage:', error);
      res.status(500).json({ message: 'Error uploading to Firebase Storage' });
    });

    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      // Perform any necessary processing or database operations
      res.status(200).json({ message: 'Image uploaded successfully', imageUrl: publicUrl });
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
