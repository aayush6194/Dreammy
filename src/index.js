import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from  './components/Loader';
import * as serviceWorker from './serviceWorker';


  ReactDOM.render(<Loader />, document.getElementById('root'));
  setTimeout(
    ()=>ReactDOM.render(<App />, document.getElementById('root'))
  , 1000);


serviceWorker.register();
