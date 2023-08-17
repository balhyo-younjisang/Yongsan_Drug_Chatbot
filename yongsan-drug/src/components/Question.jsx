/* eslint-disable react/prop-types */
import { styled } from "styled-components";

// for redux
import { useDispatch } from "react-redux";
import { changeChat } from "../store/Chat";

const Question = (props) => {
  // for use dispatch
  const dispatch = useDispatch();

  const change = ({ target: { innerText } }) => {
    dispatch(changeChat(innerText));
  };

  return (
    <>
      <Sentence onClick={change}>
        <p>{props.sentence}</p>
      </Sentence>
    </>
  );
};

const Sentence = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: 0.4s;
  color: white;
  background-color: #c4c4c4;
  font-size: 1rem;

  &:hover {
    background-color: #9d9d9d;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export default Question;
