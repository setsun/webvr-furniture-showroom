import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';
import {Entity, Scene} from 'aframe-react';

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

    this.renderButtons = this.renderButtons.bind(this);
    this.getX = this.getX.bind(this);
    this.getY = this.getY.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getX(currentPartition, min, max) {
    const partitions = this.state.colors.length - 1;
    const diff = max - min;

    return ((currentPartition / partitions) * diff) + min;
  }

  getY(x) {
    const c = 0.5;

    return -((x - 1.25) * (x + 1.25)) + c;
  }

  onButtonClick() {
    console.log('clicked');
  }

  renderButtons() {
    const {colors} = this.state;

    return colors.map((color, index) => {
      const x = this.getX(index, -1, 1);
      const y = this.getY(x);

      return (
        <Entity
          key={`${color}-${index}`}
          geometry={{
            primitive: 'cylinder',
            radius: 0.25,
            height: 0.01,
          }}
          material={{color}}
          position={{x: 0, y: 0.5, z: -2}}
          animation={{property: 'position', dur: 2000, to: `${x} ${y} -2`}}
          rotation="-90 0 0"
          events={{
            click: this.onButtonClick,
          }}
        />
      )
    });
  }

  render () {
    return (
      <Scene>
        {this.renderButtons()}
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
