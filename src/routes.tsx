import { Route } from 'react-router-dom';

import { Launch } from './components/Launch';

export const Routes = [
  <Route exact={true} path="/launch" component={Launch} />
];

export default Routes;
