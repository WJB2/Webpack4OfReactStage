import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import "./utils/Rem";//引入将根页面的fontsize修改后 直接就可以在项目中使用rem实现自适应

ReactDOM.render(<App />,document.getElementById('root'));