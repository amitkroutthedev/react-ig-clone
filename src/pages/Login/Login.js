import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AppLinks from "../../components/AppLinks/AppLinks";
import PhoneSlide from "../../components/PhoneSlide/PhoneSlide";
import "./Login.css";
function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginBt = useRef();
  useEffect(() => {
    if (email !== "" && password !== "") {
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
    <div className="login">
      <PhoneSlide />
      <div className="loginPanels">
        <div className="loginPanel">
          <div className="logo">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="instagramLogo"
            />
          </div>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className={`textInput ${email.length > 0 && "active"}`}>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Phone number, username or email</label>
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
            <div className="loginBt">
              <button ref={loginBt} disabled>
                Log In
              </button>
            </div>
          </form>
          <div className="or">
            <div className="orBorder"></div>
            <div>
              <span>OR</span>
            </div>
            <div className="orBorder"></div>
          </div>
          <div className="facebookLogin">
            <span>Log in with Facebook</span>
          </div>
          <div className="rememberPass">
            <span>Forgot Password?</span>
          </div>
        </div>
        <div className="siginMiniPanel">
          <span>Don't have an account? </span>
          <span>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign up
            </Link>
          </span>
        </div>
        <AppLinks />
      </div>
    </div>
  );
}

export default Login;
