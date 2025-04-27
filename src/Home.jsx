import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sampleUser, setSampleUser] = useState({
    email: "aruljothi128k@gmail.com",
    password: "Aruljothi128K",
  });
  const navigate = useNavigate();

  const buttonClick = () => {
    if (email === sampleUser.email && password === sampleUser.password) {
      navigate("/product");
      // alert("Correct");
    } else {
      alert("Email and Password Not Valid");
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <div>
            <h2>Login</h2>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit" onClick={buttonClick}>
            Login
          </button>
        </form>
        
      </div>
      
  
    </>
  );
}

export default Home;
