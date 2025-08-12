import React, { useState } from "react";
import { FaHeart, FaStar, FaThumbsUp } from "react-icons/fa";

const LikeButton = () => {
  const [heartLikes, setHeartLikes] = useState(0);
  const [starLikes, setStarLikes] = useState(0);
  const [thumbsLikes, setThumbsLikes] = useState(0);

  const total = heartLikes + starLikes + thumbsLikes;

  return (
    <div className="container mt-4 text-center">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">React Like Buttons</h4>

        <div className="row mb-3">
          <div className="col-md-3">
            <div className="card p-3">
              <p className="lead mb-2">Hearts: {heartLikes}</p>
              <button
                className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  setHeartLikes(heartLikes + 1);
                }}
              >
                <FaHeart key="heart" />
                Heart
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <p className="lead mb-2">Stars: {starLikes}</p>
              <button
                className="btn btn-warning d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  setStarLikes(starLikes + 1);
                }}
              >
                <FaStar key="star" />
                Star
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <p className="lead mb-2">Thumbs: {thumbsLikes}</p>
              <button
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  setThumbsLikes(thumbsLikes + 1);
                }}
              >
                <FaThumbsUp key="thumbs-up" />
                Thumbs Up
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Total Likes</h5>
              <p className="display-4">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;
