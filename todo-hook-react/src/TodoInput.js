import React, { useState, useEffect, useRef } from 'react';

const TodoInput = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChangeText = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addItem(text);
    setText('');
  };

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <form onSubmit={onSubmit}>
      <input className="addItem" type="text" value={text} onChange={onChangeText} ref={ref} />
      <button className="add" type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
