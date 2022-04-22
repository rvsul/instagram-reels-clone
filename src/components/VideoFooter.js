import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import {
  Favorite,
  ModeComment,
  MoreHoriz,
  MusicNote,
  Send,
} from "@material-ui/icons";
// import Ticker from "react-ticker";

function VideoFooter({ channel, likes, shares, song, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} • <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter_icon" />
        <h1 className="music">{song}</h1>
        {/* <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>This is the Headline of element !</h1>
            </>
          )}
        </Ticker> */}
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <Favorite fontSize="large" />
          <ModeComment fontSize="large" />
          <Send fontSize="large" />
          <MoreHoriz fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
