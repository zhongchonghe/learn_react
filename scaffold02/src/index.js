import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './组件通信/App';
// import App from './react实现插槽/App';
// import App from './跨组件通信/context';
// import App from './兄弟组件通信/brother'
// import App from './高阶组件/定义方式'
// import App from './高阶组件/鉴权'
// import App from './高阶组件/生命周期劫持'
import App from './样式/home'  

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <App name="zch" />
);


// root.render(<App tab="home" />);