import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Request from "./Request";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (login === "123" && password === "000") {
      setAuthenticated(true);
      navigate("/tadminrequest"); 
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <main>
      <h1 className="header">Login Page</h1>
      <div>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          id="login"
          className="nameinput"
          required
          placeholder="Enter Your Login Id"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="passwordinput"
          required
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="loginsubmit">
        Login
      </button>
      {authenticated && (
        <Routes>
          <Route path="/tadminrequest" element={<Request />} />
        </Routes>
      )}
    </main>
  );
};

export default Login;
