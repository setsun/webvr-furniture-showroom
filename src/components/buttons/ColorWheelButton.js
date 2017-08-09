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
  }

  getX(currentPartition, min, max) {
    const partitions = this.props.colors.length - 1;
    const diff = max - min;

    return ((currentPartition / partitions) * diff) + min;
  }

  getY(x) {
    const c = 0.5;

    return -((x - 1.25) * (x + 1.25)) + c;
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
            radius: 0.25,
            height: 0.01,
          }}
          material={{color}}
          position={{x: 0, y: 0.75, z: -2}}
          animation={{
            property: 'position',
            dur: 2000,
            delay: index * 500,
            to: `${x} ${y} -2`
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
            radius: 0.35,
            height: 0.01,
          }}
          material={{color: 'black'}}
          position={{x: 0, y: 0.75, z: -1.99}}
          rotation="-90 0 0"
        />
        {this.renderButtons()}
      </Entity>
    );
  }
}

export default ColorWheelButton;
