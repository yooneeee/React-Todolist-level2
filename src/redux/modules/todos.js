import { v4 as uuidv4 } from "uuid";

// 리덕스에선 값의 수정이 리듀서에서 일어남!
// 리덕스 모듈에 있는 state를 변경하기 위해서는 그에 해당하는 액션 객체를 모두 만들어줘야함

//action value
const TODO_INSERT = "TODO/INSERT";
const TODO_DELETE = "TODO/DELETE";
const TODO_STATUS_CHANGE = "TODO/STATUS_CHANGE";

//action creator(리듀서에게 보낼 명령 만들기): action 객체 리턴
export const addTodo = (title, contents) => {
  return {
    type: TODO_INSERT, //액션 객체는 반드시 type이라는 키 가짐(액션 객체를 리듀서에게 보냈을 때, 리듀서는 객체 안에서 type이란 키를 확인하기 때문)
    title,
    contents,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: TODO_DELETE,
    payload,
  };
};
export const toggleStatusTodo = (payload) => {
  return {
    type: TODO_STATUS_CHANGE,
    payload,
  };
};
//export const getTodoById = () => {};

//초기 상태 값(useState를 사용해 괄호안에 초기값 지정해준 것과 같은 이치)
const initialState = [
  {
    title: "리액트 공부하기",
    contents: "리액트 기초를 공부해봅시다",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "리액트",
    contents: "리액트",
    isDone: true,
    id: uuidv4(),
  },
];

// 리듀서 => 변화를 일으키는 함수!(그냥 함수다라고 기억해도 ok)
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_INSERT: //case: action.type(dispatch로부터 전달받은 action 타입이 해당 case랑 일치할 때 아래 return 실행)
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
          contents: action.contents,
          isDone: false,
        },
      ];
    case TODO_DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case TODO_STATUS_CHANGE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

//module파일에서는 리듀서를 export default함
export default todos;
