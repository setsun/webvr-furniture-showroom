import 'aframe-animation-component';
import 'aframe-layout-component';
import 'aframe-svgfile-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

class CategoriesCarousel extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  }

  render() {
    return (
      <Entity position="0 1.5 0" rotation="-90 0 0">
        <a-cylinder
          rotation="90 0 0"
          height="1.6"
          open-ended="true"
          color="gray"
        />
        <a-entity layout="type: circle; margin: 6; radius: 3.25">
        </a-entity>
      </Entity>
    );
  }
}

export default CategoriesCarousel;
