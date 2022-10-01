import React, { useEffect } from "react";
import "./_video.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { useState } from "react";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Video({ video }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const _videoId = id?.videoId || id;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setViews(items[0].statistics.viewCount);
      setDuration(items[0].contentDetails.duration);
    };
    get_video_details();
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video-top">
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video-top-duration">{_duration}</span>
      </div>
      <div className="video-title">{title}</div>
      <div className="video-details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video-channel">
        <LazyLoadImage src={channelIcon} effect="blur" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}
