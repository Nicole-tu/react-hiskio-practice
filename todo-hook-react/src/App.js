import React from 'react';
import TodoList from './TodoList';
import './App.css';

// functional component + useState = class component
// 透過組件呼叫順序紀錄取得state

const App = () => <TodoList />;

export default App;
