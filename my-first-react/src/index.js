import React from 'react';// 核心
// import ReactDOM from 'react-dom';// 將react掛載到DOM (1)
import { render } from 'react-dom';// (2)
import List from './List'; // 組件
// <List/> 元素

// (1)
// ReactDOM.render(<List />,
//   document.getElementById('root'));

// (2)
render(<List />,
  document.getElementById('root'));



// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { render } from '@testing-library/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
