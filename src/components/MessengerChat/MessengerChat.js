import { useSelector } from "react-redux";
import "./MessengerChat.css";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { selectMessages } from "../../store/slices/messages/messagesSlice";

function MessengerChat() {
  const { currentUser } = useSelector(selectUsers);
  const { currentDialoge } = useSelector(selectMessages);

  return (
    <div className="MessengerChat">
      {currentDialoge.map((message) => (
        <h1
          style={{
            backgroundColor:
              currentUser.id === message.fromId ? "gray" : "green",
            overflow: "hidden",
          }}
        >
          {message.body}
        </h1>
      ))}
    </div>
  );
}

export default MessengerChat;
