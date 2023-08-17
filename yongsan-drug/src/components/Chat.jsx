import { Client } from "./ClientChat";
import { Bot } from "./BotChat";

// eslint-disable-next-line react/prop-types
const Chat = ({ sender, text }) => {
  return <>{sender ? <Bot text={text} /> : <Client text={text} />} </>;
};

export default Chat;
