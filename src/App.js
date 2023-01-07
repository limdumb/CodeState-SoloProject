import "./App.css";
import Header from "./Component/Header";
import UserInfo from "./Component/UserInfo";
import { useState } from "react";
import TodoPlusIcon from "./Component/TodoPlusIcon.jsx";
import Modal from "./Component/Modal.jsx";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getLocalData = async () => {
      await axios.get("http://localhost:7777/data").then((res) => {
        return setUserData(res.data);
      });
    }

    getLocalData()
  }, []);

  const menuHandler = () => {
    setShowModal(!showModal);
  };

  const deleteHendler = (id) => {
    axios.delete("http://localhost:7777/delete",{data:{id: id}}).then((res)=>{
    })
  };

  return (
    <>
      <main>
        <Header />
        <UserInfo />
        <div className="Todo_List_Block">
          <div className="Todo_List_Length">
            등록된 Todo List의 개수는 {userData && userData.length}개 입니다
          </div>
          <ul className="List_Title_Container">
            {userData &&
              userData.map((el) => {
                return (
                  <li key={el.id}>
                    <input type={"checkbox"} />
                    {el.title}
                    <p>{el.date}</p>
                    <button>수정</button>
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
