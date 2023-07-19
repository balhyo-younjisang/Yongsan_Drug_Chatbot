import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import io from "socket.io-client";

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeScreen } from "../store/Screen";
import { changeChat } from "../store/Chat";
import { appendChatArr } from "../store/ChatHistory";

const Input = () => {
  // for use dispatch
  const dispatch = useDispatch();
  // access the store and change state
  const { chat } = useSelector((state) => state.chat);

  const [inputText, setInputText] = useState();
  const [enterState, setEnterState] = useState(true); // 입력 가능 상태

  /** Input에 입력할 때마다 state를 변경하는 함수 */
  const handleChangeText = ({ target: { value } }) => {
    setInputText(value);
    dispatch(changeChat(value));
  };

  /** Send 버튼을 눌렀을 때 메시지 발송 */
  const sendChat = () => {
    dispatch(changeScreen()); // change screen state
    dispatch(appendChatArr(chat)); // change chat history state

    setInputText(""); // 초기화
    dispatch(changeChat("")); // 초기화
    setEnterState(false); // 답변이 올 때까지 입력 금지

    const socket = io.connect("http://localhost:3000", {
      // socket에 연결
      cors: { origin: "*" }, // cors setting
    });

    socket.emit("chat-msg", chat); // socket 서버에 전송

    // socket 서버에서 보낸 값 받아서 처리
    socket.on("return", (msg) => {
      dispatch(appendChatArr(msg)); // 받아온 값 채팅 배열에 추가
      setEnterState(true); // 답변이 왔으므로 다음 질문 입력 가능
    });
  };

  /** 엔터키가 눌렸는지 확인하는 함수 */
  const EnterSendChat = (e) => {
    if (e.key === "Enter") sendChat(); // 엔터키가 눌렸다면 채팅 배열에 값 추가
  };

  // chat 변수가 업데이트될 때마다 새로 렌더링
  useEffect(() => {
    setInputText(chat);
  }, [chat]);

  return (
    <>
      <InputContainer>
        <Wrap>
          <ClientInput
            type="text"
            placeholder="마약과 관련된 질문을 해보세요."
            value={inputText || ""}
            onChange={handleChangeText}
            onKeyPress={EnterSendChat}
            disabled={!enterState}
          />
          <SendButton onClick={sendChat}>
            <AiOutlineSend className="send" />
          </SendButton>
        </Wrap>
      </InputContainer>
    </>
  );
};

const InputContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15vh;
  background-color: #0b2647;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

const ClientInput = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  height: 7vh;
  width: 100%;
  display: block;
  margin-top: 20px;
  text-align: center;
  font-size: 1.3rem;
  padding-right: 1.4rem;

  &:focus {
    border: 2px solid blue;
  }

  &::placeholder {
    color: gray;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const SendButton = styled.button`
  position: absolute;
  top: 4vh;
  right: 3px;
  border-radius: 5px;
  border: none;
  background-color: inherit;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: yellowgreen;
  }

  &:hover .send {
    color: white;
  }

  // 아이콘 스타일링
  .send {
    width: 1.3rem;
    height: 1.3rem;
    padding: 5px;
    color: gray;
  }
`;

export default Input;
