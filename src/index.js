import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// to add bootstrap i did :
//      in the terminal: npm i bootstrap@4.1.1
//      and then i wrote the line below:
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';


ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
