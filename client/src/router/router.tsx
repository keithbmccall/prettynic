import React from "react";
import { Switch, Route } from "react-router-dom";
import PostsPage from "../content/pages/posts";
import HomePage from "../content/pages/home";
import { ContactPage } from "../content/pages/contact";
import { AboutPage } from "../content/pages/about";
import { ArchivePage } from "../content/pages/archive";
import { Locations } from "./urls";

const ContentRouter = (props) => {
  return (
    <Switch>
      <Route path={`${Locations.POST}:id`}>
        <PostsPage />
      </Route>
      <Route path={Locations.CONTACT}>
        <ContactPage />
      </Route>
      <Route path={Locations.ABOUT}>
        <AboutPage />
      </Route>
      <Route path={Locations.ARCHIVE}>
        <ArchivePage />
      </Route>
      <Route path={Locations.HOME}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default ContentRouter;
