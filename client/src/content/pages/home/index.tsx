import { FC } from "react";
import { Page } from "../page";
import HomePosts from "./components/home-posts";

const HomePage: FC = () => {
  return (
    <Page>
      <HomePosts />
    </Page>
  );
};

export default HomePage;
