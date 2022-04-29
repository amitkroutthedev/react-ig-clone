import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";
import Direct from "./pages/Direct/Direct";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import "./App.css";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={SignIn} />
      <Route path="/home" component={Home} />
      <Route exact path="/direct" component={Direct} />
      <Route exact path="/direct/:id" component={Direct} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/:id*" component={Profile} />
    </Switch>
  );
}

export default App;
