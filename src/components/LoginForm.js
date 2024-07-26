import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useDispatch } from "react-redux";
import { login as reduxLogin } from "../redux/actions";

const LoginForm = () => {
  const { login: contextLogin } = useContext(UserContext);
  const dispatch = useDispatch();

  // Local state for form fields and error
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username.trim() || !email.trim()) {
      setError("Please fill out both fields.");
      return;
    }

    if (username !== "pritam_bag" || email !== "pritam02b@gmail.com") {
      setError("Invalid username or email.");
      return;
    }

    // Clear error and proceed with login
    setError("");
    const userData = { username, email };
    dispatch(reduxLogin(userData));
    contextLogin(userData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
