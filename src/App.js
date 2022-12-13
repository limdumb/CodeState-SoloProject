import "./App.css";
import Header from "./Component/Header";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import UserInfo from "./Component/UserInfo";
import Modal from "./Component/Modal.jsx";
import { dummyData } from "./dummyData";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(dummyData);
  console.log(userData);
  const menuHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <main>
        <Header menuHandler={menuHandler} />
        <Modal showModal={showModal} />
        <UserInfo />
        <ul className="List_Title_Container">
          {userData.map((el) => {
            return (
              <li>
                <input type={"checkbox"}></input>
                {el.title}
              </li>
            );
          })}
        </ul>
      </main>
      <div className="Plus__Icon__Section">
        <MapsUgcIcon fontSize="large" />
      </div>
    </>
  );
}

export default App;
