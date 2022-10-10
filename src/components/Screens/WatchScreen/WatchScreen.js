import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRelatedVideos,
  getVideosById,
} from "../../../redux/actions/videos.action";
import { Comments } from "../../comments/Comments";
import VideoHorizontal from "../../videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../VideoMetaData/VideoMetaData";
import "./_watchScreen.scss";

export const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosById(id));
    dispatch(getRelatedVideos(id));
  }, [id, dispatch]);

  const { video } = useSelector((state) => state.selectedVideo);

  const { videos, loading } = useSelector((state) => state.relatedVideos);

  return (
    <div className="row">
      <div className="col-lg-8 col-md-8">
        <div className="watchscreen-player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
        {video && <VideoMetaData video={video} videoId={id} />}
        <Comments />
      </div>

      <div className="col-lg-4 col-md-4">
        {videos?.map((video, index) => {
          return <VideoHorizontal video={video} key={index} />;
        })}
      </div>
    </div>
  );
};
