import React from "react";
import HomeBox from "../../components/HomeBox/HomeBox";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import ExploreVideoRow from "../../components/ExploreVideoRow/ExploreVideoRow";
import ExploreRowCards from "../../components/ExploreRowCards/ExploreRowCards";
import "./Explore.css";
function Explore() {
  return (
    <HomeBox>
      <div className="explore">
        <ExploreVideoRow />
        <ExploreRowCards />
        <ExploreRowCards />
        <ExploreRowCards />
        <BottomNavigation />
      </div>
    </HomeBox>
  );
}

export default Explore;
