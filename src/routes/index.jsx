import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import logo from "../img/Logo.png";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";

export const Routes = ({
  user,
  setUser,
  setToken,
  authenticated,
  setAuthenticated,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Login
          logo={logo}
          setUser={setUser}
          setToken={setToken}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signup">
        <Signup logo={logo} setUser={setUser} authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          logo={logo}
          user={user}
          setToken={setToken}
          setUser={setUser}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
