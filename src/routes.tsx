import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirstSection from './components/FirstSection/FirstSection';
import PostsSection from './components/PostsSection/PostsSection';
import AlbumsSection from './components/AlbumsSection/AlbumsSection';
import TodosSection from './components/TodosSection/TodosSection';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstSection} />
        <Route path="/posts" component={PostsSection} />
        <Route path="/albums" component={AlbumsSection} />
        <Route path="/todos" component={TodosSection} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
