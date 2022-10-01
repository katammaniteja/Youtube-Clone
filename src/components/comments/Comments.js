import React from "react";
import { Comment } from "../comment/Comment";
import "./_comments.scss";

export const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments-form w-100 d-flex my-2">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments-list">
        {[...Array(15)].map((item) => {
          return <Comment key={item} />;
        })}
      </div>
    </div>
  );
};
