import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import rootReducer from './data/rootReducer';

import IndexContainer from './containers/IndexContainer';

const store = createStore(rootReducer, {});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Provider store={store}>
        <IndexContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
