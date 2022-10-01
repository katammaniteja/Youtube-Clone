import React from "react";
import "./_videoMetaData.scss";
import numeral from "numeral";
import moment from "moment/moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

export default function VideoMetaData() {
  return (
    <div className="videometadata py-2">
      <div className="videmetadata-top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between py-1 align-items-center">
          <div>
            {numeral(10000).format("0.a")} Views •{" "}
            <span>{moment("2020-05-06").fromNow()}</span>
          </div>
          <div>
            <span className="me-2">
              <MdThumbUp size={26} />
              {numeral(10000).format("0.a")}
            </span>
            <span>
              <MdThumbDown size={26} />
              {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videometadata-channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
            alt="avatar"
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>Backbench Coder</span>
            <span>100 subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videometadata-description">
        {/* <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={this.executeOnClick}
          expanded={false}
          width={280}
          truncatedEndingComponent={"... "}
        > */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus
        repudiandae aperiam nulla tempora labore rerum, consequatur modi dolorem
        iusto similique! Aliquid cum voluptas deleniti, odio rerum ea facere
        incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos, vitae. Commodi hic odio in, explicabo asperiores eum
        tempora officiis iure aliquid suscipit nobis, accusamus atque corporis
        temporibus sint, autem molestias.
        {/* </ShowMoreText> */}
      </div>
    </div>
  );
}
