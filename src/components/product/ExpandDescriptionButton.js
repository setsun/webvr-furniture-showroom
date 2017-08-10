import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

class ExpandDescriptionButton extends React.Component {
  static propTypes = {
    onExpandDescription: PropTypes.func.isRequired,
  }

  render() {
    const {
      onExpandDescription,
    } = this.props;

    return (
      <a-entity onClick={() => onExpandDescription()}>
        <a-image
          src="#icon-collapse-circle"
          height="0.2"
          width="0.2"
        />
      </a-entity>
    );
  }
}

export default ExpandDescriptionButton;
