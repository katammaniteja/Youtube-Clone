import React from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { useState } from "react";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function VideoHorizontal() {
  const seconds = moment.duration("1000").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <div className="row videohorizontal m-1 py-2 align-items-center">
      <div className="col-sm-6 col-md-4 videohorizontal-left">
        <LazyLoadImage
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          effect="blur"
          className="videohorizontal-thumbnail"
          wrapperClassName="videohorizontal-thumbnail-wrapper"
        />
        <span className="videohorizontal-duration">{_duration}</span>
      </div>
      <div className="col-sm-6 col-md-8 videohorizontal-right p-0">
        <p className="videohorizontal-title mb-1">
          Be a Full Stack Developer in 1 month
        </p>
        <div className="videohorizontal-details">
          <AiFillEye /> {numeral(100000).format("0.a")} Views •{" "}
          {moment("2020-09-08").fromNow()}
        </div>
        <div className="videohorizontal-channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
            effect="blur"
          /> */}
          <p>Backbench Coder</p>
        </div>
      </div>
    </div>
  );
}
