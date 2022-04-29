import Navbar from "../Navbar/Navbar";
import "./HomeBox.css";
function HomeBox(props) {
  return (
    <div className="home">
      <Navbar />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default HomeBox;
