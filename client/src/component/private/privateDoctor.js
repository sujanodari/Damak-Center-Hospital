import React from "react";
import { Route, Redirect } from "react-router-dom";

const privateDoctor = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "doctor" ? (
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

export default privateDoctor;
