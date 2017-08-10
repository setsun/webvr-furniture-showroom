import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

class ProductColorButton extends React.Component {
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

  getPosition(x0, y0, radius, theta) {
    const x = x0 + (radius * Math.cos(theta));
    const y = y0 + (radius * Math.sin(theta));

    return {x, y};
  }

  onColorChange(color) {
    console.log(color);
  }

  renderButtons() {
    const {colors} = this.props;
    const slice = (2 * Math.PI) / (colors.length - 1);

    return colors.map((color, index) => {
      const {x, y} = this.getPosition(0, 0, 0.3, slice * index);

      return (
        <Entity
          key={`${color}-${index}`}
          position={{x: 0, y: 0, z: 0}}
          animation={{
            property: 'position',
            dur: 750,
            delay: index * 50,
            to: `${x} ${y} 0`
          }}
          rotation="-90 0 0">
          <a-cylinder
            height="0.01"
            material="side: double; transparent:true; opacity: 0.5;"
            open-ended="true"
            color="white"
            radius="0.15"
          />
          <a-cylinder
            height="0.01"
            material="side: double;"
            open-ended="true"
            color="white"
            radius="0.125"
            width="0.125"
          />
          <Entity
            geometry={{
              primitive: 'cylinder',
              radius: 0.075,
              height: 0.01,
            }}
            material={{color}}
            events={{
              click: () => this.onColorChange(color),
            }}
          />
        </Entity>
      )
    });
  }

  render() {
    return (
      <Entity>
        <Entity
          geometry={{
            primitive: 'cylinder',
            radius: 0.1,
            height: 0.01,
          }}
          material={{color: '#37474F'}}
          position={{x: 0, y: 0, z: 0.01}}
          rotation="-90 0 0"
        />
        {this.renderButtons()}
      </Entity>
    );
  }
}

export default ProductColorButton;
