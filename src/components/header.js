import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3px;
`;
const HeaderMain = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Buttons = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
`;
const Name = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;
function Headers() {
  const history = useHistory();
  function handleLogOut() {
    localStorage.removeItem("token");
    history.push("/api/login");
  }
  return (
    <HeaderMain>
      <Name>FriendDataBase</Name>
      <ButtonGroup>
        <Link to="/api/login">
          <Buttons>Login</Buttons>
        </Link>
        <Link to="/api/friendsList">
          <Buttons>FriendList</Buttons>
        </Link>
        <Link to="/api/friends">
          <Buttons>AddFriend</Buttons>
        </Link>

        <Buttons onClick={handleLogOut}>LogOut</Buttons>
      </ButtonGroup>
    </HeaderMain>
  );
}
export default Headers;
