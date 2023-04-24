import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StLayout = styled.div`
  border: 2px solid gray;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stbox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Stid = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0px 24px;
  align-items: center;
`;

const StTitle = styled.div`
  display: block;
  font-size: 2em;
  margin: 0.67em 0 0.67em 0;
  font-weight: bold;
`;

const StContent = styled.div`
  padding: 0px 24px;
`;

const St = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Stbtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  background-color: #abe9cd;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 100px;
`;
function Detail() {
  const Navigate = useNavigate();
  const data = useSelector((state) => {
    return state.todos;
  });

  const param = useParams();
  const todo = data.find((todo) => todo.id === param.id);
  return (
    <div>
      <St>
        <StLayout>
          <Stbox>
            <div>
              <Stid>
                <div>id : {todo.id}</div>
              </Stid>
              <StTitle>{todo.title}</StTitle>
              <StContent>{todo.contents}</StContent>
              <div>
                <Stbtn
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  이전으로
                </Stbtn>
              </div>
            </div>
          </Stbox>
        </StLayout>
      </St>
    </div>
  );
}

export default Detail;
