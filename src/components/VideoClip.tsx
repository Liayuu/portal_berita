import { useState } from "react";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";

interface VideoClipProps {
  videoId: string;
  isAutoPlay?: boolean;
  height?: string | number | undefined;
}

const VideoClip: React.FC<VideoClipProps> = ({
  videoId,
  isAutoPlay,
  height,
}) => {
  const [play, setPlay] = useState(false);
  const handleMouseEnter = () => {
    if (isAutoPlay) {
      setPlay(true);
    }
  };

  const handleMouseLeave = () => {
    setPlay(false);
  };

  const generateVideoLink = (videoId: string) => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const opt = {
    height: {height},
    width: '100%',
    playerVars: {
      autoplay: isAutoPlay ? 1 : 0,
    },
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <YouTube videoId={videoId} opts={opt} />
      {/* <ReactPlayer
        width="100%"
        height={height}
        playing={play}
        pip
        controls={false}
        muted
        config={{ file: { forceHLS: true } }}
        className={`absolute top-0 left-0`}
        url={generateVideoLink(videoId)}
      /> */}
    </div>
  );
};

export default VideoClip;
