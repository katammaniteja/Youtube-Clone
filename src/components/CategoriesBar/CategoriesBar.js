import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Footbal",
  "Real Madrid",
  "Gatsby",
  "System Design",
  "Software Development",
];

export default function CategoriesBar() {
  const [active, setactive] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setactive(value);
    if (value === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(value));
  };

  return (
    <div className="categoriesbar">
      {keywords.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => handleClick(item)}
            className={active === item ? "active" : ""}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
