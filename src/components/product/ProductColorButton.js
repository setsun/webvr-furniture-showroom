import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

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
    this.setState({open: false});
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  renderButtons() {
    const {colors} = this.props;
    const slice = (2 * Math.PI) / (colors.length - 1);

    return colors.map((color, index) => {
      const {x, y} = this.getPosition(0, 0, 0.3, slice * index);

      return (
        <a-entity
          key={`${color}-${index}`}
          position="0 0 0"
          animation={`
            property: position;
            dur: 750;
            delay: ${index} * 50;
            to: ${x} ${y} 0
          `}>
          <a-ring
            material="transparent:true; opacity: 0.5;"
            color="white"
            radius-inner="0.1"
            radius-outer="0.125"
          />
          <a-ring
            color="white"
            radius-inner="0.075"
            radius-outer="0.1"
          />
          <a-circle
            height="0.01"
            radius="0.075"
            color={color}
            onClick={() => this.onColorChange(color)}
          />
        </a-entity>
      )
    });
  }

  renderBaseButton() {
    return (
      <a-entity position="0 0 0.01">
        <a-circle
          radius="0.1"
          height="0.01"
          color="#37474F"
          onClick={() => this.toggleOpen()}
        />
      </a-entity>
    );
  }

  render() {
    const {
      open
    } = this.state;

    return (
      <a-entity>
        {this.renderBaseButton()}
        {open && this.renderButtons()}
      </a-entity>
    );
  }
}

export default ProductColorButton;
