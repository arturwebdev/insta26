import "./MessengerChatForm.css";
import IMAGES from "../../images";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { addMessage } from "../../store/slices/messages/messagesSlice";

function MessengerChatForm() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({ fromId: currentUser.id, body: formRef.current[0].value }),
      formRef.current.reset()
    );
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="Chat-input">
        <input type="text" placeholder="Message..." />
        <img src={IMAGES.like} alt="" />
      </div>
    </form>
  );
}

export default MessengerChatForm;
