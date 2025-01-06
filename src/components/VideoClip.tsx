import { useState } from "react";
import ReactPlayer from "react-player";

interface VideoClipProps {
  videoId: string;
  isAutoPlay?: boolean;
  height?: string | number | undefined;
}

const VideoClip: React.FC<VideoClipProps> = ({ videoId, isAutoPlay, height }) => {
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
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ReactPlayer
        width="100%"
        height={height}
        playing={play}
        pip
        controls={false}
        muted
        config={{ file: { forceHLS: true } }}
        url={generateVideoLink(videoId)}
      />
    </div>
  );
};

export default VideoClip;
