import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading() {
    return <div>loading...</div>
  },
});

export default () => <LoadableComponent/>
