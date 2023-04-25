# [Redux] My Todo List

항해99 주특기 숙련 과제: 간단한 TODOLIST를 생성해주는 웹

### 구현 사이트(배포) : https://react-todolist-level2.vercel.app/
### 기술스택
React, Redux, Javascript, react-router-dom, HTML, styled-components, Git, Github

### Requirements

** 구현해야 할 기능
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

- **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리**
- todos 모듈은 `**Ducks 패턴**`으로 구현

## 메인 페이지
- Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현
- Todo를 추가하면  제목 input과 내용 input은 다시 빈 값이 되도록 구현
- input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현
- Todo의 완료상태가 true이면, 상태 버튼의 라벨을 “취소”,  false 이면 라벨을 “완료” 로 보이도록 구현
- 전체 화면의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 컨텐츠를 화면의 가운데로 배치
- 상세보기 클릭하면 Todo의 상세 페이지로 이동

## 상세 페이지
- 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼 : `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
    
    
## 제한 사항
- map을 사용할 때 반드시 key을 넣어야 하며, map 의 index를 사용을 금지
- Todo Id 생성 시 todos.length 사용해서 생성하지 말 것!


# :open_file_folder: 컴포넌트 분리 구조
```bash
📦src
 ┣ 📂components
 ┃ ┗ 📜Header.jsx         : 헤더 컴포넌트
 ┃ ┣ 📜AddTodo.jsx        : todo를 입력하는 AddTodo 섹션 컴포넌트
 ┃ ┣ 📜TodoList.jsx       : TodoList들을 보여주는 컴포넌트
 ┃ ┣ 📜Todo.jsx           : 각각의 Todo 컴포넌트
 ┃ 
 ┣ 📂pages
 ┃ ┗ 📜Main.jsx           : 메인 페이지
 ┃ ┣ 📜Detail.jsx         : 상세페이지 
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.jsx             
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

