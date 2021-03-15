import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VidPlayer from './VidPlayer';
import NotFound from './NotFound';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={VidPlayer} />
        <Route exact path="/:activeVideo" component={VidPlayer} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
)
export default App;
