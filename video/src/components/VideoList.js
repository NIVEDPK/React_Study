import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, selectedVideo }) => {
  const renderedItem = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        selectedVideo={selectedVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedItem}</div>;
};

export default VideoList;
