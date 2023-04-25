import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const StFrom = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  font-size: 20px;
  color: black;
  background: linear-gradient(#abe9cd, #3eadcf);
`;

const StInput = styled.input`
  border: 2px solid grey;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const Stbtn = styled.button`
  border-radius: 12px;
  color: #ece1d6;
  font-weight: 700;
  height: 40px;
  color: gray;
  width: 140px;
`;

function AddTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const contentsChange = (event) => {
    setContents(event.target.value);
  };

  // 액션 객체를 리듀서로 보내주는 역할: useDispatch훅
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(title, contents));
    setTitle("");
    setContents("");
  };

  return (
    <section>
      <StFrom onSubmit={onSubmitHandler}>
        제목
        <StInput type="text" value={title} onChange={titleChange} />
        내용
        <StInput type="text" value={contents} onChange={contentsChange} />
        <Stbtn>추가하기</Stbtn>
      </StFrom>
    </section>
  );
}

export default AddTodo;
