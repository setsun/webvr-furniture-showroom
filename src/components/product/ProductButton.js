import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

class ProductInfoBubble extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <a-entity>
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
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
