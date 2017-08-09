import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import IndexContainer from './IndexContainer';

export default () => {
  return (
    <Route
      render={({location}) => (
        <div key={location.key}>
          <Switch>
            <Route exact path='/' component={IndexContainer} />
          </Switch>
        </div>
      )}
    />
  )
}
