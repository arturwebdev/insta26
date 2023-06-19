import React, { useRef } from "react";
import IMAGES from "../../images";
import "./CreatePost.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const [{ value: img }, { value: postsText }] = formRef.current;
    dispatch({ type: "addPost", payload: { img, postsText } });
    formRef.current.reset();
    navigate("/");
  };
  return (
    <div
      style={{ marginTop: "100px", textAlign: "center" }}
      className="container"
    >
      <h1 style={{ fontSize: "50px" }}>Create Post</h1>
      <br />
      <img
        style={{ margin: "auto" }}
        width="100px"
        src={IMAGES.createPost}
        alt=""
      />
      <br />
      <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
        <input type="text" placeholder="url" /> <br />
        <input type="text" placeholder="desc" /> <br />
        <label class="input-file">
          <input type="submit" style={{ display: "none" }} name="file" />
          <span>Выберите файл</span>
        </label>
      </form>
    </div>
  );
};

export default CreatePost;
