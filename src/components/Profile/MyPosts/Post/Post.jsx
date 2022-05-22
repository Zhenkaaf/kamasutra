import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images.hdqwalls.com/download/hair-in-face-beautiful-blonde-girl-th-1280x2120.jpg" />
      {props.message}
      <div>
        <span>like{props.likeCounts}</span>
      </div>
    </div>
  )
}

export default Post;
