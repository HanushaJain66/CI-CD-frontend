import React, { useState } from 'react';
import './Home.css'; // Import custom CSS for styling

const Home = () => {
  const [videoLink, setVideoLink] = useState('');
  const [transcript, setTranscript] = useState('');

  const handleUpload = () => {
    // Simulate video processing
    console.log('Video uploaded:', videoLink);
    // Mock transcript after processing
    setTranscript('Transcription will be available once the video has been processed.');
  };

  return (
    <div className="vidtranscribe-container">
      <h1>VidTranscribe</h1>
      <div className="upload-section">
        <label htmlFor="language">Select a language</label>
        <select id="language" className="language-select">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>

        <label htmlFor="videoLink">Paste a link to your video</label>
        <input
          type="text"
          id="videoLink"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="https://"
        />
        
        <button onClick={handleUpload} className="upload-btn">Upload</button>
      </div>

      <div className="video-section">
        {videoLink && <img src="https://via.placeholder.com/600x400" alt="Uploaded Video" className="video-preview" />}
      </div>

      <div className="transcript-section">
        <h3>Transcript</h3>
        {transcript ? (
          <p>{transcript}</p>
        ) : (
          <p>Transcription will be available once the video has been processed.</p>
        )}
        <div className="search-transcript">
          <h4>Ask a question or search for a keyword</h4>
          <input
            type="text"
            placeholder="What would you like to find in this transcript?"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
