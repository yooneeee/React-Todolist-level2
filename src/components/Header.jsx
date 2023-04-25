import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  background-color: gray;
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: black;
  background: linear-gradient(#3eadcf, #abe9cd);
`;

function Header() {
  return (
    <StHeader>
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
}

export default Header;
