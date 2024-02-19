// src/components/Playlist.js
import React from 'react';
import './Playlist.css'
const Playlist = ({ playlist, onPlay }) => {
    const handleClick = (index) => (event) => {
        event.stopPropagation();
        onPlay(index);
      };
  return (
    <div className='playlist-container'>
      <h2>Playlist</h2>
      <ol className='playlist-list'>
        {playlist.map((item, index) => (
          <li key={index} className='playlist-item'>
            {item.name} <button key={index} onClick={handleClick(index)}>Play</button>
          </li>
          
        ))}
        
      </ol>
    </div>
  );
};

export default Playlist;
