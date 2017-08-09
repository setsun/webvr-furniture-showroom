import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

class ProductInfoBubble extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <Entity>
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
      </Entity>
    );
  }
}

export default ProductInfoBubble;
