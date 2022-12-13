import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #bbbbbb;
  margin-top: 2px;
`;

const HeaderTitle = styled.span`
  font-size: 24px;
  width: 88%;
  display: flex;
  justify-content: center;
  padding-right: 30px;
`;

export default function Header({ menuHandler }) {
  return (
    <MainHeader>
      <div className="Menu__Icon__Container">
        <MenuIcon
          className="material-icons"
          fontSize="large"
          onClick={() => menuHandler()}
        />
      </div>
      <HeaderTitle>👾 Todo List 👾</HeaderTitle>
    </MainHeader>
  );
}
