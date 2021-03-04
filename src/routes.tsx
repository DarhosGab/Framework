import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirstSection from './pages/firstSection/FirstSection';
import PostsSection from './pages/postsSection/PostsSection';
import AlbumsSection from './pages/albumsSection/AlbumsSection';
import TodosSection from './pages/todosSection/TodosSection';

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
