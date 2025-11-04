import React, { useState } from "react";

function LoginForm({ switchForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login submitted!\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="form-box Login">
      <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          <label>Username</label>
          <box-icon type="solid" name="user" color="gray"></box-icon>
        </div>
        <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <label>Password</label>
          <box-icon type="solid" name="lock-alt" color="gray"></box-icon>
        </div>
        <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
          <button className="btn" type="submit">Login</button>
        </div>
        <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
          <p>Don't have an account? <a href="#" onClick={switchForm}>Sign Up</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
