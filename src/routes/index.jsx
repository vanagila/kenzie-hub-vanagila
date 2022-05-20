import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import logo from "../img/Logo.png";
import { Signup } from "../pages/Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login logo={logo} />
      </Route>
      <Route exact path="/signup">
        <Signup logo={logo} />
      </Route>
    </Switch>
  );
};
