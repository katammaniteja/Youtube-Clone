import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../../redux/actions/videos.action";
import VideoHorizontal from "../videoHorizontal/VideoHorizontal";

export const SearchScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  return (
    <div className="container">
      {!loading &&
        videos?.map((video, index) => {
          return <VideoHorizontal video={video} key={index} searchScreen />;
        })}
    </div>
  );
};
