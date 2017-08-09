import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';
import {Entity, Scene} from 'aframe-react';

import ColorWheelButton from '../components/buttons/ColorWheelButton';

import {onButtonClicked} from '../data/userState';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#4CC3D9',
        '#EF2D5E',
        '#FFC65D',
      ]
    }
  }

  componentDidMount() {
    this.props.onButtonClicked('poop');
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="tree-obj" src="/assets/table_1/table_1.obj"></a-asset-item>
          <a-asset-item id="tree-mtl" src="/assets/table_1/table_1.mtl"></a-asset-item>
        </a-assets>
        <Entity daydream-controls="hand: right" />
        <ColorWheelButton
          colors={this.state.colors}
        />
        <a-entity
          obj-model="obj: #tree-obj; mtl: #tree-mtl"
          position="0 0 -3"
        />
        <Entity
          geometry={{
            primitive: 'plane',
            width: 8,
            height: 8
          }}
          material={{color: '#999999'}}
          position="0 0 -4"
          rotation={{x: -90, y: 0, z: 0}}
        />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{color: '#ECECEC'}}
        />
      </Scene>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    onButtonClicked
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
