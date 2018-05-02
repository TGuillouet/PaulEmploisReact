import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="aa" />, document.getElementById('container'));
registerServiceWorker();
