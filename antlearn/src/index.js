import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
// import App from './comment/App'
// import App from './transition/App'
import App from './App'
moment.locale('zh-cn');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
