import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import AppContainer from './containers/AppContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
