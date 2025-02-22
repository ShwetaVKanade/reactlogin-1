import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, setUserName }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // No validation will be performed on the password
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple check to ensure fields are not empty.
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Both username and password are required.");
      return;
    }

    // Store the username and update the state.
    localStorage.setItem("userName", username);
    setUserName(username);
    setIsAuthenticated(true);
    navigate("/home"); // Redirect to the Home page after login
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
