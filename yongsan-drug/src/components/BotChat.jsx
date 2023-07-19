import { styled } from "styled-components";

export const Bot = ({ text }) => {
  return (
    <>
      <BotChat>
        <ChatContent>{text}</ChatContent>
      </BotChat>
    </>
  );
};

const BotChat = styled.div`
  display: flex;
  margin: 10px;
`;

const ChatContent = styled.p`
  color: #fff;
  border-radius: 20px;
  background-color: #6e8d48;
  padding: 10px 15px;
  text-align: left;
  padding-left: 1rem;
  word-break: keep-all;
`;
