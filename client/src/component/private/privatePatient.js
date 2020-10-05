import React from "react";
import { Route, Redirect } from "react-router-dom";

const privatePatient = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "patient" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default privatePatient;
