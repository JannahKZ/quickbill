import React, { useState } from "react";

function RegisterForm({ switchForm }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Register submitted!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="form-box Register">
      <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <label>Username</label>
          <box-icon type="solid" name="user" color="gray"></box-icon>
        </div>
        <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Email</label>
          <box-icon type="solid" name="envelope" color="gray"></box-icon>
        </div>
        <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <label>Password</label>
          <box-icon type="solid" name="lock-alt" color="gray"></box-icon>
        </div>
        <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
          <button className="btn" type="submit">Register</button>
        </div>
        <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
          <p>Already have an account? <a href="#" onClick={switchForm}>Sign In</a></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
