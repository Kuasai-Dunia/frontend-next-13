"use client";

import {
  OnPlayMusicControl,
  OnPlayMusicSetting,
  OnPlayMusicInfo,
} from "./components";
import "./styles.scss";

const CurrentlyPlaying: React.FC = () => (
  <div className="app__footer">
    <div className="d-flex justify-between align-center h-full px-3">
      <OnPlayMusicInfo />
      <OnPlayMusicControl />
      <OnPlayMusicSetting />
    </div>
  </div>
);

export default CurrentlyPlaying;
