import moment from "moment";
import React from "react";
import "./_comment.scss";

export const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className="comment p-2 d-flex">
      <img
        src={authorProfileImageUrl}
        alt="avatar"
        className="rounded-circle mr-5"
      />
      <div className="comment-body">
        <p className="comment-header mb-1">
          {authorDisplayName} . {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay} </p>
      </div>
    </div>
  );
};
