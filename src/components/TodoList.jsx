import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import Todo from "./Todo";

const StWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function TodoList() {
  const dispatch = useDispatch();

  //컴포넌트에서 리덕스 스토어 조회(useSelector훅 사용)

  const deleteClick = (payload) => {
    dispatch(deleteTodo(payload));
  };

  const stateChangeClick = (payload) => {
    dispatch(toggleStatusTodo(payload));
  };

  const todo = useSelector((state) => {
    return state.todos;
  });
  return (
    <div>
      <div>
        <div>
          <h3 className="listTitle">Working..🔥</h3>
          <StWrapper>
            {todo.map((todo) => {
              if (!todo.isDone) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    deleteClick={deleteClick}
                    stateChangeClick={stateChangeClick}
                  />
                );
              } else {
                return null;
              }
            })}
          </StWrapper>
        </div>
        <div>
          <h3 className="listTitle">Done..!🎉</h3>
          <StWrapper>
            {todo.map((todo) => {
              if (todo.isDone) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    deleteClick={deleteClick}
                    stateChangeClick={stateChangeClick}
                  />
                );
              } else {
                return null;
              }
            })}
          </StWrapper>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
