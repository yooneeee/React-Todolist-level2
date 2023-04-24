import { v4 as uuidv4 } from "uuid";

//action value
const TODO_INSERT = "TODO/INSERT";
const TODO_DELETE = "TODO/DELETE";
const TODO_STATUS_CHANGE = "TODO/STATUS_CHANGE";

//action creator: action value 리턴
export const addTodo = (title, contents) => {
  return {
    type: TODO_INSERT,
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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_INSERT:
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
      /*       return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      }); */
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};
export default todos;
