import React from "react";
import { Link } from "react-router-dom";
import MatchRow from "../../components/MatchList"
import HomeBannerSlider from "../../components/ImageBannerSlider";
import GamePage from "../../components/gameCards/GamePage";

const Home = () => {
  return (
    <>
       
    <HomeBannerSlider/>
    <GamePage/>
    </>
  );
};

export default Home;
