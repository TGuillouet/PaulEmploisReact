import React, { Component } from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

/* Import custom components */
import Header from './Header';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Home} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
