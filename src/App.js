import { useState } from 'react';
import Video from './Video';
import Menu from './Menu';
import './App.css';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = newVideo => setSrc(VIDEOS[newVideo]);

  return (
    <div className="App">
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}

export default App;
