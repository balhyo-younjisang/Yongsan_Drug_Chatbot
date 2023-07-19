import { styled } from "styled-components";
import Question from "./Question";

const QuestionContainer = () => {
  // 예시 질문들을 저장해둔 문자열 배열
  const QuestionArr = [
    "마약의 종류를 알려줘",
    "마약의 위험성을 알려줘",
    "가까운 마약 중독 치료 센터의 위치를 알려줘",
    "마약의 부작용은 무엇이 있어?",
  ];

  return (
    <>
      <Container>
        {QuestionArr.map((question, idx) => {
          return <Question sentence={question} key={idx} />;
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 70vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  // 하단 중앙 정렬
  position: absolute;
  bottom: 2rem;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
`;

export default QuestionContainer;
