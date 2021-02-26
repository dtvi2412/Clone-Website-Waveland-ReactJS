import React from 'react';
import './VideoBackground.css';
import ReactPlayer from 'react-player';

function VideoBackground() {
  return (
    <section className="videoBackground">
      <h2 className="videoBackground__title">
        Committed to celebrating and empowering Canadian musicians since 2012.
      </h2>
      <ReactPlayer
        width="100%"
        height="760px"
        url="https://www.youtube.com/embed/BZwriTCKB7o?wmode=opaque&enablejsapi=1"
      />
    </section>
  );
}

export default VideoBackground;
