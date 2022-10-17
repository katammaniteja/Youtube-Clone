import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsById } from "../../redux/actions/comments.action";
import { Comment } from "../comment/Comment";
import Video from "../Video/Video";
import "./_comments.scss";

export const Comments = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

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
        {_comments?.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>
    </div>
  );
};
