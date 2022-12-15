import "./App.css";
import Header from "./Component/Header";
import UserInfo from "./Component/UserInfo";
import { dummyData } from "./dummyData";
import { useState } from "react";
import TodoPlusIcon from "./Component/TodoPlusIcon.jsx";
import Modal from "./Component/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(dummyData);
  const menuHandler = () => {
    setShowModal(!showModal);
  };

  const deleteHendler = (id) => {
    const findId = userData.filter((el) => {
      return el.id !== id;
    });

    console.log(findId);

    return setUserData(findId);
  };

  return (
    <>
      <main>
        <Header />
        <UserInfo />
        <div className="Todo_List_Block">
          <div className="Todo_List_Length">
            등록된 Todo List의 개수는 {userData.length}개 입니다
          </div>
          <ul className="List_Title_Container">
            {userData.map((el) => {
              return (
                <li key={el.id}>
                  <input type={"checkbox"} />
                  {el.title}
                  <p>{el.date}</p>
                  <button onClick={() => deleteHendler(el.id)}>삭제</button>
                </li>
              );
            })}
          </ul>
        </div>
        <Modal
          showModal={showModal}
          userData={userData}
          setUserData={setUserData}
        />
        <TodoPlusIcon menuHandler={menuHandler} />
      </main>
    </>
  );
}

export default App;
