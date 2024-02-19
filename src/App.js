

import React, { useState, useEffect } from 'react';
import Uploader from './components/Uploader';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';
import './App.css'
const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleFileChange = (file) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, { file, name: file.name }]);
  };

  const handlePlay = (index) => {
    setCurrentTrack(index);
  };

  const handleEnded = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

  useEffect(() => {
    // Save the current track and position in local storage
    localStorage.setItem('audio-player-current-track', currentTrack.toString());
  }, [currentTrack]);

  useEffect(() => {
    // Load last playing audio file on page reload
    const lastTrack = localStorage.getItem('audio-player-current-track');
    if (lastTrack !== null) {
      setCurrentTrack(parseInt(lastTrack, 10));
    }
  }, []);

  return (
    <div className='small'>
      <Uploader onFileChange={handleFileChange} />
      <Playlist playlist={playlist} onPlay={handlePlay} />
      {playlist.length > 0 && (
        <AudioPlayer
          src={URL.createObjectURL(playlist[currentTrack].file)}
          onEnded={handleEnded}
        />
      )}
    </div>
  );
};

export default App;

