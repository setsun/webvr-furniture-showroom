import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

class ExpandDescriptionButton extends React.Component {
  static propTypes = {
    onExpandDescription: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
  }

  getImageSrc() {
    const {
      expanded
    } = this.props;

    return `#icon-${expanded ? 'collapse' : 'expand'}-circle`;
  }

  render() {
    const {
      onExpandDescription,
    } = this.props;

    return (
      <a-entity onClick={() => onExpandDescription()}>
        <a-image
          src={this.getImageSrc()}
          height="0.2"
          width="0.2"
        />
      </a-entity>
    );
  }
}

export default ExpandDescriptionButton;
