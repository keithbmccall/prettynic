import React from "react";
import { Switch, Route } from "react-router-dom";
import PostsPage from "../pages/posts";
import HomePage from "../pages/home";

const ContentRouter = (props) => {
  return (
    <Switch>
      <Route path="/posts/:id">
        <PostsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default ContentRouter;
