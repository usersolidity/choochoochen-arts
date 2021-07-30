import { useState } from 'react'
import React from 'react'
import { render } from "react-dom";
import firebase, { storage } from '../firebase'

function UploadPage() {

  // Upload page 
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  // Handle the change
  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  // handle the upload.
  const handleUpload = () => {
    const uploadTask = storage.ref(`images_choochoo/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images_choochoo")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  }

  // Return
  return (
    <div className="App">
      <progress value={progress} max="100" />
      <br />
      Upload Page.
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {url}
      <img src={url || "http://via.placeholder.com/400"} alt="firebase-image" />
    </div>
  );
}

export default UploadPage;
