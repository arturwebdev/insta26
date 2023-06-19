import { useDispatch, useSelector } from "react-redux";
import "./MessengerPeoplesMessage.css";
import {
  selectMessages,
  toggleActive,
} from "../../store/slices/messages/messagesSlice";
import { selectUsers } from "../../store/slices/users/usersSlice";

function MessengerPeoplesMessage({ name, active, img, id }) {
  const { activeUserId } = useSelector(selectMessages);
  const { currentUser } = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        dispatch(toggleActive({ fromId: currentUser.id, toId: id }))
      }
      style={{ backgroundColor: activeUserId === id ? "green" : "" }}
      className="Messenger-left-col-people-message"
    >
      <div className="Messsage-img">
        <img src={img} alt="" />
      </div>
      <div className="Message-info">
        <p
          style={{
            fontSize: activeUserId === id ? "20px" : "",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: activeUserId === id ? "20px" : "",
          }}
        >
          {active}
        </p>
      </div>
    </div>
  );
}

export default MessengerPeoplesMessage;
