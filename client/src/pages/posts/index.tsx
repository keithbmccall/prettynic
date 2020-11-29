import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const PostsPage = (props) => {
  const routeMatch = useRouteMatch();
  const params = useParams();

  console.log({
    params,
    routeMatch,
  });
  return (
    <div className="pt5 mt3 flex flex-column w-100 items-center main debug center">
      posts
    </div>
  );
};

export default PostsPage;
