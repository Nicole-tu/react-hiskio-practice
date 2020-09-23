import React from 'react';

const TodoList = () => {
  const items = [];
  return (
    <div>
      <TodoInput />
      <ul>
        {item.map(item => (
          <TodoItem key={item.id}>{item.text}</TodoItem>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;
