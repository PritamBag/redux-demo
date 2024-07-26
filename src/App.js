import React from "react";
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext";
import store from "./redux/store";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="App">
          
          <Dashboard />
        </div>
      </UserProvider>
    </Provider>
  );
};

export default App;
