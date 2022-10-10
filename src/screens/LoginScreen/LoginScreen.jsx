import React, { useState } from "react";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      {/* Login Screen Background */}
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        {/* Sign In Button */}
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        {/* Login Screen GRadient */}
        <div className="loginScreen__gradient" />
      </div>

      {/* Login Screen Body */}
      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, TV programmes, and more.</h1>
          <h2>Watch anywhere. Cancel it anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen__getStarted"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
