import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();

export default App;