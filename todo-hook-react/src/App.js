import React from 'react';
import TodoList from './TodoList';

// functional component + useState = class component
// 透過組件呼叫順序紀錄取得state

const App = () => {
  // const [state, setState] = useState(0);

  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default App;
