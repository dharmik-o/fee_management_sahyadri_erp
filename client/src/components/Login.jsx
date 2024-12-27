import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(0); // 0 for Student, 1 for Admin
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = "http://localhost:5000/api/auth/login";
      if (admin === 1) {
        url = "http://localhost:5000/api/auth/admin-login";
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, usn: password }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate(admin === 0 ? "/dashboard" : "/admin-login", { state: { usn: password , name: username} });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <span className="sahyadri-logo"></span>
      {/* Add a dynamic class to the login form based on admin state */}
      <div className={`login-form ${admin === 1 ? "admin-mode" : "student-mode"}`}>
        <div className="user">
          <div
            className="admin"
            onClick={() => setAdmin(1)} // Set Admin mode
          >
            Admin
          </div>
          <div
            className="student"
            onClick={() => setAdmin(0)} // Set Student mode
          >
            Student
          </div>
        </div>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;