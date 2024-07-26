import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "../context/UserContext";
import { logout as reduxLogout } from "../redux/actions";
import LoginForm from "./LoginForm";

const Dashboard = () => {
  const { user: contextUser, logout: contextLogout } = useContext(UserContext);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const displayedUser = userData || contextUser;

  const handleLogout = () => {
    dispatch(reduxLogout());
    contextLogout();
  };

  if (!displayedUser) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        Please login to access the dashboard
        <LoginForm />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome, {displayedUser.username}!</h1>
      <p>Email: {displayedUser.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
