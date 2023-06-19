import React, { useEffect } from "react";
import IMAGES from "../../images";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import { fetchPosts } from "../../store/slices/posts/postsAPI";
import Spiner from "../Spiner/Spiner";

function Posts() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!posts.data.length) {
      dispatch(fetchPosts());
    }
  }, []);
  return (
    <>
      {posts.isLoading ? (
        <Spiner />
      ) : (
        posts.data.map((el) => (
          <Post
            key={el.id}
            id={el.id}
            img={el.img}
            name={el.name}
            likesCount={el.likesCount}
            postText={el.postText}
            timeAgo={el.timeAgo}
            comments={el.comments}
          />
        ))
      )}
    </>
  );
}

export default Posts;
