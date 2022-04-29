import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AppLinks from "../../components/AppLinks/AppLinks";
import "./SignIn.css";
function SignIn() {
  const loginBt = useRef();
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      username !== "" &&
      displayName !== ""
    ) {
      loginBt.current.disabled = false;
    } else {
      loginBt.current.disabled = true;
    }
  }, [email, password]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/home");
  };
  return (
    <div className="signin">
      <div className="signinPanel">
        <div className="logo">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="instagramLogo"
          />
        </div>
        <div className="signinPanelTitle">
          <span>Sign up to see photos and videos from your friends.</span>
        </div>
        <div className="signinFacebookLogin">
          <span>Log in with Facebook</span>
        </div>
        <div className="or">
          <div className="orBorder"></div>
          <div>
            <span>OR</span>
          </div>
          <div className="orBorder"></div>
        </div>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className={`textInput ${email.length > 0 && "active"}`}>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Mobile Number or Email</label>
          </div>
          <div className={`textInput ${displayName.length > 0 && "active"}`}>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label htmlFor="displayName">Full Name</label>
          </div>
          <div className={`textInput ${username.length > 0 && "active"}`}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className={`textInput ${password.length > 0 && "active"}`}>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="signinBt">
            <button ref={loginBt} disabled>
              Sign up
            </button>
          </div>
        </form>
        <div className="acceptTerm">
          <span>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </span>
        </div>
      </div>
      <div className="loginMiniPanel">
        <span>Have an account?</span>
        <span>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Log in
          </Link>
        </span>
      </div>
      <AppLinks />
    </div>
  );
}

export default SignIn;
