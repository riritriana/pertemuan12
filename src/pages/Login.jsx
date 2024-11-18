import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (username === "user" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Username atau password salah");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="form">
      <h1 className="title-login">Login</h1>

        <label         >
          Username:
          <input
          className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      
        <label>
          Password:
          <input
                    className="form-input"

            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
}
