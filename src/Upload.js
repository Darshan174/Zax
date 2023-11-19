import { useState, useEffect } from 'react'
import { storage } from './firebase'
import { ref, uploadBytes, listAll,getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


function Upload({onImageUpload}) {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url ])
                onImageUpload([...imageUrls, url]); // Pass updated image URLs to parent component
            })

        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => Promise.all(response.items.map((item) => getDownloadURL(item))))
        .then((urls) => {
          setImageUrls(urls);
          onImageUpload(urls); // Pass initial image URLs to parent component
        })
        .catch((error) => {
            console.error("Error fetching image URLs:", error);
        });
    }, [])

    return (  
        <div className="Upload">
            <input type="file"
             onChange={(event) => {
                 setImageUpload(event.target.files[0]);
                }}
                />
            <button type="button" class="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100
         hover:to-yellow-100 font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ..." onClick={uploadImage}> Upload Image </button>
            {imageUrls.map((url) => {
                
            })}


        </div>

    )
}

export default Upload;
  
    
   

    