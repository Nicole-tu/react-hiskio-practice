import React, { useState } from 'react';

import TodoInput from './TodoInput';

// functional component + useState = class component
// 透過組件呼叫順序紀錄取得state

const TodoList = () => {
  // const [state, setState] = useState({初始值});
  const [items, setItems] = useState([]);
  const addItem = text => {
    setItems([...items, { id: Date.now(), text, done: false }]);
  };
  const removeItem = id => {
    let newArr = items.map(item => item.id === id ? { ...item, done: true } : item);
    setItems([...newArr]);
    setTimeout(() => setItems(items.filter(item => item.id !== id)), 1000);
  };
  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">To-Do List</h1>
      </div>
      <TodoInput addItem={addItem} />
      <div className="items">
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span><a className={item.done ? 'done' : 'check'} onClick={() => removeItem(item.id)} ><i className="far fa-check-circle" /></a></span>
              <span className={item.done ? 'list-done' : null}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
