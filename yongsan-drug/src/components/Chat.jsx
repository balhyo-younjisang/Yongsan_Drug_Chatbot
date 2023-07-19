import { Client } from "./ClientChat";
import { Bot } from "./BotChat";

const Chat = ({ sender, text }) => {
  return <>{sender ? <Bot text={text} /> : <Client text={text} />} </>;
};

export default Chat;
