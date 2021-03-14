import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WbnPlayer from './WbnPlayer';
import NotFound from './NotFound';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter basename="/react_videoplayer/">
    <>
      <Switch>
        <Route exact path="/" component={WbnPlayer} />
        <Route exact path="/:activeVideo" component={WbnPlayer} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
)
export default App;
