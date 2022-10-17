import React, { useEffect } from "react";
import "./_homeScreen.scss";
import CategoriesBar from "./../../CategoriesBar/CategoriesBar";
import Video from "./../../Video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import VideosSkeleton from "../../skeletons/VideosSkeleton";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

  return (
    <div>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video, index) => {
              return (
                <div className="col-lg-3 col-md-4">
                  <Video video={video} key={index} />
                </div>
              );
            })
          : [...Array(20)].map((value) => {
              return (
                <div className="col-lg-3 col-md-4">
                  <VideosSkeleton key={value} />
                </div>
              );
            })}
      </InfiniteScroll>
    </div>
  );
}
