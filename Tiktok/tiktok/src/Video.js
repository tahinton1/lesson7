import react, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({vidUrl, channel, description, song, likes, messages, shares}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const hVideoPress = () => {
    if(playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    else {
      videoRef.current.play();
      setPlaying(true);
    }
    //change state from playing to pausing
    //change state from pause to playing
  };
  return (
    <div className='video'>
        <video
          onClick={hVideoPress}
          className='video_player' 
          loop
          ref={videoRef}
          src={vidUrl}>
        </video>

        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />

    </div>
  )
}

export default Video