import React from "react";
import styled from "styled-components";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Header from "../components/Header";

const StLayout = styled.div`
  margin: 0 auto;
  /* 조정 */
  max-width: 1200px;
  min-width: 800px;
`;

function Main() {
  return (
    <StLayout>
      <Header />
      <AddTodo />
      <TodoList />
    </StLayout>
  );
}

export default Main;
