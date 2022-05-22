import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import logo from "../img/Logo.png";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";
import { useEffect } from "react";

export const Routes = ({
  user,
  setUser,
  token,
  setToken,
  authenticated,
  setAuthenticated,
}) => {
  useEffect(() => {
    token = "@KenzieHub:Token";

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

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
        <Dashboard authenticated={authenticated} />
      </Route>
    </Switch>
  );
};
