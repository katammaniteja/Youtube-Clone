import React, { useEffect } from "react";
import "./_homeScreen.scss";
import CategoriesBar from "./../../CategoriesBar/CategoriesBar";
import Video from "./../../Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  const fetchData = () => {};

  return (
    <div className="container">
      <CategoriesBar />
      <div className="row">
        {/* <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
        > */}
        {videos.map((video, index) => {
          return (
            <div className="col-lg-3 col-md-4">
              <Video video={video} key={index} />
            </div>
          );
        })}
        {/* </InfiniteScroll> */}
      </div>
    </div>
  );
}
