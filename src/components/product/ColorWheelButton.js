import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

class ColorWheelButton extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string,
    sku: PropTypes.string,
    onColorChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  getX(currentPartition, min, max) {
    const partitions = this.props.colors.length - 1;
    const diff = max - min;

    return ((currentPartition / partitions) * diff) + min;
  }

  getY(x) {
    return -((x - 1) * (x + 1));
  }

  onColorChange(color) {
    console.log(color);
  }

  renderButtons() {
    const {colors} = this.props;

    return colors.map((color, index) => {
      const x = this.getX(index, -1, 1);
      const y = this.getY(x);

      return (
        <Entity
          key={`${color}-${index}`}
          geometry={{
            primitive: 'cylinder',
            radius: 0.2,
            height: 0.01,
          }}
          material={{color}}
          position={{x: 0, y: 0, z: 0}}
          animation={{
            property: 'position',
            dur: 2000,
            delay: index * 500,
            to: `${x} ${y} 0`
          }}
          rotation="-90 0 0"
          events={{
            click: () => this.onColorChange(color),
          }}
        />
      )
    });
  }

  render() {
    return (
      <Entity>
        <Entity
          geometry={{
            primitive: 'cylinder',
            radius: 0.3,
            height: 0.01,
          }}
          material={{color: 'black'}}
          position={{x: 0, y: 0, z: 0.01}}
          rotation="-90 0 0"
        />
        {this.renderButtons()}
      </Entity>
    );
  }
}

export default ColorWheelButton;
