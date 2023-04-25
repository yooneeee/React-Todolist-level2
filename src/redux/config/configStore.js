import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos"; //modules파일에있던 todos모듈을 스토어와 연결

/*
combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
즉, combineReducers 안에는 리듀서가 들어간다
*/

const rootReducer = combineReducers({
  todos: todos,
});

const store = createStore(rootReducer);

export default store;
