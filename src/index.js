import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //引入APP
import Layout from './Layout';
import Progress from './Progress';

import * as serviceWorker from './serviceWorker';
import AutoCompleteSingle from './AutoCompleteSingle';
import AutoCompleteTag from './AutoCompleteTag';






ReactDOM.render(
 <div class="container">
    <Layout><App>在index.js中設定文字 </App></Layout>
   <div id="show-area"></div>
   <Progress/>
   1dd
   <AutoCompleteSingle/>
   <AutoCompleteTag/>
 </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
