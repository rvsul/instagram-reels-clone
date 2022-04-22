import React from "react";
import "./VideoHeader.css";
import { ArrowBackIos } from "@material-ui/icons";
import { CameraAltOutlined } from "@material-ui/icons";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIos />
      <h3>Reels</h3>
      <CameraAltOutlined />
    </div>
  );
}

export default VideoHeader;
