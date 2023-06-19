import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/slices/posts/postsSlice";
import IMAGES from "../../images";
import { selectUsers } from "../../store/slices/users/usersSlice";

const CommentsForm = ({ id }) => {
  const { currentUser } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        postId: id,
        username: currentUser.username,
        body: formRef.current[0].value,
      })
    );

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="comment-wrapper">
        <img src={IMAGES.smile} className="icon" alt="" />
        <input
          type="text"
          className="comment-box"
          placeholder="Add a comment"
        />
        <button className="comment-btn">Add</button>
      </div>
    </form>
  );
};

export default CommentsForm;
