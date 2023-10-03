import React, { useState } from "react";
import "./login.scss";
import { analysis, login } from "../../utils/fetch";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login({ email: emailOrUsername, password });
    console.log(response);
    if (response.status === "success") {
      ///////////////logic to navigate to protected route when response is recieved
      ///////////////logic to navigate to protected route when response is recieved
      ///////////////logic to navigate to protected route when response is recieved
      ///////////////logic to navigate to protected route when response is recieved
    }

    console.log(
      "Login clicked with email/username:",
      emailOrUsername,
      "and password:",
      password
    );
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordClicked(true);
    // "Forgot Password" functionality here
    // we can use emailOrUsername state to send a reset link or take appropriate action
    console.log(
      "Forgot Password clicked with email/username:",
      emailOrUsername
    );
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {forgotPasswordClicked ? (
          <p className="forgot-password-message">
            We've sent instructions to reset your password to your email
            address.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email or Username:</label>
              <input
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <div className="Psswordwordinput">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="visibility-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <p
              className="forgot-password-link"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
