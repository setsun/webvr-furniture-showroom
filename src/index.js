import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'

import rootReducer from './data/rootReducer';

import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer, {});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
