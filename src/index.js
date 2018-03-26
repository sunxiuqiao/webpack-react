import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main'

const title = 'hello world';

ReactDOM.render(
    <div><Main/></div>,
    document.getElementById('app')
);
//module.hot.accept()