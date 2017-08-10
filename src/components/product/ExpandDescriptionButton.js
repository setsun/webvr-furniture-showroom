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
        {false && <a-image src="#icon-expand" />}
        <a-circle
          radius="0.1"
          color="#37474F"
        />
      </a-entity>
    );
  }
}

export default ExpandDescriptionButton;
