import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const StWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StListBox = styled.div`
  border: 4px solid black;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  background-color: gray;
  background: linear-gradient(#3eadcf, #abe9cd);
`;

const StListbtn = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: white;
  border: 2px solid gray;
  /* ${(props) => props.borderColor} */
`;

const StListBtnList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

function TodoList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.todos;
  });
  const deleteClick = (payload) => {
    dispatch(deleteTodo(payload));
  };

  const stateChangeClick = (payload) => {
    dispatch(toggleStatusTodo(payload));
  };
  return (
    <div>
      {" "}
      <div>
        <div>
          <h3 className="listTitle">Working..🔥</h3>
          <StWrapper>
            {data.map((todo) => {
              if (!todo.isDone) {
                return (
                  <StListBox key={todo.id}>
                    {/*박스*/}
                    {/* 상세보기  */}
                    <Link to={`/detail/${todo.id}`}>상세보기</Link>
                    <h3 className="title">{todo.title}</h3>
                    <h5 className="content">{todo.contents}</h5>
                    <StListBtnList>
                      <StListbtn
                        className="delete_btn"
                        onClick={() => deleteClick(todo.id)}
                      >
                        삭제하기
                      </StListbtn>
                      <StListbtn
                        className="done_btn"
                        onClick={() => stateChangeClick(todo.id)}
                      >
                        완료
                      </StListbtn>
                    </StListBtnList>
                  </StListBox>
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
            {data.map((todo) => {
              if (todo.isDone) {
                return (
                  <StListBox key={todo.id}>
                    <Link to={`/detail/${todo.id}`}>상세보기</Link>
                    <h3 className="title">{todo.title}</h3>
                    <h5 className="content">{todo.contents}</h5>
                    <StListBtnList>
                      <StListbtn
                        className="delete_btn"
                        onClick={() => deleteClick(todo.id)}
                      >
                        삭제하기
                      </StListbtn>
                      <StListbtn
                        className="done_btn"
                        onClick={() => stateChangeClick(todo.id)}
                      >
                        취소
                      </StListbtn>
                    </StListBtnList>
                  </StListBox>
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
