import React, { useEffect } from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { useState } from "react";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export default function VideoHorizontal({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setViews(items[0].statistics.viewCount);
      setDuration(items[0].contentDetails.duration);
    };
    get_video_details();
  }, [id]);

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

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/watch/${id.videoId}`);
  };

  return (
    <div
      className="row videohorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <div className="col-sm-6 col-md-6 videohorizontal-left">
        <LazyLoadImage
          src={thumbnails.medium.url}
          effect="blur"
          className="videohorizontal-thumbnail"
          wrapperClassName="videohorizontal-thumbnail-wrapper"
        />
        <span className="videohorizontal-duration">{_duration}</span>
      </div>
      <div className="col-sm-6 col-md-6 videohorizontal-right p-0">
        <p className="videohorizontal-title mb-1">{title}</p>
        <div className="videohorizontal-details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videohorizontal-channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
            effect="blur"
          /> */}
          <p>{channelTitle}</p>
        </div>
      </div>
    </div>
  );
}
