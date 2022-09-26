import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

export default function Video() {
  return (
    <div className="video">
      <div className="video-top">
        <img
          src="https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDdRN1utUP-GsBpZe-QenMc94bEhg"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video-title">Create app in 5 minutes</div>
      <div className="video-details">
        <span>
          <AiFillEye /> 5m Views •{" "}
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video-channel">
        <img
          src="https://yt3.ggpht.com/l8CPpluol0brprHG9dZMaD7AJ2XrngeNs_oy85XUqdkLi5E3PhCu7VmP_HsRM8yUk-suL-7ImQ=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Marvel Entertainment</p>
      </div>
    </div>
  );
}
