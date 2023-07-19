import { useSelector } from "react-redux";
import Chat from "./Chat";

const ChatContainer = () => {
  const { ChatHistory } = useSelector((state) => state.ChatHistory);

  return (
    <>
      {ChatHistory.map((chat, idx) => {
        return <Chat key={idx} text={chat} sender={idx % 2} />;
      })}
    </>
  );
};

export default ChatContainer;
