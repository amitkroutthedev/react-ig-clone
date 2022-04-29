import { useEffect, useState } from "react";
import { Igtv, Posts, Saved, Settings, Tagged } from "../../components/icons";
import ExploreRowCards from "../../components/ExploreRowCards/ExploreRowCards";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import HomeBox from "../../components/HomeBox/HomeBox";
import { useParams } from "react-router-dom";
import "./Profile.css";
function Profile() {
  let { id } = useParams();
  const [userImage, setUserImage] = useState();
  useEffect(() => {
    if (id === "amit") {
      setUserImage("https://avatars.githubusercontent.com/u/48612930?v=4");
    } else {
      setUserImage("https://picsum.photos/200");
    }
  }, [id]);

  return (
    <HomeBox>
      <div className="profile">
        <header className="profileHeaderRow">
          <div className="profilePhotoCol">
            <img src={userImage} alt="profile" />
          </div>
          <div className="profileContentCol">
            <div className="title">
              <div className="username">
                <span>{id}</span>
              </div>
              <div className="editProfile">
                <span>Edit Profile</span>
              </div>
              <div className="settings">
                <Settings />
              </div>
            </div>
            <div className="counter">
              <div>
                <span>3&nbsp;</span>
                posts
              </div>
              <div>
                <span>150&nbsp;</span>
                followers
              </div>
              <div>
                <span>200&nbsp;</span>following
              </div>
            </div>
            <div className="biographyRow">
              <div className="displayName">
                <span>{id}</span>
              </div>
              <div className="biography">
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
        </header>
        <div className="profileTabs">
          <div className="tabItem active">
            <Posts />
            <span>Posts</span>
          </div>
          <div className="tabItem">
            <Igtv />
            <span>IGTV</span>
          </div>
          <div className="tabItem">
            <Saved />
            <span>Saved</span>
          </div>
          <div className="tabItem">
            <Tagged />
            <span>Tagged</span>
          </div>
        </div>
        <div className="profilePosts">
          <ExploreRowCards />
          <ExploreRowCards />
        </div>
        <BottomNavigation />
      </div>
    </HomeBox>
  );
}

export default Profile;
