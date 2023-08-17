import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export const Client = ({ text }) => {
  return (
    <>
      <ClientChat>
        <ChatContent>{JSON.stringify(text)}</ChatContent>
      </ClientChat>
    </>
  );
};

const ClientChat = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px;
`;

const ChatContent = styled.p`
  padding: 10px 15px;
  background-color: #a8943d;
  color: #fff;
  border-radius: 20px;
  text-align: right;
  padding-right: 1rem;
  word-break: keep-all;
`;
