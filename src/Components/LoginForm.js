import React, { useState } from "react";
import signup from "../assets/images/3856358.jpg";
import bottom from "../assets/images/2915898.jpg";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login with:", { email, password });
  };

  return (
    <div className="row m-auto">
       <div className="w-75 col-2">
        <img src={signup} style={{width:"100%"}}/>
      </div>
      <div className="w-25 col-2 p-5 border vh-100 log-signup">
    <form onSubmit={handleLogin} className="signup-form">
      <h2 className="text-center mb-4">Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
        <div>forgot password</div>
        <div>Signup</div>
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Login
      </button>
    </form>
    <div className="footer-image">
        <img src={bottom} style={{width:"100%"}}/>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
