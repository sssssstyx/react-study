import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';
import Index from './components/demo'
ReactDOM.render(
  <>
  <HelloComponent/>
  <Index/>
  </>,
  document.getElementById('root')
);
