import React from "react";
import "./_comment.scss";

export const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
        alt="avatar"
        className="rounded-circle mr-3"
      />
      <div className="comment-body">
        <p className="comment-header mb-1">Maniteja . 8 months ago</p>
        <p className="mb-0">Nice Video Dude </p>
      </div>
    </div>
  );
};
