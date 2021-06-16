import { FC } from "react";
import HomePosts from "./components/home-posts";
import { Page } from "../page";

const HomePage: FC = () => {
  return (
    <Page>
      <HomePosts />
    </Page>
  );
};

export default HomePage;
