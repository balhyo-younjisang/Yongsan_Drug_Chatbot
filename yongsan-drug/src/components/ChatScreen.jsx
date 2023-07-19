import { styled } from "styled-components";
import { useEffect, useRef } from "react";
import QuestionContainer from "./QuestionContainer";
import ChatContainer from "./ChatContainer";

// redux
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const scrollRef = useRef();
  const { ChatHistory } = useSelector((state) => state.ChatHistory);
  const { screenState } = useSelector((state) => state.Screen);

  useEffect(() => {
    // 스크롤 높이
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [ChatHistory]);

  return (
    <>
      <Container ref={scrollRef}>
        {screenState ? <ChatContainer /> : <QuestionContainer />}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 72vh;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default ChatScreen;
