import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: rgb(0, 0, 0, 0.2);
  top: ${(props) => props.top};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default function Modal({ showModal, userData, setUserData }) {
  //userData.push(e.target.value)
  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')

  const inputValueSubmit = () => {
    const data = {
      id: userData.length+1 ,
      title: inputValue,
      content: inputValue1,
      date: inputValue2
    }

    setUserData([...userData, data])
  }
  return (
    <>
      {showModal ? (
        <ModalContainer width={"512px"} height={"90px"}>
          <div className="Input_Container">
            <input
              type={"text"}
              placeholder={"할 일을 입력 해주세요"}
              value={inputValue}
              className="Work_Input"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type={"text"}
              value={inputValue1}
              placeholder={"내용을 입력해 주세요"}
              className="Content_Input"
              onChange={(e) => setInputValue1(e.target.value)}
            />
            <input
              type={"text"}
              value={inputValue2}
              placeholder={"날짜를 입력해 주세요"}
              className="Date_Input"
              onChange={(e) => setInputValue2(e.target.value)}
            />
          </div>
          <button className="Submit_Button" onClick={inputValueSubmit}>하이</button>
        </ModalContainer>
      ) : null}
    </>
  );
}
