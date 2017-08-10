import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

class ColorPaletteButton extends React.Component {
  static propTypes = {
    product: PropTypes.object,
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

  getEnterAnimationObject(x, y, index) {
    const position = '0 0 0';
    const animation = `
      property: position;
      dur: 400;
      elasticity: 300;
      delay: ${index * 75};
      easing: easeInOutElastic;
      to: ${x} ${y} 0
    `;

    return {position, animation};
  }

  getExitAnimationObject(x, y) {
    const position = `${x} ${y} 0`;
    const animation = `
      property: position;
      dur: 400;
      elasticity: 300;
      easing: easeInOutElastic;
      to: 0 0 0
    `;
  }

  renderButtons() {
    const {product: {variants}} = this.props;
    const slice = (2 * Math.PI) / (variants.length - 1);

    return variants.map((variant, index) => {
      const {modelId, textureId, color} = variant;
      const {x, y} = this.getPosition(0, 0, 0.3, slice * index);

      console.log(color);

      return (
        <a-entity
          key={`${color}-${index}`}
          position="0 0 0"
          animation={`
            property: position;
            dur: 400;
            elasticity: 300;
            delay: ${index * 75};
            easing: easeInOutElastic;
            to: ${x} ${y} 0
          `}
          onClick={() => this.onColorChange(color)}>
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
            radius="0.075"
            color={color}
          />
        </a-entity>
      )
    });
  }

  renderBaseButton() {
    return (
      <a-entity
        position="0 0 0.01"
        onClick={() => this.toggleOpen()}>
        <a-image
          src="#icon-color-circle"
          height="0.2"
          width="0.2"
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

export default ColorPaletteButton;
