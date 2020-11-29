import React, { FC } from "react";
import { Layout } from "../../components/layout";
import Posts from "../posts/components/posts";
import { devData } from "../../data";

const HomePage: FC = (props) => {
  return (
    <div className="pt5 mt3 flex flex-column w-100 items-center main center">
      <Posts posts={devData.posts} isHome={true} />
    </div>
  );
};

export default HomePage;
