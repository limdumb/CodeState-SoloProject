import styled from "styled-components";

const ModalContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #dedede;
  position: absolute;
  top: ${(props) => props.top};
`;

export default function Modal({ showModal }) {
  return (
    <>
      {showModal ? (
        <div className="Out_Modal">
          <ModalContainer
            width={"200px"}
            height={"716px"}
          ></ModalContainer>
        </div>
      ) : null}
    </>
  );
}
